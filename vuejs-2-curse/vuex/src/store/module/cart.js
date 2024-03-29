export default {
    namespaced: true,
    state: {
        products: [],
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
    },
    actions: {
        addProduct({commit}, product) {
            setTimeout(() => {
                commit('addProduct', product)
            }, 1000)
        },
    }
}