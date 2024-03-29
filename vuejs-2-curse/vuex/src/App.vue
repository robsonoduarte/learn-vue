<template>
	<div id="app">
		<h1>Vuex</h1>
		<div class="line">
			<Parameters />
			<Shop />
		</div>
		<div class="line">
			<Cart />
			<Resume />
		</div>
	</div>
</template>

<script>
import Parameters from './components/Parameters.vue'
import Shop from './components/Shop.vue'
import Cart from './components/Cart.vue'
import Resume from './components/Resume.vue'

export default {
	name: 'app',
	components: {Parameters, Shop, Cart, Resume }
}
</script>

<style>
* {
	font-family: 'Oswald', sans-serif;
}

body {
	font-size: 2rem;
	background: linear-gradient(to right, rgb(0, 0, 0), rgb(67, 67, 67));
}

#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #FFF;
}

h1 {
	font-weight: 200;
}

.line {
	display: flex;
}

button {
	font-size: 1.8rem;
	padding: 5px 15px;
	border-radius: 5px;
	color: #222;
	background-color: #FAFAFA;
	outline: none;
	border: none;
}
</style>
