
<template>
  <div class="wrapper">
    <head-tab :checkIndex="checkIndex" @checkTabChange="checkTabChange"></head-tab>
<!--样式-->
    <div v-if="checkIndex === 0">样式</div>
<!-- 数据-->
    <div v-if="checkIndex === 1">数据</div>
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
    }
  },
  watch: {},
};
</script>

<style scoped>
.wrapper {
  width: 350px;

}

</style>
