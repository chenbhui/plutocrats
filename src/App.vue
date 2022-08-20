<template>
  <div id="app">
    <!-- 根据路由元中show 判断是否挂载头部和底部 -->
    <Header v-show="$route.meta.show"></Header>
    <router-view v-if="isRouterAlive"/>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>
<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "App",
  data() {
    return {
      msg: "",
      isRouterAlive: true
    };
  },
  provide() {
    return {
      reload:this.reload
    }
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    reload() {
      this.isRouterAlive = false
      this.$nextTick(() => {
        this.isRouterAlive=true
      })
    },
  }
};
</script>

<style>
</style>
