import Vue from 'vue'
import axios from 'axios'



Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL : 'https://vue-http-51651-default-rtdb.firebaseio.com/',
            headers:{
                "Authorization" : "token"
            }
        })
        Vue.prototype.$http.interceptors.request.use(requestConfig => {
            return requestConfig
        })
        Vue.prototype.$http.interceptors.response.use(responseConfig =>{
            return responseConfig;
        })
    },
})
