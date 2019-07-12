import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: '/api/'
})

export { axiosInstance }

let axiosMethods = {
    setButtonInterceptor(buttonId) {
        axiosInstance.interceptors.request.use(function (config) {
            // Some code removed for brevity

            return config;
        });
    },
}

axiosMethods.setButtonInterceptor('submit-form')

export default axiosMethods
