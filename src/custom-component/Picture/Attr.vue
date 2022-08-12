<template>
  <div class="attr-list">
    <CommonAttr></CommonAttr>
    <el-form>
      <el-form-item label="镜像翻转">
        <div style="clear: both">
          <el-checkbox
            v-model="curComponent.propValue.flip.horizontal"
            label="horizontal"
            >水平翻转</el-checkbox
          >
          <el-checkbox
            v-model="curComponent.propValue.flip.vertical"
            label="vertical"
            >垂直翻转</el-checkbox
          >
        </div>
      </el-form-item>
      <el-form-item label="图片选择(请复制图片地址)">
        <el-input v-model="curComponent.propValue.url" type="textarea" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import CommonAttr from "@/custom-component/common/CommonAttr.vue";

export default {

  components: { CommonAttr },
  computed: {
    curComponent() {
      // console.log(this.$store.state.EditPage.curComponent.propValue.url)
      return this.$store.state.EditPage.curComponent;
    },
  },
};
</script>

<style lang="less" scoped>
.img {
  width: 225px;
  height: 150px;
  margin: 39px auto;
  cursor: pointer;
  // vertical-align: middle;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
