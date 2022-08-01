<template>
  <div class="wrapper">

    <div
        class="menuItem"
        :data-type="item.type"
        :data-name="item.name"
        draggable="true"
        @dragstart="dragStart"
        v-for="(item,index) in menuList"
        :key='index'>
<!--      {{item.name}}-->
        <span class="iconfont" :class="'icon-' + item.icon"></span>
    </div>

  </div>

</template>

<script>
import menuList from "@/utils/menuList";

export default {
  data() {
    return {
      menuList
    }
  },
  methods: {

    // handleDragStart(e) {
    //   e.dataTransfer.setData('index', e.target.dataset.index)
    // },
    dragStart(e) {
      let info = {
        name: e.target.getAttribute('data-name'),
        type: e.target.getAttribute('data-type')
      }
      e.dataTransfer.setData('info', JSON.stringify(info))
    }
  }
}
</script>

<style lang="less" scoped>

.wrapper {
  width: 270px;
  height: 100vh;
  background-color: #fff;


    .menuItem{
      background: #eee;
      width:100px;
      height:60px;
      float:left;
      margin:10px;
      text-align: center;
      padding-top: 20px;
      cursor:pointer;
      .iconfont {
        margin-right: 4px;
        font-size: 20px;

      }
  }
}





</style>
