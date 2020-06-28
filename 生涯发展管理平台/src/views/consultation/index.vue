<template>
    <div class="person">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
    .person{
        padding-left: 20px;
    }
</style>
