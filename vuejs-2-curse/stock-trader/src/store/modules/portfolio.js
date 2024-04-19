export  default {
    state:{
        balance: 10000,
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
            state.balance -= price * amount
        },
        sellStock(state, {id, amount, price}) {
            const record = state.stocks.find(e => e.id === id)
            if (record.amount > amount) {
                record.amount -= amount
            }else{
                state.stocks.splice(state.stocks.indexOf(record), 1)
            }
            state.balance += price * amount
        },
        setPortfolio(state, portfolio) {
          state.balance = portfolio.balance
          state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : []
        },
    },
    actions:{
        sellStock({commit}, order) {
            commit('sellStock', order)
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
        balance(state) {
            return state.balance
        },
    }
}