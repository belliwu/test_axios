import axios from "axios";

class GlobalAxios {
  constructor() {
    this.init()
  }

  //Initilize during new instance
  init() {
    const instance = axios.create({
      baseURL: 'http://127.0.0.1:8081',
      'content-type': 'application/json',
      Authorization: "",
      timeout: 10000
    });

    instance.interceptors.request.use(this.handleRequestConfig, this.handleConfigError);
    instance.interceptors.response.use(this.handleRespSuccess, this.handleRespError);

    this.glAxios = instance;
  }

  //Belows defines axios request configure callbacks
  handleRequestConfig(config) {
    const token = localStorage.getItem('jwtToken');
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

  handleRespError = (error) => {
    switch (error.response.status) {
      case 404:
        this.redirectTo(document, '/404')
        break;

      default:
        this.redirectTo(document, '/404')
        break;
    }

    return Promise.reject(error)
  }

  redirectTo = (document, path) => {
    document.location = path
  }

  //Below are api for get, post definition
  get(path, callback) {
    return this.glAxios
      .get(path)
      .then(
        (response) => callback(response.status, response.data)
      );
  }

  post(path, payload, callback) {
    return this.glAxios.request({
        method: 'POST',
        url: path,
        responseType: 'json',
        data: payload
      })
      .then((response) => callback(response.status, response.data));
  }

  put(path, payload, callback) {
    return this.glAxios.request({
        method: 'PUT',
        url: path,
        responseType: 'json',
        data: payload
      })
      .then((response) => callback(response.status, response.data));
  }

  delete(path, payload, callback) {
    return this.glAxios.request({
        method: 'DELETE',
        url: path,
        responseType: 'json',
        data: payload
      })
      .then((response) => callback(response.status, response.data));
  }
}

export default GlobalAxios;
