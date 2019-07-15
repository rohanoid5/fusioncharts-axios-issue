import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api/'
});

let axiosMethods = {
  setButtonInterceptor(buttonId) {
    return axiosInstance.interceptors.request.use(function(config) {
      // Some code removed for brevity
      console.log(buttonId);
      return config;
    });
  }
};

export { axiosInstance, axiosMethods };
