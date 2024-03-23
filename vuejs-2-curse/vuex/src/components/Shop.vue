<template>
    <Panel title="Virtual Shop" verde>
        <div class="shop">
            <span>Add</span>
            <input type="number" v-model.number="amount">
            <span>items of <strong>R$</strong></span>
            <input type="number" v-model.number="price">
            <button @click="add">Now!</button>
        </div>
    </Panel>
</template>

<script>

export default {
    data() {
        return {
            sequence: 1,
            amount: 1,
            price: 9.99,
        }
    },
    methods: {
        add() {
            const product = {
                id: this.sequence,
                name: `Product ${this.sequence}`,
                amount: this.amount,
                price: this.price
            }
            this.sequence++
            this.$store.state.products.push(product)
        }
    }
}
</script>

<style>
    .shop {
        display: flex;
        justify-content: center;
    }

    .shop > * {
        margin: 0px 10px;
    }

    input {
        font-size: 2rem;
        width: 90px;
    }
</style>
