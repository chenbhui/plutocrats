
<template>
 <div class="wrapper">

   <h1>lowCode</h1>
   <div class="btn-box">
      <div class="btn">预览</div>
      <div class="btn">保存</div>
      <div class="btn">发布</div>
   </div>
   <button class="check" >切换</button>
   <div>
     <el-avatar> user </el-avatar>
   </div>
 </div>
</template>

<script>

export default {
    components: {

    },
    props: {

    },
    data() {
        return {
          theme: 'dark'
        };
    },
    computed: {

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

<style scoped >
.wrapper{

    background: skyblue;
    height:80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color:white;
    padding:0 15px;
}
.wrapper .btn-box{
  display: flex;
  margin-left: -50%;
  width:200px;
  justify-content: space-around;
}
.wrapper .btn-box .btn{
  background: white;
  color:#333;
  font-size: 14px;
  padding:2px 10px;
  border-radius: 4px;
  cursor:pointer;
}
.wrapper .btn-box .btn:first-child{
  color:white;
  background: #5794f5;
}

.wrapper .check{
  margin-right: -55%;
}
</style>
