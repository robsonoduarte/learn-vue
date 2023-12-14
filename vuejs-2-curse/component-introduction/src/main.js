import Vue from 'vue'
import App from './App.vue'
import Counters from "@/CountersComponent.vue";

Vue.config.productionTip = false
Vue.component('app-counters', Counters)

new Vue({
    render: h => h(App),
}).$mount('#app')
