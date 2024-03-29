export default {
    namespaced: true,
    state: {
        amount: 2,
        price: 19.99
    },
    mutations: {
        setAmount(state, amount) {
            state.amount = amount
        },
        setPrice(state, price) {
            state.price = price
        },
    },
}