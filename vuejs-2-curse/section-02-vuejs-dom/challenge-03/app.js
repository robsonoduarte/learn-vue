new Vue({
    el: '#app',
    data: {
        value: 0
    },
    computed: {
        result() {
            return this.value != 37 ? 'Different than 37' : 'equals than 37'
        }
    },
    watch: {
        value() {
            setTimeout(() => {
                this.value = 0
            }, 5000)
        }
    }
});