import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [
            {id: 1, name: 'Product 1', amount: 7, price: 14.55},
            {id: 2, name: 'Product 2', amount: 10, price: 22.99},
            {id: 3, name: 'Product 3', amount: 1, price: 43.18},
        ]
    }
})
