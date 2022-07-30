
<template>
  <div style="position: relative">
    <div class="rightwrapper">
      <head-tab :checkIndex="checkIndex" @checkTabChange="checkTabChange"></head-tab>
      <!--样式-->
      <div v-if="checkIndex === 0">样式</div>
      <!-- 数据-->
      <div v-if="checkIndex === 1">数据</div>
    </div>
    <div class="direction" @click="change">
<!--      <i class="el-icon-caret-right"></i>-->
    </div>
  </div>

</template>

<script>
import headTab from "@/views/Editor/comp/headTab";
export default {
  components: {
    headTab
  },
  props: {},
  data() {
    return {
      checkIndex:0,
    }
  },
  computed: {},
  created() {
  },
  mounted() {

  },
  methods: {

    checkTabChange(index){
      this.checkIndex = index;
    },
    change(){
      let rw = document.querySelector('.rightwrapper');
      let dir = document.querySelector('.direction')
      rw.classList.toggle('lost')
      dir.classList.toggle('active')
    }
  },
  watch: {},
};
</script>

<style lang="less" scoped>

.rightwrapper {
  width: 350px;
}
.direction,
.active{
  position: absolute;
  top: calc(44% - 20px);
  right: 349px;
  width: 20px;
  height: 60px;
  border-radius: 20%;
  background-color: #ffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
.active{
  right: 0;
}
.lost {
  display: none;
}
.direction::before{
  content:"\e871" ;
  font-family: "iconfont",serif
}
.active::before{
  content:"\e872" ;
  font-family: "iconfont",serif
}
</style>
