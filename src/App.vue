<template>
  <div id="app">
    <!-- 根据路由元中show 判断是否挂载头部和底部 -->
    <Header v-show="$route.meta.show"></Header>
    <router-view />
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
    };
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
</style>
