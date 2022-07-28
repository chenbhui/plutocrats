<template>
  <div class="container">
    <!-- 顶部内容区 -->
    <div class="top-page" ref="top">
      <div class="top-container">
        <!-- 左边图片 -->
        <div class="left-images">
          <img src="@/assets/images/home.jpg" alt="" />
        </div>
        <!-- 右边内容 -->
        <div class="right-content">
          <!-- 标题 -->
          <div class="title">
            love and expectation <br />
            are ahead
          </div>
          <!-- 文本内容 -->
          <div class="text">
            No matter how dark the moment is,love and expectation are always
            ahead. The world is very simple, so is life
          </div>
          <!-- 按钮 -->
          <button class="btn" @click="slideDown">SLIDE DOWN</button>
        </div>
      </div>
      <!-- company -->
      <div class="company">
        <img src="@/assets/images/company.jpg" alt="" />
      </div>
    </div>
    <div class="center-page" id="center">
      <div class="center-container">
        <!-- 左边内容 -->
        <div class="right-content">
          <!-- 标题 -->
          <div class="title">
            psychological service <br />
            are ahead
          </div>
          <!-- 文本内容 -->
          <div class="text">
            No matter how dark the moment is,love and expectation are always
            ahead. The world is very simple, so is life
          </div>
          <!-- 按钮 -->
          <button class="btn">Read more</button>
        </div>
        <!-- 右边图片 -->
        <div class="left-images">
          <img src="@/assets/images/home.jpg" alt="" />
        </div>
      </div>
    </div>
    <div class="bottom-page">
      <div class="bottom-container">
        <div class="main-title">
          Gain the full control over reaching your leads
        </div>
        <div class="imgGroup">
          <div class="imgContainer">
            <!-- 图片 -->
            <img src="@/assets/images/homeleft.jpg" alt="" />
            <!-- 容器内标题 -->
            <div class="title">Auto-schedule your books</div>
            <!-- 容器内的文本内容 -->
            <div class="text">
              you may defind the number of attempt your agent <br />
              you may defind the number of attempt <br />
              you may defind the number of attempt your agent <br />
              you may defind the number of attempt <br />
            </div>
          </div>
          <div class="imgContainer">
            <!-- 图片 -->
            <img src="@/assets/images/homeright.jpg" alt="" />
            <!-- 容器内标题 -->
            <div class="title">Auto-schedule your books</div>
            <!-- 容器内的文本内容 -->
            <div class="text">
              you may defind the number of attempt your agent <br />
              you may defind the number of attempt <br />
              you may defind the number of attempt your agent <br />
              you may defind the number of attempt <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    slideDown() {
      scrollTo({
        top: this.$refs.top.scrollHeight + 50,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  background-color: rgb(226, 244, 247);

  .top-page {
    height: calc(100vh - 50px);

    .top-container {
      width: 1345px;
      margin: 0 auto;
      height: 85%;
      display: flex;
      align-items: center;
      .left-images {
        width: 50%;
        img {
          width: 100%;
        }
      }
      .right-content {
        width: 50%;
        height: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        .title {
          color: rgb(83, 119, 172);
          font-size: 40px;
          font-weight: 600;
          text-align: center;
        }
        .text {
          font-size: 20px;
          text-align: center;
        }
        .btn {
          cursor: pointer;
          color: white;
          font-weight: 600;
          background-color: rgb(83, 119, 172);
          width: 200px;
          height: 60px;
          border: 0;
          border-radius: 5px;
          font-size: 20px;
        }
      }
    }
    .company {
      width: 100%;
      position: absolute;
      bottom: 0;
      img {
        // width: 100%;
        // height: 60px;
        vertical-align: middle;
        width: 100%;
      }
    }
  }
  .center-page {
    height: 100vh;
    .center-container {
      width: 1345px;
      margin: 0 auto;
      height: 100%;
      display: flex;
      align-items: center;
      .left-images {
        width: 50%;
        img {
          width: 100%;
        }
      }
      .right-content {
        width: 50%;
        height: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        .title {
          color: rgb(83, 119, 172);
          font-size: 40px;
          font-weight: 600;
          text-align: center;
        }
        .text {
          font-size: 20px;
          text-align: center;
        }
        .btn {
          cursor: pointer;
          color: white;
          font-weight: 600;
          background-color: rgb(83, 119, 172);
          width: 200px;
          height: 60px;
          border: 0;
          border-radius: 5px;
          font-size: 20px;
        }
      }
    }
  }
  .bottom-page {
    height: calc(100vh - 50px);
    .bottom-container {
      width: 1345px;
      height: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .main-title {
        text-align: center;
        font-size: 30px;
        font-weight: 600;
      }
      .imgGroup {
        display: flex;
        justify-content: space-around;
        .imgContainer {
          height: 500px;
          width: 400px;
          border-radius: 12px;
          border: 2px solid rgb(219, 233, 234);
          background-color: white;
          text-align: center;
          img {
            width: 380px;
            height: 291px;
          }
          .title {
            font-weight: 600;
            font-size: 20px;
            line-height: 80px;
          }
        }
      }
    }
  }
}
</style>