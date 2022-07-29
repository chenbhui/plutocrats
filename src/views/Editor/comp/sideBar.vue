<template>
  <div style="display: flex" >
    <div class="wrapper">

      <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
               :collapse="false"
               background-color="#5176ab"
               text-color="#fff"
               active-text-color="#ffd04b">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">模板</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-picture"></i>
          <span slot="title">图片</span>
        </el-menu-item>

        <el-menu-item index="3">
          <i class="el-icon-star-on"></i>
          <span slot="title">素材</span>
        </el-menu-item>
      </el-menu>
      <div class="content">
        <div></div>
        <div></div>
      </div>

    </div>
    <div class="direction">
      <i class="el-icon-caret-left"></i>
    </div>
  </div>

</template>

<script>

export default {
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    change() {
      this.isCollapse = !this.isCollapse;

    }
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

<style lang="less" scoped>
.wrapper {
  display: flex;
  .el-icon-s-unfold {
    font-size: 20px;
    cursor: pointer;

  }

  //.toggle-button {
  //  background-color: #5176ab;
  //  font-size: 10px;
  //  line-height: 24px;
  //  color: #fff;
  //  text-align: center;
  //  letter-spacing: 0.2em;
  //  cursor: pointer;
  //
  //}

  .el-aside {
    transition: width 0.25s;
    -webkit-transition: width 0.25s;
    -moz-transition: width 0.25s;
    -webkit-transition: width 0.25s;
    -o-transition: width 0.25s;
  }

  /*加快侧边栏文字消失的速度*/

  .el-menu {
    height: 100vh;
    border-right: none;
    //transition: all 10ms;
  }
  .content {
    height: 100vh;
    background-color: #fff;
    width: 400px;
    :first-child{
      height: 20%;
      border-bottom: 1px #0a0e14;
      //background-color: pink;
      border-bottom:1px solid #e9e9e9
    }
    :last-child{
      height: 80%;
      //background-color: skyblue;
    }
  }
}
.direction{
  position: absolute;
  top: 40%;
  left: 496px;
  width: 20px;
  height: 60px;
  border-radius: 20%;
  background-color: #ffff;

  display: flex;
  align-items: center;
  justify-content: center;
}


</style>
