<template>
    <div>
ShopHeader.vue--------{{info.name}}
    </div>
</template>

<script>
export default {
    props: {
        info:{
            type:Object
        }

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
        console.log(this.info)

    },
    watch: {

    },
    methods: {

    },
    components: {

    },
};
</script>

<style scoped lang="stylus">

</style>
