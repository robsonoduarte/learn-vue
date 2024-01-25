import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('highlight', {
	bind(el, binding, vnode){
		let delay = 0;
		if (binding.modifiers['delay']) delay = 3000;
		setTimeout(() => {
			if (binding.arg === 'back') {
				el.style.backgroundColor = binding.value;
			} else {
				el.style.color = binding.value;
			}
		}, delay);

	}
});

new Vue({
	render: h => h(App),
}).$mount('#app')
