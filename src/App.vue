<!---->
<template>
    <div class="app">
     {{msg}}
    </div>
</template>
<script>
export default {
    data() {
        return{
            msg:' hello vue'
        }
    },
    methods:{}
}
</script>
<style lang='less' scoped>
    .app{
        font-size: 30px;
        color: red;
    }
</style>