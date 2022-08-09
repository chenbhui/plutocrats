<template>
  <!-- 头部 -->
  <header class="header">
    <div class="wrap header-wrap">
      <div class="title-area">
        <router-link to="/home">
          <img src="../../assets/images/logo.png" alt="" />
        </router-link>
      </div>
      <div class="widget-area">
        <ul class="nav">
          <li>
            <router-link to="/chatroom">PSY SERVICE</router-link>
          </li>
          <li><a href="javascript:;">DECOMPRESSION</a></li>
          <li>
            <router-link to="/knowledge">PSY KNOWLEDGE</router-link>
          </li>
          <li>
            <router-link to="/aboutus">ABOUT US</router-link>
          </li>
          <!-- router-link是声明式导航，无法有其他业务逻辑，只能跳转，编程式导航（replace、push）才能有其他业务 -->
          <li>
            <router-link to="login" v-if="!showUser">SIGN IN</router-link>
          </li>
          <li class="authorPart" v-if="showUser">
            <div class="authorImg" @click="changeshowexit">
              <img src="../../assets/images/author.jpg" alt="" />
            </div>
            <div class="authorPartItem">
              <p class="myself" v-show="showexit" @click="showMyself">
                我的资料
              </p>
              <p class="exit" v-show="showexit" @click="exitload">退出</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showUser: false,
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  background: #5377ac;
  height: 80px;

  .wrap {
    width: 1300px;
    height: 100%;
    margin: 0 auto;
    max-width: 1300px;
    padding: 10px;

    .title-area {
      float: left;
      display: block;
      position: relative;
      top: -6px;
      width: 250px;
      max-width: 250px;
      height: 100%;

      a {
        width: 100%;
        height: 100%;
      }

      img {
        width: 97%;
        height: 122%;
      }
    }
  }
}

.widget-area {
  float: right;
  width: 760px;
  max-width: 760px;
  height: 100%;

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    li {
      height: 100%;

      a {
        height: 100%;
        line-height: 60px;
        font-size: 17px;
        letter-spacing: 1px;
      }
    }
  }
}

.nav li.authorPart {
  position: relative;
  display: flex;
  height: 50px;
  cursor: pointer;

  div.authorImg {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #fff;
    overflow: hidden;

    div img {
      width: 100%;
      height: 100%;
    }
  }

  div.authorName {
    line-height: 45px;
  }
}

.authorPartItem {
  position: absolute;
  top: 65px;
  left: -9px;
  width: 80px;
  border-radius: 0 0 15px 15px;
  background: #5377ac;
  overflow: hidden;
  z-index: 9999;
}

.authorPartItem p.exit,
.authorPartItem p.myself {
  width: 100%;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: #fff;
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;
}
</style>
