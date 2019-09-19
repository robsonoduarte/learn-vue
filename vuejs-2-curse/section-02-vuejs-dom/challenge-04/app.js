new Vue({
	el: '#desafio',
	data: {
		effectClass: 'destaque',
		perigo: true,
		userClass: '',
		userClass2: '',
		cor: '',
		box:{
			width: '100px',
			height: '100px'
		},
		width: 0

	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
			  	this.effectClass =  this.effectClass == 'destaque' ?  'encolher' : 'destaque'
			}, 1000)
		},
		iniciarProgresso() {
			let valor = 0
			var temporizador = setInterval(() => {
				valor += 5
				this.width = `${valor}%`
				if(valor == 100) clearInterval(temporizador)
			}, 500);		
		},
		setPerigo(event){
			this.perigo =  event.target.value == 'true' ? true : false
		}
	}
})
