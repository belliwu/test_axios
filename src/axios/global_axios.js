import axios from "axios";

class GlobalAxios {
  constructor() {
    this.init()
  }

  //-----------------------------------------------------------------------------------
  //Initilize during new instance
  init() {
    const instance = axios.create({
      baseURL: "http://127.0.0.1:8081",
      "Content-Type": "application/json",
      Authorization: "",
      timeout: 30000
    });

    instance.interceptors.request.use(this.handleRequestConfig, this.handleConfigError);
    instance.interceptors.response.use(this.handleRespSuccess, this.handleRespError);

    this.glAxios = instance;
  }

  //Belows defines axios request configure callbacks
  handleRequestConfig(config) {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      console.log(">>><<<< axios Request -> localStorage.token : ", token);
      config.headers.Authorization = token;
    }

    return config;
  }

  handleConfigError(error) {
    return Promise.reject(error);
  }

  //Belows defines axios response callbacks
  handleRespSuccess(response) {
    return response;
  }

  handleRespError(error) {
    return Promise.resolve(error.response)
  }

  //-----------------------------------------------------------------------------------
  fetch(url, params, method) {
    return new Promise((resolve, reject) => {
      if (method === "POST" || method === "post") {
        this.glAxios.post(url, params)
          .then((response) => {
            resolve(response.data);
          }, (error) => {
            reject(error);
          })
          .catch((error) => {
            reject(error)
          })
      } else if (method === "GET" || method === "get") {
        this.glAxios.get(url, {
            params
          })
          .then((response) => {
            resolve(response.data);
          }, (error) => {
            reject(error);
          })
          .catch((error) => {
            reject(error)
          })
      }
    })
  }
}

export default GlobalAxios;
