<template>
  <!-- 头部 -->
  <header class="header">
    <div class="wrap header-wrap">
      <div class="title-area">
        <router-link to="/home">
          <img src="../../assets/images/logo.jpg" alt="" />
        </router-link>
      </div>
      <div class="widget-area">
        <ul class="nav">
          <li>
            <router-link to="/home">INTRUDUCTION</router-link>
          </li>
          <li>
            <router-link to="/myproject">WAREHOUSE</router-link>
          </li>
          <li>
            <router-link to="/community">TEMPLATE</router-link>
          </li>
          <li>
            <router-link to="/more">MORE</router-link>
          </li>
          <li>
            <router-link to="login" v-show="!userInfo.iconurl">SIGN IN</router-link>
          </li>
          <li class="authorPart" v-show="userInfo.iconurl">
            <div class="authorImg" @click="changeshowexit">
              <img :src="userInfo.iconurl" alt="" />
            </div>
            <div class="authorPartItem" v-show="showAuthorPartItem">
              <p class="myself" @click="showMyself">
                我的资料
              </p>
              <p class="exit" @click="exitload()">退出</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      showAuthorPartItem: false,
      showexit:false,
    }
  },
  computed: {...mapState('User', ['userInfo']), },
  methods: {
     // 退出登录
    async exitload() {
      this.showAuthorPartItem = !this.showAuthorPartItem;
      try {
        await this.$store.dispatch('User/reqLogout')
        localStorage.removeItem('UserInfo');
        this.$router.push("/login");
      } catch (err) {
        console.log(err.message)
      }
    },
    changeshowexit() {
      this.showAuthorPartItem = !this.showAuthorPartItem;
    },
    showMyself() {
      //myself data
      this.showAuthorPartItem = !this.showAuthorPartItem;
      this.$router.push('/more');
    }
  },
  mounted() {
    //获取用户信息展示
    this.$store.dispatch('User/reqUserInfo');
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
      top: 0px;
      width: 250px;
      max-width: 250px;
      height: 100%;

      a {
        width: 100%;
        height: 100%;
      }

      img {
        width: 97%;
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
    img {
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
