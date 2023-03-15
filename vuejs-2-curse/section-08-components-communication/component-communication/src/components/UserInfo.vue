<template>
    <div class="component">
        <h2>User Information</h2>
        <p>Name: {{name}}</p>
    </div>
</template>

<script>
export default {
    props: [
        'name'
    ]
}
</script>

<style scoped>
    .component {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
