new Vue({
    el: '#app',
    data: {
        name: 'Robson Duarte',
        age : 42,
        link : 'https://vuejs.org/images/logo.png?_sw-precache=cf23526f451784ff137f161b8fe18d5a'
    },
    methods: {
        random() {
            return Math.random()
        }
    }
})