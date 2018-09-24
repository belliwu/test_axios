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
}

export default AccountMngrApi
