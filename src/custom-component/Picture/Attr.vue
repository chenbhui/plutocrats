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
        <el-form-item label="图片:">
        <div class="img">
          <img
            :src="curComponent.propValue.url"
           
            @click="select"
          />
        
         
        </div>

        <input type="file" id="file" @change="saveUrl" hidden accept="image/*" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import CommonAttr from "@/custom-component/common/CommonAttr.vue";

export default {
  data() {
    return {
      // options: [
      //   {
      //     value: require("@/assets/images/home.jpg"),
      //     label: "家",
      //   },
      //   {
      //     value: require("@/assets/images/search.png"),
      //     label: "搜索",
      //   },
      //   {
      //     value: require("@/assets/images/star-r.png"),
      //     label: "星星1",
      //   },
      //   {
      //     value: require("@/assets/images/star-l.png"),
      //     label: "星星2",
      //   },
      //   {
      //     value: require("@/assets/images/cloud.png"),
      //     label: "云朵",
      //   },
      // ],

    };
  },
    methods: {
    saveUrl(e) {
      const cur = this.curComponent;
      const p = e.target.files[0];
      const reader = new FileReader();
      reader.onload = function (res) {
        cur.propValue.url = res.target.result;
      };

      reader.readAsDataURL(p);
    },
    select(){
        // this.$refs.file.click()

        //触发点击事件
        document.getElementById('file').click()
    }
  },
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
