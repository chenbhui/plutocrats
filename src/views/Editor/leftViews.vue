
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

    };
  },
  methods: {
    change() {
      document.querySelector('.logodirection').onclick = function () {
        this.classList.replace('logodirection','active')
      }
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
  height: 100vh;
  position: relative;
  //background-color: #5176ab;


}


</style>
