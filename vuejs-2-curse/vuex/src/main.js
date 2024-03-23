import Vue from 'vue'
import App from './App.vue'
import Panel from './components/Panel.vue'
import store from './store/store'

Vue.config.productionTip = false

Vue.component('Panel', Panel)

Vue.filter('money', valor => {
	return `R$ ${parseFloat(valor).toFixed(2)}`.replace('.', ',')
})

new Vue({
	store,
	render: h => h(App),
}).$mount('#app')
