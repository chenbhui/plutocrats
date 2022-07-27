<template>
  <div>
    <head-view></head-view>
    <div class="content-box">
      <left-view></left-view>
      <center-view></center-view>
      <right-view></right-view>
    </div>
  </div>
</template>

<script>
import headView  from "@/views/Editor/headViews";
import leftView  from "@/views/Editor/leftViews";
import centerView  from "@/views/Editor/centerViews";
import rightView  from "@/views/Editor/rightViews";
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
export default {
  //import引入的组件需要注入到对象中才能使用",
  components: {
    headView,
    leftView,
    centerView,
    rightView
  },
  props: {},
  data() {
    //这里存放数据",
    return {};
  },
  //监听属性 类似于data概念",
  computed: {},
  //监控data中的数据变化",
  watch: {},
  //方法集合",
  methods: {},
  //生命周期 - 创建之前",数据模型未加载,方法未加载,html模板未加载
  beforeCreate() {
  },

  //生命周期 - 创建完成（可以访问当前this实例）",数据模型已加载，方法已加载,html模板已加载,html模板未渲染
  created() {

  },
  //生命周期 - 挂载之前",html模板未渲染
  beforeMount() {

  },

  //生命周期 - 挂载完成（可以访问DOM元素）",html模板已渲染
  mounted() {

  },

  //生命周期 - 更新之前",数据模型已更新,html模板未更新
  beforeUpdate() {

  },
  //生命周期 - 更新之后",数据模型已更新,html模板已更新
  updated() {

  },
  //生命周期 - 销毁之前",
  beforeDestroy() {

  },
  destroyed() {

  },
  //生命周期 - 销毁完成",
  //如果页面有keep-alive缓存功能，这个函数会触发",
  activated() {

  },
}


// "http-get请求": {
//   "prefix": "httpget",
//     "body": [
//     "this.\({",
//     "url: this.\\$http.adornUrl(''),",
//     "method: 'get',",
//     "params: this.\\$http.adornParams({})",
//     "}).then(({ data }) => {",
//     "})"
//   ],
//     "description": "httpGET请求"
// },
// "http-post请求": {
//   "prefix": "httppost",
//     "body": [
//     "this.\({",
//     "url: this.\\$http.adornUrl(''),",
//     "method: 'post',",
//     "data: this.\\$http.adornData(data, false)",
//     "}).then(({ data }) => { });"
//   ],
//     "description": "httpPOST请求"
// }
// }

</script>

<style scoped>
.content-box{
  display: flex;
  height:calc(100vh - 80px);
}


</style>
