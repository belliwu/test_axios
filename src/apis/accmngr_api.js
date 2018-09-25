import GlobalAxios from '@/axios/global_axios.js'

class AccountMngrApi {
  constructor() {
    this.glAxios = new GlobalAxios();
  }

  signup(payload) {
    return this.glAxios.fetch("/api/arms/user/signup", payload, "post");
  }

  login(payload) {
    return this.glAxios.fetch("/api/arms/user/login", payload, "post");
  }

  logout(payload) {
    return this.glAxios.fetch("/api/arms/user/logout", payload, "post");
  }

  deleteUser(payload) {
    return this.glAxios.fetch("/api/arms/user", payload, "delete");
  }

  fetchUser() {
    if (!(state.user.jwtToken || state.user.userId)) {
      console.log("BELLIWU>>> 1. Dashboard fetchUser() state.user.jwtToken == NULL");
      return;
    }

    //未來要抓有關使用者剩餘資料，顯示在系統上
    //  userInfo);
  }
}

export default AccountMngrApi
