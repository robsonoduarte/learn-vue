<template>
    <Panel title="Carrinho" azul :notificacao="products.length">
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
            return this.$store.getters.amount
        },
        products(){
          return this.$store.state.products
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
