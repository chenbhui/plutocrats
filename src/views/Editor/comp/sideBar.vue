<template>
  <div class="wrapper">
    <!-- 侧边栏-->
    <!--    一级菜单-->
    <div class="firstmenu">
      <ul>
        <li>
          <a href="#">
            <span class="iconfont icon-xiazaimoban"></span>
            <div>模板</div>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="iconfont icon-charutupian"></span>
            <div>图片</div>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="iconfont icon-sucaiku"></span>
            <div>素材</div>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="iconfont icon-tianjiawenzi"></span>
            <div>文字</div>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="iconfont icon-background"></span>
            <div>背景</div>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="iconfont icon-gongju"></span>
            <div>工具</div>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="iconfont icon-yunshangchuan"></span>
            <div>上传</div>
          </a>
        </li>
        <li style="margin-top: 120px">
          <a href="#">
            <span class="iconfont icon-bangzhu-yin"></span>
            <div>帮助</div>
          </a>
        </li>
      </ul>
    </div>
    <!--    二级菜单-->
    <div class="content">
      <div></div>
      <div></div>
    </div>
    <!--    左箭头-->
    <div @click="change" class="logodirection">
      <!--      <i class="el-icon-caret-left"></i>-->
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    change() {
      let con = document.querySelector('.content')
      let logodir = document.querySelector('.logodirection')
      con.classList.toggle('lost')
      logodir.classList.toggle('active')
    }
  }
}
</script>

<style lang="less" scoped>

.wrapper {
  display: flex;
  width: auto;
  position: relative;

  .firstmenu {
    position: relative;
    width: 70px;
    height: 100vh;
    background-color: #5676ab;

    ul {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;

      li {
        position: relative;
        list-style: none;
        width: 100%;
        height: 70px;

        a {
          position: relative;
          height: 100px;
          width: 100%;
          display: block;
          text-decoration: none;
          color: #17191c;
          font-weight: 500;

          div {
            text-align: center;
            height: 100px
          }

          .iconfont {
            font-size: 22px;
            color: #0a0e14;
            position: relative;
            display: block;
            min-width: 50px;
            height: 30px;
            line-height: 30px;
            text-align: center;
          }
        }
      }
    }
  }

  .content {
    width: 380px;
    height: 100vh;
    background-color: #fff;

    div {
      margin: 0px auto;
      width: 300px;
      //background-color: #0a0e14;
    }

    :first-child {
      height: 20%;
      //border-bottom: 1px #0a0e14;
      //background-color: pink;
      border-bottom: 1px solid #e9e9e9;
    }

    :last-child {
      height: 80%;
      //background-color: skyblue;
    }
  }

  .lost {
    display: none;
  }

  .logodirection,
  .active {
    position: absolute;
    top: calc(39% - 20px);
    left: 450px;
    width: 20px;
    height: 60px;
    border-radius: 20%;
    background-color: #ffffff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .active {
    left: 71px;
  }

  .logodirection::before {
    content: "\e872";
    font-family: "iconfont", serif
  }

  .active::before {
    content: "\e871";
    font-family: "iconfont", serif
  }
}


</style>
