let globalData = "yoboData"

export function setGlobalUserInfo(userInfo) {
  try {
    window[globalData] = window[globalData] || {};
    window[globalData].userInfo = userInfo;
  } catch(e) {

  }
}

export function getGlobalUserInfo() {

    try {
      window[globalData] = window[globalData] || {};
      return window[globalData].userInfo || false;
    } catch(e) {

    }
}

export function removeGlobalUserInfo() {

    try {
      window[globalData] = window[globalData] || {};
    window[globalData] = undefined;
    } catch(e) {

    }
}


export function setToken(token) {
  try {
    localStorage.setItem('token', token);
  } catch (e) {
    // 由于Web Storage API错误，
    // 数据未成功保存
  }

}

export function getToken() {
    try {
      let token = localStorage.getItem('token')
      if (token && token.length > 0) {
          return token;
      }
      else {
          return false;
      }
    } catch (e) {
      // 由于Web Storage API错误，
      // 数据未成功保存
    }

}

export function removeToken() {

    try {
      localStorage.removeItem('token')
    } catch (e) {
      // 由于Web Storage API错误，
      // 数据未成功保存
    }
}

export function getGlobalData() {
    window[globalData] = window[globalData] || {}
    return window[globalData]
}

export function setUserId(userId) {

    try {
      localStorage.setItem('userId', userId)
    } catch (e) {
      // 由于Web Storage API错误，
      // 数据未成功保存
    }
}
export function getUserId() {
    let userId = localStorage.getItem('userId')
    if (userId && userId.length > 0) {
        return userId;
    }
    else {
        return false;
    }
}
