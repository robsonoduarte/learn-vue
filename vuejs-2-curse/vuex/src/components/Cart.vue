<template>
    <Panel titulo="Carrinho" azul :notificacao="products.length">
        <div class="carrinho">
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Qtde</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product.name">
                        <td>{{ product.name }}</td>
                        <td>{{ product.amount }}</td>
                        <td>{{ product.price | money }}</td>
                    </tr>
                </tbody>
            </table>
            <hr>
            <div class="total">
                <span>Total: <strong>{{ total | money }}</strong></span>
            </div>
        </div>
    </Panel>
</template>

<script>
export default {
    computed: {
        total() {
            return this.products
                .map(p => p.amount * p.price)
                .reduce((total, current) => total + current, 0)
        },
        products(){
          return [
            {id: 1, name: 'Product 1', amount: 7, price: 14.55},
            {id: 2, name: 'Product 2', amount: 10, price: 22.99},
            {id: 3, name: 'Product 3', amount: 1, price: 43.18},
          ]
        }
    }
}
</script>

<style>
    table {
        width: 100%;
    }

    td {
        border-top: 1px solid #EEE;
        width: 33%;
    }

    hr {
        margin-top: 30px;
    }

    .total {
        display: flex;
        justify-content: flex-end;
    }
</style>
