/* eslint-disable camelcase */
/* api 公用函数 */
const md5 = require('js-md5')

const db = require('../db')
const pgsql = require('pg')
const utils = require('../utils')
const Base64 = require('js-base64').Base64

const $sql = require('../sqlMap')
const $common = require('../common')

const conn = new pgsql.Pool(db.pgsql)
conn.connect()

/**
 * 获取用户最近的订单信息
 * 用户存在最近订单时返回最近订单的信息；
 * 不存在或查询失败时返回 false。
 */
async function getLatestOrderInfo (user_id) {
  const sqlData = [user_id]
  const response = await conn.query($sql.order.user.queryOrderInfoByUserId, sqlData)
  const orderNum = response.rowCount
  if (orderNum != null && orderNum > 0) { // 用户有最近的订单记录，返回最近订单信息
    return response.rows[orderNum - 1]
  } else { // 用户无最近的订单记录或查询失败
    return false
  }
}

/**
 * 检查最近订单的状态
 * 当返回值为 true 时可以创建新订单；
 * 当返回值为 false 时无法创建新订单。
 */
async function latestOrderStatusCheck (user_id) {
  const sqlData = [user_id]
  const response = await conn.query($sql.order.user.queryOrderInfoByUserId, sqlData)
  const orderNum = response.rowCount
  if (orderNum > 0) { // 存在最近订单
    const latestOrder = response.rows[orderNum - 1]
    const latestOrderStatus = latestOrder.order_status
    // 最近订单进行中或已被接受时
    if (latestOrderStatus == $common.status.waiting || latestOrderStatus == $common.status.receipted) {
      return false
    } else {
      return true
    }
  } else { // 不存在最近订单
    return true
  }
}

/**
 * 生成随机订单号
 * 通过当前时间和 user_id 和随机数拼接成随机订单号。
 */
function generateOrderId (userId) {
  const nowDate = new Date()
  const year = nowDate.getFullYear()
  const month = utils.prefixZero(nowDate.getMonth() + 1, 2)
  const day = utils.prefixZero(nowDate.getDate(), 2)
  const hour = utils.prefixZero(nowDate.getHours(), 2)
  const min = utils.prefixZero(nowDate.getMinutes(), 2)
  const second = utils.prefixZero(nowDate.getSeconds(), 2)
  // user_id 值小于 1000000
  const user_id = utils.prefixZero(userId, 6)
  // 生成介于 0-100000 的随机数
  const random = utils.prefixZero(Math.floor(Math.random() * 100), 3)
  return user_id + month + day + hour + min + second + year + random
}

/**
 * 验证用户 token 是否有效
 * 当用户的 token 存在且未过期，且 role 正确时返回 true；
 * 其它情况返回 false。
 */
async function checkToken (req) { // 用户 token 验证
  const reqBody = req.body
  const user_id = reqBody.user_id // 从请求体获取 user_id
  const role = reqBody.role
  const token = req.headers.authorization // 从请求头获取 token
  const sqlData = [user_id]

  const response = await conn.query($sql.token.getTokenAndRole, sqlData)
  if (response.rowCount === 1) { // 数据库包含该 uesr_id 对应的 token 信息
    const resData = response.rows[0]
    const savedToken = resData.token
    const savedExpirationDate = resData.expiration_date
    const savedRole = resData.role
    const nowDate = new Date().getTime()
    if (token === savedToken && nowDate < savedExpirationDate && role === savedRole) { // 数据库保存的 token 与 localStorage 存储相同且 token 未过期，用户组正确
      return true
    } else {
      return false
    }
  } else { // 数据库无该 user_id 结果
    return false
  }
}

/**
 * 生成随机的 token 令牌
 * 通过对日期和随机数拼接所得值进行加密获得 token 令牌。
 */
function generateToken () {
  const unscrambleToken = new Date().getTime().toString() + Math.floor(Math.random() * 10000 + 1).toString()
  const token = md5(Base64.encode(unscrambleToken))
  return token
}

/**
 * 将传入的密码进行加密
 * 返回加密后的密码
 */
function generateEncryptedPassword (password) {
  return md5(Base64.encode(password))
}

/**
 * 设置数据库中的 token 信息
 * 将用户的登录信息存储到数据库中
 */
function setToken (user_id, token, expiration_date) {
  const sqlData = [token, expiration_date, user_id]

  conn.query($sql.token.setToken, sqlData, (error) => {
    if (error) {
      console.log(error)
      return false
    } else {
      return true
    }
  })
}

/**
 * 获取订单信息
 */
async function queryOrderInfoByOrderId (order_id) {
  const sqlData = [order_id]

  const response = await conn.query($sql.order.queryOrderInfoByOrderId, sqlData)

  if (response.rowCount && response.rowCount === 1) return response.rows[0]
  else return null
}

module.exports = {
  getLatestOrderInfo,
  latestOrderStatusCheck,
  generateOrderId,
  checkToken,
  generateToken,
  generateEncryptedPassword,
  setToken,
  queryOrderInfoByOrderId
}
