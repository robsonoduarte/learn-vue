export  default {
    state:{
        funds: 10000,
        stocks: []
    },
    mutations:{
        buyStock(state, {id, amount, price}) {
            const record = state.stocks.find(e => e.id == id)
            if (record) {
                record.amount += amount
            }else {
                state.stocks.push({
                    id: id,
                    amount: amount
                })
            }
            state.funds -= price * amount
        },
        sellStock(state, {id, amount, price}) {
            const record = state.stocks.find(e => e.id === id)
            if (record.amount > amount) {
                record.amount -= amount
            }else{
                state.stocks.splice(state.stocks.indexOf(record), 1)
            }
            state.funds =+ price * amount
        },
    },
    actions:{
        sellStock({commit}, order) {
            commit('setStocks', order)
        }
    },
    getters:{
        stockPortfolio(state, getters) {
            return state.stocks.map(stock => {
                const record = getters.stocks.find(e => e.id === stock.id)
                return{
                    id: stock.id,
                    amount: stock.amount,
                    name: record.name,
                    price: record.price
                }
            })
        },
        funds(state) {
            return state.funds
        },
    }
}