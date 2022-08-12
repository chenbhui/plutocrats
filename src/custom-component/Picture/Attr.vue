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
          <el-form-item label="图片选择">

            <el-select v-model="curComponent.propValue.url" placeholder="请选择">
              <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import CommonAttr from '@/custom-component/common/CommonAttr.vue'

export default {
  data() {
    return {
      options: [{
        value: require('@/assets/images/home.jpg'),
        label: '家'
      },{
        value: require('@/assets/images/search.png'),
        label: '搜索'
      },{
        value: require('@/assets/images/star-r.png'),
        label: '星星1'
      },{
        value: require('@/assets/images/star-l.png'),
        label: '星星2'
      }, {
        value: require('@/assets/images/cloud.png'),
        label: '云朵'
      }],
    }
  },
    components: { CommonAttr },
    computed: {
        curComponent() {
          // console.log(this.$store.state.EditPage.curComponent.propValue.url)
            return this.$store.state.EditPage.curComponent;
        },
    },
}

</script>
