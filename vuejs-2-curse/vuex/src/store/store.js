import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [],
        amount: 2,
        price: 19.99
    },
    getters: {
        amount(state) {
            return state.products
                .map(p => p.amount * p.price)
                .reduce((total, current) => total + current, 0)
        },
    },
    mutations: {
        addProduct(state, product) {
            state.products.push(product)
        },
        setAmount(state, amount) {
            state.amount = amount
        },
        setPrice(state, price) {
            state.price = price
        },
    },
    actions: {
        addProduct({commit}, product) {
            setTimeout(() => {
                commit('addProduct', product)
            }, 1000)
        },
    }
})
