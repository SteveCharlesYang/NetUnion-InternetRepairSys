module.exports = {
  app: {
    name: 'UESTC | Dormitory Network Repair Platform',
    shortName: 'Network Repair Platform'
  },
  viewTitle: {
    home: 'HOME',
    user: 'USER',
    order: 'ORDER',
    about: 'ABOUT US',
    login: 'LOGIN'
  },
  theme: {
    darkMode: 'DARK MODE'
  },
  home: {
    welcomeUser: {
      words: 'Don\'t worry.',
      slogan: 'We are the solvers of dormitory network problems!'
    },
    infoNoteUser: {
      note: 'We highly recommend you to check if the network is in arrears and try to restart the router'
    },
    welcomeSolver: {
      words: 'Hey, sir!',
      slogan: 'How about do something ordinary but meaningful.'
    }
  },
  user: {
    account: {
      title: 'Account information',
      modify: 'Modify',
      modifyPassword: 'Reset Pwd',
      logout: 'LOGOUT',
      logoutText: 'Logout?',
      name: 'Name',
      nickname: 'Nickname',
      gender: 'Gender',
      campus: 'Campus',
      location: 'Dormitory',
      telephone: 'Telephone',
      intro: 'Introduction',
      nameMaxLengthErr: 'Name no more than 20 characters',
      nicknameMaxLengthErr: 'Nickname no more than 30 characters',
      telephoneNumericErr: 'Telephone should be numeric',
      telephoneMaxLengthErr: 'Telephone must be at most 11 characters long',
      introMaxLengthErr: 'Personal intro no more than 50 characters',
      modifyAccountInfoNote: 'Click botton again to save changes.',
      modifyAccountInfoSucceed: 'Save successfully!',
      modifyAccountInfoFailed: 'Save failed, please try again.',
      presentPassword: 'Present Password',
      modifiedPassword: 'New Password',
      reModifiedPassword: 'Rewrite New Password',
      passwordMaxLengthErr: 'Password no more than 32 characters',
      passwordminLengthErr: 'Password no less than 6 characters',
      presentPasswordRequiredErr: 'Present password needed',
      modifiedPasswordRequiredErr: 'New password needed',
      reModifiedPasswordRequiredErr: 'Please input your new password again',
      reModifiedPasswordErr: 'The new passwords you entered are different. Please re-enter',
      sameModifiedPasswordErr: 'The new password you entered are same with the present. Please re-enter',
      modifyPasswordSucceed: 'You have modified your password!',
      presentPasswordErr: 'Present password wrong, please enter again',
      unknownErr: 'Unknown errors happened. Modify password failed',
      cancel: 'CANCEL',
      submit: 'SUBMIT',
      confirm: 'CONFIRM'
    },
    statistics: {
      title: 'Statistics',
      statisticsTitle: 'TITLE',
      statisticsValue: 'VALUE',
      finishedOrderTime: 'Order Time',
      firstOrderDate: 'First Order Date',
      firstOrderSolver: 'First Order Solver',
      lastOrderDate: 'Last Order Date',
      lastOrderSolver: 'Last Order Solver',
      unlockedSolver: 'Unlocked Solver Number',
      bestSolver: 'Best Solver of You',
      bestSolverOrderedTime: 'and He/She Helped You',
      finishedOrderTimeTotally: 'Order Time Totally',
      finishedOrderTimeMonthly: 'Order Time Monthly',
      firstOrderUser: 'First Order User',
      lastOrderUser: 'Last Order User',
      unlockedUser: 'Unlocked User Number',
      bestUser: 'Best User of You',
      bestUserOrderedTime: 'and You Helped He/She',
      orders: ' times',
      times: ' times',
      people: ''
    }
  },
  order: {
    waitingStatus: 'waiting',
    receiptedStatus: 'receipted',
    canceledByUserStatus: 'canceled by user',
    canceledBySolverStatus: 'canceled by solver',
    finishedStatus: 'finished',
    recordedStatus: 'recorded',
    unknownStatus: 'unknown',
    viewAllOrders: 'VIEW ALL ORDERS',
    cancelSucceed: 'You cancelled this order successfully',
    createOrder: {
      user: {
        create: 'CREATE NEW ORDER',
        cancelTip: 'completed content will not reset',
        submit: 'SUBMIT',
        cancel: 'CANCEL',
        nameLabel: 'Name',
        genderLabel: 'Gender',
        telephoneLabel: 'Telephone',
        campusLabel: 'Campus',
        dormitoryLabel: 'Dormitory',
        descriptionLabel: 'Description (optional)',
        nameMaxLengthErr: 'Name must be at most 20 characters long',
        nameRequiredErr: 'Name is required',
        telephoneNumericErr: 'Telephone should be numeric',
        telephoneMaxLengthErr: 'Telephone must be at most 11 characters long',
        telephoneRequiredErr: 'Telephone is required',
        campusRequiredErr: 'Campus location is required',
        genderRequiredErr: 'Make sure to meet right solver',
        dormitoryRequiredErr: 'Dormitory location and number is required',
        descriptionHint: 'Adding your free time or a description of the situation can help us solve the problem better',
        autoEnter: 'AUTO',
        autoEnterNote: 'base on your own information',
        orderStatusErr: 'You have an order in progress and cannot create a new one',
        orderStatusCheckErr: 'Failed to get order information',
        createFailed: 'Order creation failed, please call us to complain!',
        createSucceed: 'Order created successfully, we will deal with it as soon as possible!'
      },
      solver: {
        reset: 'RESET',
        resetTip: 'Confirm to reset the sheet?',
        resetConfirm: 'CONFIRM',
        create: 'NEW ORDER RECORD',
        cancelTip: 'completed content will not reset',
        submit: 'SUBMIT',
        cancel: 'CANCEL',
        nameLabel: 'User Name (optional)',
        genderLabel: 'User Gender',
        telephoneLabel: 'User Telephone (optional)',
        campusLabel: 'User Campus',
        dormitoryLabel: 'User Dormitory',
        statusLabel: 'Order Status',
        descriptionLabel: 'User Description (optional)',
        recordLabel: 'Solver Record (optional)',
        nameMaxLengthErr: 'Name must be at most 20 characters long',
        genderRequiredErr: 'Gender is required',
        telephoneNumericErr: 'Telephone should be numeric',
        telephoneMaxLengthErr: 'Telephone must be at most 11 characters long',
        campusRequiredErr: 'Campus location is required',
        dormitoryRequiredErr: 'Dormitory location and number is required',
        statusRequiredErr: 'Order status is required',
        descriptionHint: 'Adding user network details may help solvers find solutions faster',
        recordHint: 'Adding the specific situation of network maintenance can help us better record and progress',
        createFailed: 'Failed to record the order, maybe the server exploded!',
        createSucceed: 'Record order successfully, thanks for your effort!',
        statusTooltipDefault: 'Select order status here',
        statusTooltipWaiting: 'The order can be receipted by any solver',
        statusTooltipReceipted: 'The order is created and receipted by you',
        statusTooltipRecorded: 'The order is created and finished by you',
        statusTooltipUnexpected: 'Unexpected order status, try reload the page'
      }
    },
    latestOrder: {
      title: 'Latest order',
      freeTime: 'Free time',
      location: 'Dormitory',
      solver: 'Solver',
      solverTelephone: 'Work Tel',
      viewDetails: 'VIEW DETAILS',
      status: 'Status',
      cancelOrder: 'CANCEL ORDER',
      cancel: 'CANCEL CANCEL ORDER',
      confirm: 'CONFIRM CANCEL ORDER',
      cancelOrderNote: 'Please contact the solver to cancel the accepted order',
      cancelOrderText: 'No one has received the order yet. Are you sure you want to cancel the current order?',
      cancelOrderSucceed: 'You have successfully cancelled the current order',
      cancelOrderFailed: 'Ops, you failed to cancel the current order',
      orderInfo: 'Order details',
      name: 'Name',
      campus: 'Campus',
      description: 'Description',
      telephone: 'Telephone',
      date: 'Date'
    },
    orderList: {
      title: 'ORDER LIST',
      filterLabel: 'ORDER FILTER',
      loadingText: 'Your Dian\'s server is loading orders...',
      loadingMore: 'LOADING MORE',
      header: {
        userName: 'USER',
        userGender: 'GENDER',
        userCampus: 'CAMPUS',
        userDormitory: 'DORMITORY',
        status: 'STATUS',
        solverName: 'SOLVER',
        actions: 'ACTIONS',
        createDate: 'CREATE DATE',
        orderOpenTime: 'OPEN TIME'
      },
      expanded: {
        telephone: 'TELEPHONE',
        dormitory: 'DORMITORY',
        description: 'DESCRIPTION',
        solverName: 'SOLVER NAME',
        record: 'SOLVER RECORD',
        closeDate: 'CLOSE DATE',
        notes: 'ORDER NOTES',
        cancelOrder: 'CANCEL',
        closeOrder: 'CLOSE'
      },
      actions: {
        receiptOrderConfirm: 'Are you sure to receive this order?',
        receiptOrderSucceed: 'Order received successfully! Please deal with it as soon as possible.',
        receiptOrderFailed: 'Failed to receive the order. Please try again later.',
        finishOrderConfirm: 'Are you sure to set this order finished?',
        finishOrderSucceed: 'Order completed! good job!',
        finishOrderFailed: 'Failed to complete the order. Please try again later.',
        restoreOrderConfirm: 'The order will return to the status of waiting to be received. Are you sure you want to restore this order?',
        restoreOrderSucceed: 'Order restore!',
        restoreOrderFailed: 'Order restore failed. Please try again later.',
        cancelOrderConfirm: 'The order will return to the status of waiting. Are you sure to cancel this order?',
        cancelOrderSucceed: 'Order cancelled! Now other solvers can take this order.',
        cancelOrderFailed: 'Order cancellation failed. Please try again later.',
        closeOrderConfirm: 'The order will be set to closed status (which does not mean finished). Are you sure you want to close this order?',
        closeOrderSucceed: 'Order closed!',
        closeOrderFailed: 'Order closing failed. Please try again later.',
        deleteOrderConfirm: 'The order will be completely deleted and cannot be restored. Are you sure you want to delete this order?',
        deleteOrderSucceed: 'Order deleted!',
        deleteOrderFailed: 'Order deletion failed. Please try again later.'
      },
      status: {
        waiting: 'WAITING',
        receiptedByYou: 'RECEIVED BY YOU',
        receipted: 'RECEIVED',
        closed: 'CLOSED',
        finished: 'FINISHED'
      }
    },
    acceptedOrder: {
      title: 'YOUR ORDERS',
      telephoneCall: 'CALL',
      finishOrder: 'FINISH',
      noOrderTitle: 'Ops,',
      noOrderSubTitle: 'it seems that you have no order ongoing.',
      expanded: {
        orderId: 'ORDER ID: ',
        description: 'DESCRIPTION',
        createDate: 'CREATE DATE',
        openTime: 'OPEN TIME',
        cancelOrder: 'CANCEL',
        closeOrder: 'CLOSE'
      }
    }
  },
  login: {
    submit: 'Login',
    usernameLabel: 'Student ID',
    pwdLabel: 'Password',
    usernameRequiredErr: 'Student ID is required as username',
    pwdRequiredErr: 'Wrong password, please check it',
    loginFailed: 'Wrong student number or password, please check it!',
    loginSucceed: 'Welcome, ',
    logoutSuccess: 'You have successfully logged out',
    infoCheckFailed: 'User information check failed, please login again!',
    unknownFailed: 'Time has changed! Please login again.',
    tokenCheckFailed: 'Account voucher expired or wrong, please login again!'
  },
  error: {
    underControl: 'The error is UNDER CONTROL, don\'t worry!',
    beyondControl: 'The error is BEYOND CONTROLLLLL, go, go, don\'t look back!'
  },
  about: {
    aboutUs: {
      title: 'WE ARE'
    },
    sparklines: {
      title: 'IN THE PAST 30 DAYS',
      orders: 'ORDERS',
      contributor: 'CONTRIBUTOR',
      createOrder: 'CREATE',
      createOrderSimple: 'CREATE',
      finishOrder: 'COMPLETE',
      finishOrderSimple: 'COMPLETE'
    }
  }
}
