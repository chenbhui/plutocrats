<template>
  <div class="w">
    <div class="main-contain">
      <section class="main-contain-left">
        <div class="left-content-title">
          <div class="title-area">
            <router-link to="/index">
              <img src="../../assets/images/loginLogo.jpg" alt="" />
            </router-link>
          </div>
          <h3>Discover the world's top <br />Love & Expectation</h3>
          <div class="main-contain-left-img">
            <img src="../../assets/images/home.jpg" alt="" />
          </div>
          <p>Art by Irina Valeeva</p>
        </div>
      </section>
      <section class="main-contain-right">
        <div class="tip"><router-link to="/login">已有帐号</router-link></div>
        <div class="main-contain-right-content">
          <div class="right-content-title">
            <h3>Sign up to Iterator</h3>
            <div class="auth-connection">
              <div class="auth-connection-mean iconfont icon-weixin"></div>
            </div>
            <div class="divider"></div>
            <form>
              <label for="username">Username</label>
              <div class="username">
                <input
                  type="text"
                  autocomplete="off"
                  v-model="username"
                  name="username"
                  v-validate="{ required: true }"
                  :class="{ invalid: errors.has('username') }"
                />
                <div class="error" v-show="errors.first('username')">
                  <i class="iconfont icon-error">
                    {{ errors.first("username") }}
                  </i>
                </div>
              </div>
              <label for="password">password</label>
              <div class="password">
                <input
                  type="password"
                  autocomplete="off"
                  v-model="password"
                  name="password"
                  v-validate="{ required: true, regex: /^[0-9a-zA-Z]{8,20}$/ }"
                  :class="{ invalid: errors.has('password') }"
                />
                <div class="error" v-show="errors.first('password')">
                  <i class="iconfont icon-error">
                    {{ errors.first("password") }}
                  </i>
                </div>
              </div>
              <label for="ConfirmPwd">Confirm password</label>
              <div class="ConfirmPwd">
                <input
                  type="text"
                  autocomplete="off"
                  v-model="confirmPwd"
                  name="confirmPwd"
                  v-validate="{ required: true, is: password }"
                  :class="{ invalid: errors.has('confirmPwd') }"
                />
                <div class="error" v-show="errors.first('confirmPwd')">
                  <i class="iconfont icon-error">
                    {{ errors.first("confirmPwd") }}
                  </i>
                </div>
              </div>
              <button @click="userRegister">Sign up</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      //收集表单数据
      username: "",
      password: "",
      confirmPwd: "",
    };
  },
  methods: {
    //注册
    async userRegister() {
      try {
        const { username, password, confirmPwd } = this;
        if (username && password && password == confirmPwd) {
          await this.$store.dispatch("reqUserRegister", {
            username,
            password,
            confirmPwd,
          });
          this.$router.push("/login");
        }
      } catch (error) {
        alert(error.message);
      }
    },
  },
};
</script>

<style scoped>
.main-contain {
  display: flex;
  width: 1447px;
  max-width: 1447px;
  height: 100vh;
}

.main-contain .main-contain-left {
  display: flex;
  align-items: center;
  width: 500px;
  height: 100vh;
  background: #e1f3f7;
}

.left-content-title {
  position: relative;
  width: 100%;
  height: 694px;
}

.main-contain .main-contain-left .title-area {
  width: 136px;
  margin: 18px 0 15px 60px;
}

.main-contain .main-contain-left .title-area a {
  display: block;
  width: 100%;
  height: 100%;
}

.main-contain .main-contain-left .title-area a img {
  width: 100%;
}

.main-contain .main-contain-left h3,
.main-contain .main-contain-left p {
  margin: 0px 0 47px 67px;
  color: #5176ab;
  font-size: 27px;
}
.main-contain .main-contain-left p {
  margin-bottom: 0;
}

.left-content-title p {
  position: absolute;
  bottom: 12px;
}

.main-contain-left-img {
  width: 100%;
  height: 500px;
}

.main-contain-left-img img {
  width: 100%;
}

.main-contain .main-contain-left p {
  margin-top: 25px;
  font-size: 14px;
}

/* 注册处 */
.main-contain .main-contain-right {
  display: flex;
  position: relative;
  width: calc(100% - 500px);
  height: 100vh;
  justify-content: center;
  align-items: center;
}
.tip {
  position: absolute;
  top: 25px;
  right: 68px;
}

.tip a {
  color: #5176ab;
  font-size: 16px;
  cursor: pointer;
}

.main-contain-right-content {
  width: 434px;
  height: 500px;
}

.right-content-title h3 {
  font-size: 22px;
  font-weight: bold;
}

.auth-connection {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 37px;
  margin-top: 30px;
  padding-right: 80px;
}

.auth-connection-mean {
  width: 54px;
  height: 48px;
  border-radius: 10px;
}

.icon-weixin:before {
  font-size: 47px;
  color: #f2f2f2;
}

.divider {
  position: relative;
  height: 45px;
  border-bottom: 1px solid #f2f2f2;
}

.divider::after {
  content: "Or";
  width: 60px;
  position: absolute;
  top: 34px;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  color: #6e6d7a;
  text-align: center;
  font-size: 16px;
}

.right-content-title label {
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.5px;
}

.right-content-title form {
  margin-top: 43px;
}

.right-content-title form input {
  width: 100%;
  height: 100%;
  line-height: 43px;
  font-size: 16px;
  padding-left: 15px;
}

.right-content-title form > div {
  position: relative;
  width: 100%;
  height: 43px;
  margin: 10px 0 30px 0;
  background: #f2f2f2;
  border-radius: 8px;
}

.right-content-title form > div .error {
  position: absolute;
  top: 49px;
  left: 2px;
  color: red;
}

.right-content-title form > div .error i {
  font-size: 13px;
}

.right-content-title form button {
  width: 200px;
  height: 43px;
  color: #fff;
  font-size: 16px;
  text-align: center;
  line-height: 43px;
  border-radius: 8px;
  background: #5176ab;
}
</style>