
<template>
 <div class="wrapper">
   <sideBar></sideBar>
 </div>
</template>

<script>
import sideBar from "@/views/Editor/comp/sideBar";

export default {
  components:{
    sideBar
  },
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
}
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  width: auto;
  //height: 100vh;
  //background-color: #5176ab;
}


</style>
