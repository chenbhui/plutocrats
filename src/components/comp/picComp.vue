
<template>
 <img class="wrapper" :style="setStyle" :src="picUrl" alt="" srcset="">
</template>

<script>
export default {
    components: {

    },
    props: {
        width:{
            type:[String,Number]
        },
        height:{
            type:[String,Number]
        },

        data:{
            type:String
            // {url:'fj01.png'}

        }
    },
    data() {
        return {
            dataString:JSON.parse(this.data).filename

        };
    },
    computed: {
        picUrl(){
            return require('../../assets/images/'+this.dataString)
        },

        setStyle(){
            return {
                width:this.width+'px',
                height:this.height+'px'
            }
        }



    },
    created() {

    },
    mounted() {

    },
    methods: {

    },
    watch: {

    },
};
</script>

<style scoped lang="less">
.wrapper{
}
</style>
