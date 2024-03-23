import Vue from 'vue'
import App from './App.vue'
import Store from './store/store'
import Panel from './components/Panel.vue'

Vue.config.productionTip = false

Vue.component('Panel', Panel)

Vue.filter('money', valor => {
	return `R$ ${parseFloat(valor).toFixed(2)}`.replace('.', ',')
})

new Vue({
	Store,
	render: h => h(App),
}).$mount('#app')
