new Vue({
    el: '#app',
    data: {
        value: ''
    },
    methods:{
        clickAlert(){
            alert("btn clicked")
        },
        getValue(event){
            this.value = event.target.value
        }
    }
})