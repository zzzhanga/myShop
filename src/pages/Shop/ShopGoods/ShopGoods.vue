<template>
    <div>
ShopGoods组件
    </div>
</template>

<script>
import {mapActions, mapState}  from 'vuex'
export default {
    props: {

    },
    data() {
        return {

        };
    },
    computed: {

    },
    created() {

    },
    mounted() {
        this.getShopGoods()

    },
    watch: {

    },
    methods: {
         ...mapActions(['getShopGoods'])

    },
    components: {

    },
};
</script>

<style scoped lang="stylus">

</style>
