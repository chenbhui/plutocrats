<template>
    <div class="attr-list">
        <CommonAttr></CommonAttr>
        <el-form>
            <el-form-item label="镜像翻转">
                <div style="clear: both;">
                    <el-checkbox v-model="curComponent.propValue.flip.horizontal" label="horizontal">水平翻转</el-checkbox>
                    <el-checkbox v-model="curComponent.propValue.flip.vertical" label="vertical">垂直翻转</el-checkbox>
                </div>
            </el-form-item>
            <el-form-item label="视频:">
        <div class="video">
         <!-- <div class="add" v-if="curComponent.propValue.url" @dblclick="selectVideo">双击更换视频 <i class="iconfont icon-shipinshangchuan"></i></div> -->
        
         <div class="add"  @click="selectVideo">点击更换视频 <i class="iconfont icon-shipinshangchuan"></i></div>
        </div>

        <input type="file" ref="file" @change="saveUrl" hidden accept="video/*" />
      </el-form-item>
        </el-form>
    </div>
</template>

<script>
import CommonAttr from '@/custom-component/common/CommonAttr.vue'

export default {
    components: { CommonAttr },
    computed: {
        curComponent() {
            return this.$store.state.EditPage.curComponent;
        },
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
    selectVideo(){
        this.$refs.file.click()
    }
  },
}
</script>
<style lang="less" scoped>
.video {
  background-color: rgb(231, 232, 241);
  width: 225px;
  height: 150px;
  margin: 39px auto;
  vertical-align: middle;
  
  .add{
    font-size: 20px;
    color: white;
    cursor: pointer;
    text-align: center;
    line-height: 150px;
    caret-color: transparent;
    margin: auto 0;
  }
}
</style>