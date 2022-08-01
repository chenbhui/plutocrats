
<template>
 <div class="wrapper" :style="setStyle">
     <span>{{dataString}}</span>
 </div>
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
        color:{
            type:[String]
        },
        fontSize:{
            type:[String,Number]
        },
        data:{
            type:String

        }
    },
    data() {
        return {
            dataString:JSON.parse(this.data).txt

        };
    },
    computed: {
        setStyle(){
            return {
                width:this.width+'px',
                height:this.height+'px',
                fontSize:this.fontSize+'px',
                color:this.color
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
