import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://vue-http-51651-default-rtdb.firebaseio.com/'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios
        Vue.prototype.$http.interceptors.request.use(requestConfig => {
            console.log(requestConfig.method)
            return requestConfig
        })
        Vue.prototype.$http.interceptors.response.use(responseConfig =>{
            console.log(responseConfig.status)
            return responseConfig;
        })
    },
})
