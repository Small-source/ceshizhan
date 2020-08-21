<template>
    <div id="app">
          <router-view/>
    </div>
</template>
<style>
</style>
<script type="text/javascript">
export default {
    created() {
        var tokens = '6f3d512441f0c145679ddc97730a7d2f2ba5e29fd466d5eb5b599d04f089d854'
        window.sessionStorage.setItem("token",tokens)
    }
}
</script>
