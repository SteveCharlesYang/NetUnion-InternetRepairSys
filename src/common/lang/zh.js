module.exports = {
  app: {
    name: '电子科技大学 | 学生宿舍网络报修平台',
    shortName: '网络报修平台'
  },
  viewTitle: {
    home: '主页',
    user: '账户',
    order: '订单',
    about: '关于我们',
    login: '登录'
  },
  theme: {
    darkMode: '夜间模式'
  },
  home: {
    welcomeUser: {
      words: '别担心，',
      slogan: '宿舍网络问题找我们！'
    },
    infoNoteUser: {
      note: '我们建议您首先检查网络是否欠费并试着重启路由器'
    },
    welcomeSolver: {
      words: '现在，',
      slogan: '予身处至暗时刻者以无边慈光！暗の時まで来た者には限りない慈悲を！'
    }
  },
  user: {
    account: {
      title: '账户资料',
      modify: '修改信息',
      modifyPassword: '修改密码',
      logout: '登出',
      logoutText: '确定要退出吗？',
      name: '姓名',
      nickname: '昵称',
      gender: '性别',
      campus: '所在校区',
      location: '寝室地址',
      telephone: '联系电话',
      intro: '个人简介',
      nameMaxLengthErr: '姓名最长 20 字符',
      nicknameMaxLengthErr: '昵称最长 30 字符',
      telephoneNumericErr: '联系电话应该由数字组成',
      telephoneMaxLengthErr: '联系电话最长输入 11 字符',
      introMaxLengthErr: '个人简介最长 50 字符',
      modifyAccountInfoNote: '再次点击按钮可保存修改信息。',
      modifyAccountInfoSucceed: '已保存修改信息！',
      modifyAccountInfoFailed: '修改资料失败，请检查网络或稍后尝试。',
      presentPassword: '当前密码',
      modifiedPassword: '新密码',
      reModifiedPassword: '确认新密码',
      passwordMaxLengthErr: '密码最长 32 位',
      passwordminLengthErr: '密码最短 6 位',
      presentPasswordRequiredErr: '您需要输入当前的密码',
      modifiedPasswordRequiredErr: '您需要输入新的密码',
      reModifiedPasswordRequiredErr: '您需要再次输入新密码',
      reModifiedPasswordErr: '两次输入的新密码不相同，请重新输入',
      sameModifiedPasswordErr: '修改后的密码和当前密码相同，请重新输入',
      modifyPasswordSucceed: '修改密码成功！',
      presentPasswordErr: '当前密码错误，请重新输入',
      unknownErr: '发生不明错误，密码修改失败',
      cancel: '取消',
      submit: '提交',
      confirm: '确认'
    },
    statistics: {
      title: '统计信息',
      statisticsTitle: '项目',
      statisticsValue: '统计',
      finishedOrderTime: '完成订单次数',
      firstOrderDate: '第一次完成订单日期',
      firstOrderSolver: '第一次的处理者',
      lastOrderDate: '最近一次完成订单日期',
      lastOrderSolver: '最近一次处理者',
      unlockedSolver: '解锁的处理者数',
      bestSolver: '你最好的 SOLVER',
      bestSolverOrderedTime: '以及 Ta 帮助你的次数',
      finishedOrderTimeTotally: '完成订单总数',
      finishedOrderTimeMonthly: '本月完成订单数',
      firstOrderUser: '第一次的用户名',
      lastOrderUser: '最近一次用户名',
      unlockedUser: '遇见的用户数（不重复）',
      bestUser: '最佳用户',
      bestUserOrderedTime: '以及你帮助 Ta 的次数',
      orders: ' 个',
      times: ' 次',
      people: ' 人'
    }
  },
  order: {
    waitingStatus: '等待接单',
    receiptedStatus: '已接单',
    canceledByUserStatus: '订单取消',
    canceledBySolverStatus: '订单被取消',
    finishedStatus: '订单完成',
    recordedStatus: '登记完成',
    unknownStatus: '订单穿越了银河系',
    cancelSucceed: '订单取消成功',
    viewAllOrders: '查看所有订单',
    createOrder: {
      user: {
        create: '新建网络报修订单',
        cancelTip: '已填写内容不会消失',
        submit: '提交',
        cancel: '取消',
        nameLabel: '姓名',
        genderLabel: '性别',
        telephoneLabel: '联系电话',
        campusLabel: '所处校区',
        dormitoryLabel: '寝室地址',
        descriptionLabel: '描述（可选）',
        nameMaxLengthErr: '姓名最长输入 20 字符',
        nameRequiredErr: '嗨，请告诉我们您的姓名',
        telephoneNumericErr: '联系电话应该由数字组成',
        telephoneMaxLengthErr: '联系电话最长输入 11 字符',
        telephoneRequiredErr: '联系电话是我们沟通的桥梁',
        genderRequiredErr: '我们会为您指配正确的 SOLVER',
        campusRequiredErr: '两个校区的 SOLVER 同样尽心尽责',
        dormitoryRequiredErr: '填写您的宿舍楼栋与寝室号，我们整装待发',
        descriptionHint: '添加您的空闲时间或对具体情况的描述可以帮助我们更好地解决问题',
        autoEnter: '自动填写',
        autoEnterNote: '将根据您的个人资料自动填写表单',
        orderStatusErr: '您有正在进行中的订单，无法创建新的订单',
        orderStatusCheckErr: '订单信息获取失败',
        createFailed: '订单创建失败，请来电抱怨！',
        createSucceed: '订单创建成功，我们会尽快为您处理！'
      },
      solver: {
        reset: '重置表单',
        resetTip: '是否将已填写内容清空？',
        resetConfirm: '确认重置',
        create: '添加网络报修记录',
        cancelTip: '已填写内容不会消失',
        submit: '提交',
        cancel: '取消',
        nameLabel: '用户姓名（可选）',
        genderLabel: '用户性别',
        telephoneLabel: '用户联系电话（可选）',
        campusLabel: '用户所处校区',
        dormitoryLabel: '用户寝室地址',
        statusLabel: '订单状态',
        descriptionLabel: '用户情况描述（可选）',
        recordLabel: '网络维修记录（可选）',
        nameMaxLengthErr: '姓名最长输入 20 字符',
        genderRequiredErr: '您需要选择用户的性别',
        telephoneNumericErr: '希望……电话是数字就好了',
        telephoneMaxLengthErr: '电话最长输入 11 字符',
        campusRequiredErr: '您需要选择目标寝室的所处校区',
        dormitoryRequiredErr: '您需要填写宿舍楼栋与寝室号',
        statusRequiredErr: '您需要选择订单状态',
        descriptionHint: '添加用户网络的具体情况可以帮助处理者更快找到解决方案',
        recordHint: '添加网络维修的具体情况可以帮助我们更好地记录与进步',
        createFailed: '记录订单失败，也许是服务器炸了！',
        createSucceed: '记录订单成功，感谢您的付出！',
        statusTooltipDefault: '在此处选择订单状态',
        statusTooltipWaiting: '此订单可以被所有处理者接取',
        statusTooltipReceipted: '此订单由您创建并接取',
        statusTooltipRecorded: '此订单由您创建并完成',
        statusTooltipUnexpected: '此订单状态值为预期之外的值，建议刷新页面'
      }
    },
    latestOrder: {
      title: '最近的订单',
      freeTime: '空闲时间',
      location: '寝室地址',
      solver: '处理人',
      solverTelephone: '工作电话',
      viewDetails: '进入订单',
      status: '订单状态',
      cancelOrder: '取消订单',
      cancel: '取消',
      confirm: '确认',
      cancelOrderNote: '已被接受的订单请联系处理人取消',
      cancelOrderText: '尚无人接单，您确定要取消当前订单吗？',
      cancelOrderSucceed: '您成功取消了当前订单',
      cancelOrderFailed: '似乎发生了什么问题，您未能取消当前订单',
      orderInfo: '订单信息',
      name: '姓名',
      campus: '所处校区',
      description: '订单描述',
      telephone: '联系电话',
      date: '订单日期'
    },
    orderList: {
      title: '订单列表',
      filterLabel: '订单过滤',
      loadingText: '你电的某台服务器正在拼命加载订单中...',
      loadingMore: '加载更多',
      header: {
        userName: '用户名',
        userGender: '性别',
        userCampus: '校区',
        userDormitory: '寝室',
        status: '订单状态',
        solverName: '处理者',
        actions: '操作',
        createDate: '创建日期',
        orderOpenTime: '进行时间'
      },
      expanded: {
        telephone: '用户联系电话',
        dormitory: '用户寝室地址',
        description: '用户情况描述',
        solverName: '处理者的姓名',
        record: '处理情况记录',
        closeDate: '订单关闭日期',
        notes: '订单备注信息',
        cancelOrder: '取消此订单',
        closeOrder: '关闭此订单'
      },
      actions: {
        receiptOrderConfirm: '您确定要接取此订单吗?',
        receiptOrderSucceed: '接单成功！请尽快处理。',
        receiptOrderFailed: '接单失败，请稍后重试。',
        finishOrderConfirm: '您确定要设置本订单已完成吗？',
        finishOrderSucceed: '订单已完成！干得好！',
        finishOrderFailed: '设置完成订单失败，请稍后重试。',
        restoreOrderConfirm: '订单将回到待接取状态，您确定要重置本订单吗？',
        restoreOrderSucceed: '订单已重置！',
        restoreOrderFailed: '订单重置失败，请稍后重试。',
        cancelOrderConfirm: '订单将回到待接取状态，您确定取消本订单吗？',
        cancelOrderSucceed: '订单已取消！现在其他人可以接取本订单。',
        cancelOrderFailed: '订单取消失败，请稍后重试。',
        closeOrderConfirm: '订单将设置为关闭状态（并不意味着已完成），您确定要关闭本订单吗？',
        closeOrderSucceed: '订单已关闭！',
        closeOrderFailed: '订单关闭失败，请稍后重试。',
        deleteOrderConfirm: '订单将被彻底删除并无法复原，您确定要删除本订单吗？',
        deleteOrderSucceed: '订单已删除！',
        deleteOrderFailed: '订单删除失败，请稍后重试。'
      },
      status: {
        waiting: '等待',
        receiptedByYou: '您已接单',
        receipted: '进行',
        closed: '关闭',
        finished: '完成'
      }
    },
    acceptedOrder: {
      title: '您的订单',
      telephoneCall: '拨打电话',
      finishOrder: '完成订单',
      noOrderTitle: 'Ops,',
      noOrderSubTitle: '似乎您没有进行中的订单',
      expanded: {
        orderId: '订单编号：',
        description: '订单描述',
        createDate: '创建日期',
        openTime: '经过时间',
        cancelOrder: '取消订单',
        closeOrder: '关闭订单'
      }
    }
  },
  login: {
    submit: '登录',
    usernameLabel: '学号',
    pwdLabel: '密码',
    usernameRequiredErr: '您需要输入您的学号作为用户名',
    pwdRequiredErr: '您需要输入正确的密码进行登录',
    loginFailed: '学号或密码错误，请检查！',
    loginSucceed: '欢迎回来，',
    logoutSuccess: '您已成功登出。',
    infoCheckFailed: '用户信息检查失败，请重新登陆！',
    unknownFailed: '时代变了！总而言之请重新登陆。',
    tokenCheckFailed: '账户凭证过期或错误，请重新登录！'
  },
  error: {
    underControl: '发生了意料之内的状况，正在刷新页面！',
    beyondControl: '天哪发生了意外之料的错误误误，快关页闭面，别回头！'
  },
  about: {
    aboutUs: {
      title: '我们是'
    },
    sparklines: {
      title: '在过去的 30 天里',
      orders: '份',
      contributor: '贡献者',
      createOrder: '创建有效订单',
      createOrderSimple: '创建订单',
      finishOrder: '完成有效订单',
      finishOrderSimple: '完成订单'
    }
  }
}
