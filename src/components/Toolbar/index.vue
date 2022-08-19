<!-- 上边导航栏菜单 -->
<template>
  <div>
    <!-- 上边 -->
    <div class="wrapper">
      <div class="titleBox">
        <p class="returnBtn iconfont icon-fanhui" @click="ToMyproject"></p>
        <div class="templateName" @click="modifyTemplatename" ref="templateName">
          {{ curprojectData.templatename ? curprojectData.templatename : `快点命名` }}
        </div>
        <div class="saveTime">{{ saveTime }} 保存成功</div>
        <div class="modifyBox" v-show="showModifyBox">
          <label>请输入项目名</label>
          <input type="text" v-model="modifyName">
          <div class="commitResult">
            <p class="sure" @click="sureModify">确定</p>
            <p class="cancel" @click="cancelModify">取消</p>
          </div>
        </div>
      </div>
      <div class="icon">
        <span class="iconfont icon-chexiao" @click="undo"></span>
        <span class="iconfont icon-chexiaoyou" @click="redo"></span>
      </div>
      <div class="btn-box" style="margin-right: 40px">
        <div>
          <el-button type="primary" icon="el-icon-video-play" size="small" @click="preview(false)">预览
          </el-button>
        </div>
        <div>
          <el-button type="primary" icon="el-icon-circle-plus-outline" size="small" @click="save">保存
          </el-button>
        </div>
        <div class="public-release-box">
          <el-button type="primary" icon="el-icon-link" size="small" @click="PublicRelease()">发布</el-button>
          <!-- 生成发布链接 -->
          <div class="public-release-tip" v-show="showPublicReleaseLink">
            <div class="tip-head">Public Release Project</div>
            <p class="copyLink iconfont icon-fuzhi" v-clipboard:copy="publishLink"
               v-clipboard:success="onCopy" v-clipboard:error="onError">
              点此复制代码
            </p>
            <p class="linkdata" ref="linkdata">
              {{ publishLink }}}
            </p>
          </div>
        </div>
      </div>
      <div style="margin-right: 30px;cursor: pointer">
        <i class="el-icon-search"></i>
        <i class="el-icon-plus inDistance"></i>
        <i class="el-icon-s-opportunity inDistance"></i>
        <i class="el-icon-s-claim inDistance"></i>
      </div>
      <div style="width: 40px" class="headPortrait">
        <img :src="headPortrait" alt="" @click="ToMyproject">
      </div>
    </div>
    <!-- 预览 -->
    <Preview v-model="isShowPreview" :is-screenshot="isScreenshot" @change="handlePreviewChange"/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Preview from '@/components/Editor/Preview'
import eventBus from '@/utils/eventBus'
import {divide, multiply} from 'mathjs'
import toast from '@/utils/toast'
import {deepCopy} from '@/utils/utils'

export default {
  components: {Preview},
  data() {
    return {
      theme: 'dark',
      isShowPreview: false,
      scale: '100%',
      timer: null,
      isScreenshot: false,
      showPublicReleaseLink: false,
      linkContent: 'http://localhost:8080/editpage',
      modifyName: '',
      showModifyBox: false,
      saveTime: '',
      headPortrait: JSON.parse(localStorage.getItem("UserInfo")).iconurl
    }
  },
  computed: {
    ...mapState('EditPage', [
      'componentData',
      'canvasStyleData',
      'areaData',
      'curComponent',
      'curComponentIndex',
      'publishLink'
    ]),
    ...mapState('MyProject', ['curprojectData']),
  },
  created() {
    eventBus.$on('preview', this.preview)
    eventBus.$on('save', this.save)
    eventBus.$on('clearCanvas', this.clearCanvas)
    this.scale = this.canvasStyleData.scale
    // console.log("好运来", this.curprojectData);
  },
  mounted() {
    //方法2:重新发请求
    const pageTemplateid = window.location.href.split("?templateid=")[1];
    if (pageTemplateid != "undefined") {
      this.$store.dispatch('MyProject/updateProject', pageTemplateid);
    }
    this.getTime();
  },

  methods: {
    //获取当前时间
    getTime() {
      let date = new Date();
      let time = `${("0" + date.getHours()).slice(-2)}:${("0" + date.getMinutes()).slice(-2)}`;
      this.saveTime = time;
    },
    // 发布
    async PublicRelease() {
      //询问是否已经保存，是的话发送请求并生成链接可以复制
      alert("是否已经保存？");
      //请求数据
      let {openid, templateid} = this.curprojectData;
      let templatedata = JSON.stringify({
        "canvasData": deepCopy(this.componentData),
        "canvasStyle": deepCopy(this.canvasStyleData),
      });
      let templatename = this.$refs.templateName.innerHTML;
      try {
        await this.$store.dispatch('EditPage/releaseTemplate', {
          openid,
          templateid,
          templatename,
          templatedata,
        })
        this.$message.success('发布成功');
        this.showPublicReleaseLink = true;
      } catch (err) {
        toast(err.message);
      }
    },
    onCopy() {
      this.showPublicReleaseLink = false;
      this.$message.success('复制成功');
    },
    onError() {
      this.$message.error('复制失败');
    },
    format(value) {
      return multiply(value, divide(parseFloat(this.scale), 100))
    },

    undo() {
      this.$store.commit('EditPage/undo')
    },

    redo() {
      this.$store.commit('EditPage/redo')
    },
    preview(isScreenshot) {
      this.isScreenshot = isScreenshot
      this.isShowPreview = true
      this.$store.commit('EditPage/setEditMode', 'preview')
    },

    async save() {
      this.getTime();
      this.modifyName = '';
      localStorage.setItem('canvasData', JSON.stringify(this.componentData))
      localStorage.setItem('canvasStyle', JSON.stringify(this.canvasStyleData))
      // 1.保存这里要发一次请求，让后台保存数据
      let {openid, templateid} = this.curprojectData;
      // let templatedata = JSON.stringify(deepCopy(this.componentData));
      let templatedata = JSON.stringify({
        "canvasData": deepCopy(this.componentData),
        "canvasStyle": deepCopy(this.canvasStyleData),
      });
      let templatename = this.$refs.templateName.innerHTML;
      try {
        await this.$store.dispatch('EditPage/saveTemplate', {
          openid,
          templateid,
          templatename,
          templatedata,
        })
        this.$message.success('保存成功');
      } catch (err) {
        toast(err.message);
      }
    },
    // 修改模板名
    modifyTemplatename() {
      this.showModifyBox = !this.showModifyBox;
      console.log("啦啦啦", this.$refs.templateName.innerHTML);
    },
    sureModify() {
      console.log("修改", this.modifyName);
      this.$refs.templateName.innerHTML = this.modifyName;
      this.showModifyBox = !this.showModifyBox;
    },
    cancelModify() {
      this.showModifyBox = !this.showModifyBox;
    },
    handlePreviewChange() {
      this.$store.commit('EditPage/setEditMode', 'edit')
    },
    ToMyproject() {
      this.$router.push('/myProject')
    }
  },
}
</script>

<style lang="less" scoped>

.wrapper {

  position: relative;
  background: #ffffff;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3) inset;

  .titleBox {
    display: flex;
    position: relative;
    align-items: center;
    font-size: 25px;
    position: relative;
    flex: 2;
    color: black;

    p {
      width: 52px;

      &::before {
        font-size: 34px;
        font-weight: bold;
        color: #5176ab;
      }
    }

    .templateName {
      max-width: 150px;
      padding: 5px 10px;
      margin-right: 15px;
      font-size: 25px;
      cursor: pointer;
    }

    .saveTime {
      margin-top: 15px;
      font-size: 13px;
      color: #4e5156;
    }

    .modifyBox {
      display: flex;
      justify-content: space-between;
      position: absolute;
      top: 50px;
      left: 50px;
      width: 200px;
      height: 118px;
      padding: 16px 20px;
      flex-direction: column;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
      z-index: 3;

      label {
        font-size: 14px;
      }

      input {
        height: 25px;
        border: 1.5px solid #ccc;
        border-radius: 4px;
        padding: 2px 7px;
        font-size: 14px;
      }

      .commitResult {
        display: flex;
        justify-content: space-around;

        p {
          width: 45px;
          height: 25px;
          color: #fff;
          text-align: center;
          letter-spacing: 2px;
          line-height: 25px;
          background: #5176ab;
          border-radius: 5px;
          cursor: pointer;
        }
      }
    }

  }

  h1:after,
  h1:before {
    content: '';
    background: #fff;
    position: absolute;
    z-index: -1;
    left: 10px;
    right: 10px;
    top: 50%;
    bottom: 0px;
    border-radius: 100px/10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  }

  .btn-box {
    display: flex;
    width: 260px;
    justify-content: space-around;

    .public-release-box {
      position: relative;

      .public-release-tip {
        position: absolute;
        top: 50px;
        right: 0;
        width: 440px;
        height: 165px;
        padding: 20px;
        background: #fcfcfc;
        border-radius: 5px;
        border: 1px solid #5176ab;
        z-index: 99999;

        .tip-head {
          position: relative;
          font-size: 21px;
          margin-bottom: 15px;

          &::after {
            content: "PRO+";
            margin-left: 15px;
            padding: 0px 7px;
            text-align: center;
            font-size: 17px;
            border-radius: 7px;
            background: #5176ab;
            color: #fff;
            font-weight: bold;
          }
        }

        .copyLink {
          color: red;
          margin-bottom: 24px;
          font-size: 13px;
          cursor: pointer;

          &::before {
            font-size: 16px;
            margin-right: 4px;
          }
        }

        .linkdata {
          height: 45px;
          line-height: 45px;
          background: #fff;
          border-radius: 5px;
          padding-left: 15px;
          color: rgba(0, 0, 0, .7);
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }

    div .el-button--primary {
      background: #5176ab;
    }
  }

  .el-icon-arrow-left,
  .el-icon-arrow-right,
  .el-icon-search,
  .el-icon-plus,
  .el-icon-s-opportunity,
  .el-icon-s-claim {
    font-size: 25px;
    color: #4e5156;
  }

  .inDistance {
    margin-left: 10px;
  }

  .icon {
    flex: 1;

    .icon-chexiao,
    .icon-chexiaoyou {
      color: #c9c9c9;
      font-size: 25px;
      cursor: pointer;

      &:hover {
        color: #5176ab;
      }
    }

    .icon-chexiaoyou {
      margin-left: 20px;
    }

  }

  .headPortrait {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid #5176ab;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }

}

.toolbar {
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 15px 10px;
  white-space: nowrap;
  overflow-x: auto;
  background: #fff;
  border-bottom: 1px solid #ddd;
  z-index: 999;

  .canvas-config {
    display: inline-block;
    margin-left: 10px;
    font-size: 14px;
    color: #606266;

    input {
      width: 50px;
      margin-left: 4px;
      outline: none;
      padding: 0 5px;
      border: 1px solid #ddd;
      color: #606266;
    }

    span {
      margin-left: 10px;
    }
  }

  .insert {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
    margin-left: 10px;

    &:active {
      color: #3a8ee6;
      border-color: #3a8ee6;
      outline: 0;
    }

    &:hover {
      background-color: #ecf5ff;
      color: #3a8ee6;
    }
  }

  .canvas-bg {
    display: inline-flex;
    align-items: center;

    span {
      margin-right: 4px;
    }
  }
}
</style>
