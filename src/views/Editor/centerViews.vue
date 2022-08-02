
<template>
  <div class="wrapper" @dragover="dragover" @drop="drop" @click="checkComp">
    <div :id="item.info.id" v-for="(item, index) in components" :key="index"></div>
    <div class="borderStyle" v-if="currComp" :style="setBorderStyle"></div>
  </div>
</template>

<script>
import getComponent from '@/components/templates/index'
import { getId, mountedComponent } from '@/utils/arr'
// import { nanoid } from 'nanoid'
export default {
  components: {},
  props: {

  },
  data() {
    return {
      components: [],
      zIndex: 0,
      currComp:null
    };
  },
  computed: {
    // 设置选中的边框颜色
    setBorderStyle() {
      let compWidth = 0;
      let compHeight = 0;
      // 是否选中组件
      if (this.currComp) {
        this.currComp.attribute.forEach(item => {
          if (item.key === 'width') {
            compWidth = item.value
          }
          if (item.key === 'height') {
            compHeight = item.value
          }
        })
        return {
          width: `${compWidth}px`,
          height: `${compHeight}px`,
          left: `${this.currComp.position.left}px`,
          top: `${this.currComp.position.top}px`,
          zIndex: `${this.currComp.position.zIndex}`
        }
      } else {
        return {}
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    dragover(e){
      e.preventDefault();
    },
    drop(e){
      e.preventDefault()
      let info = JSON.parse(e.dataTransfer.getData('info'))
      
      info.id = getId()
      // info.id=nanoid()
      let component = getComponent(info)
      this.zIndex++

      // 找到组件的宽高
      let compWidth = 0
      let compHeight = 0

      component.attribute.forEach(item => {
        if (item.key === 'width') {
          compWidth=item.value
        }
        if (item.key === 'height') {
          compHeight=item.value
        }
      })
      let left = e.offsetX - compWidth / 2;
      let top = e.offsetY - compHeight / 2;
      if (left < 0) {
        left = 0
      }
      if (top < 0) {
        top = 0
      }
      component.position = { left, top, zIndex: this.zIndex }
      this.components.push(component)
      mountedComponent(component)
      // debugger
    },
    // 选中组件
    checkComp(e) {
      let reg = /\w{8}-\w{4}/
      let node = e.target;
      let count = 0;
      while (node && !reg.test(node.id)) {
        count++;
        if (count > 20) {
          return
        }
        node = node.parentNode;
      }
      console.log(node,node.id);
      if (node&&node.id) {
        this.currComp = this.components.find(item => {
          console.log('ok');
          if (item.info.id == node.id) {
            return item
          }
        })
      } else {
        this.currComp=null
      }
    },
  },
  watch: {
  },
};
</script>

<style scoped lang="less">
.wrapper {
  flex: 1;
  background: #e7e8f1;
  position: relative;
  .borderStyle {
    border: 1px solid skyblue;
    position: absolute;
  }
}
</style>
