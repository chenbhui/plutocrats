<template>
  <div style="position: relative">
    <div class="rightwrapper">
      <head-tab :checkIndex="checkIndex" @checkTabChange="checkTabChange"></head-tab>
      <!--样式-->
      <div v-if="checkIndex === 0">样式</div>
      <!-- 数据-->
      <div v-if="checkIndex === 1">数据</div>
      <!-- 更多功能 -->
      <div v-if="checkIndex === 2" class="morefunction">
        <div class="head">
          <img src="../../assets/images/morefunction.png">
          <h3>Join the discussion</h3>
          <div class="text">
            <p>Looking to share your feedback and join</p>
            <p>in on the conversation</p>
          </div>
          <button><span>Sign up to Dribbble</span></button>
        </div>
        <div class="center">
          <img src="../../assets/images/center.png">
        </div>
        <div class="end">
          <button><span>+</span></button>
        </div>
      </div>
    </div>
    <div class="direction" @click="change">
      <!--      <i class="el-icon-caret-right"></i>-->
    </div>
  </div>

</template>

<script>
import headTab from "@/views/Editor/comp/headTab";

export default {
  components: {
    headTab
  },
  props: {},
  data() {
    return {
      checkIndex: 0,
    }
  },
  computed: {},
  created() {
  },
  mounted() {

  },
  methods: {

    checkTabChange(index) {
      this.checkIndex = index;
    },
    change() {
      let rw = document.querySelector('.rightwrapper');
      let dir = document.querySelector('.direction')
      rw.classList.toggle('lost')
      dir.classList.toggle('active')
    }
  },
  watch: {},
};
</script>

<style lang="less" scoped>

.rightwrapper {
  width: 350px;

  .morefunction {
    width: 270px;
    height: 100vh;
    margin: 0 auto;
    text-align: center;

    .head {
      border-bottom: 1px solid #e9e9e9;

      img {
        margin-top: 40px;
      }

      h3 {
        margin-top: 20px;
      }

      .text {
        margin-top: 10px;
      }

      button {
        margin-top: 10px;
        margin-bottom: 30px;
        background-color: #dc4e85;
        font-size: 15px;
        padding: 10px;
        border-radius: 6px;
        cursor: pointer;

        span {
          color: #efdee8;
        }
      }
    }

    .end {
      button {
        margin-top: 20px;
        background-color: #e8f0ff;
        font-size: 20px;
        width: 150px;
        height: 40px;
        cursor: pointer;
        padding: 5px 10px 40px 10px;
        border-radius: 20px;
        span {
          font-size: 30px;
          color: #3674e0;
        }
      }

    }
  }
}

.direction,
.active {
  position: absolute;
  top: calc(44% - 20px);
  right: 349px;
  width: 20px;
  height: 60px;
  border-radius: 20%;
  background-color: #f9f9fb;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.active {
  right: 0;
}

.lost {
  display: none;
}

.direction::before {
  content: "\e871";
  font-family: "iconfont", serif
}

.active::before {
  content: "\e872";
  font-family: "iconfont", serif
}
</style>
