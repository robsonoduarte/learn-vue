import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: []
    },
    getters: {
        amount(state) {
            return state.products
                .map(p => p.amount * p.price)
                .reduce((total, current) => total + current, 0)
        },
    }
})
