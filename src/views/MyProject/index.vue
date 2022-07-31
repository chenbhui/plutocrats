<template>
  <div class="myProject">
    <div class="body">
      <!-- 上边的小云 -->
      <img src="@/assets/images/home.jpg" alt="" class="bg-h" />
      <!-- 左部区域 -->
      <div class="left">
        <!-- 头部区域 -->
        <div class="left-head">
          <img src="@/assets/images/star-l.png" alt="" class="star-l" />
          <div class="imgs">
            <img src="@/assets/images/author1.jpg" alt="" />
            <img src="@/assets/images/author.jpg" alt="" />
            <img src="@/assets/images/author2.jpg" alt="" />
          </div>
          <img src="@/assets/images/star-r.png" alt="" class="star-r" />
          <div class="text">
            <h2>Join the discussion</h2>
            <p>Looking to share your feedback and join in on the conversion?</p>
          </div>
          <div class="button">
            <a href="#">Sign up to dribble</a>
          </div>
        </div>
        <!-- 底部评论区域 -->
        <div class="left-foot">
          <ul>
            <li>
              <img src="@/assets/images/author3.jpg" />
              <div class="text">
                <p class="name">Jobove Reus</p>
                <p class="content">I like the way you do your work,they are fantastic,best regards</p>
                <p class="time">about 1 month</p>
              </div>
            </li>
            <li>
              <img src="@/assets/images/author3.jpg" />
              <div class="text">
                <p class="name">PAHRI</p>
                <p class="content">Love it!</p>
                <p class="time">about 1 month</p>
              </div>
            </li>
            <li>
              <img src="@/assets/images/author3.jpg" />
              <div class="text">
                <p class="name">Saidur</p>
                <p class="content">Great job!</p>
                <p class="time">about 1 month</p>
              </div>
            </li>
            <li>
              <img src="@/assets/images/author3.jpg" />
              <div class="text">
                <p class="name">John Uttley</p>
                <p class="content">Excellent,very nice indeed</p>
                <p class="time">about 1 month</p>
              </div>
            </li>
            <li>
              <img src="@/assets/images/author3.jpg" />
              <div class="text">
                <p class="name">John Uttley</p>
                <p class="content">Excellent,very nice indeed</p>
                <p class="time">about 1 month</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 右部区域 -->
      <div class="right">
        <!-- 添加项目 -->
        <div class="addProject">
          <a href="#" class="iconfont icon-zengjia"></a>
        </div>
        <!-- 项目列表 -->
        <ul class="projectList">
          <li class="work" v-for="item in projectList" :key="item.id">
            <p>{{item.projectName}}</p>
            <ul class="operate">
              <li>
                <a href="#"><sapn class="iconfont icon-bianji"></sapn>编辑</a>
              </li>
              <li>
                <a href="#"><sapn class="iconfont icon-baocun"></sapn>另存</a>
              </li>
              <li>
                <a href="#"><sapn class="iconfont icon-shanchu"></sapn>删除</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- 下边的小云 -->
      <img src="@/assets/images/home.jpg" alt="" class="bg-f" />
    </div>
  </div>
</template>

<script>
import { mapState} from 'vuex'
export default {
  computed: {
    ...mapState('MyProject', ['projectList']),
  },
}
</script>

<style lang="less" scoped>
.myProject {
  width: 100%;
  background-color: #e2f4f8;
  .body {
    position: relative;
    width: 1345px;
    margin: 0 auto;
    padding: 30px;
    display: flex;
    justify-content: space-between;

    // 上边的小云
    .bg-h {
      position: absolute;
      right: 30px;
      top: 0;
      width: 350px;
      height: 300px;
      clip: rect(0px 334px 72px 175px);
    }

    // 下边的小云
    .bg-f {
      position: absolute;
      right: 570px;
      bottom: 0;
      width: 350px;
      height: 300px;
      clip: rect(230px 187px 320px 0px);
    }

    // 设置滚动条为透明
    .left-foot::-webkit-scrollbar,
    .right::-webkit-scrollbar {
      height: 0;
      width: 0;
      color: transparent;
    }
    .left-foot,
    .right {
      overflow-y: scroll;
      scrollbar-color: transparent transparent;
      scrollbar-track-color: transparent;
      -ms-scrollbar-track-color: transparent;
    }

    // 左部区域
    .left {
      width: 350px;
      height: 698px;
      border-radius: 8px;
      background-color: #fff;
      // 左部头部区域
      .left-head {
        position: relative;
        height: 260px;
        padding: 45px;
        text-align: center;
        // 星星浮动
        .star-l,
        .star-r {
          position: absolute;
          width: 35px;
          height: 35px;
        }
        .star-r {
          right: 100px;
        }
        // 头部头像
        .imgs {
          display: inline-block;
          width: 150px;
          height: 50px;
          img {
            position: relative;
            border-radius: 50%;
          }
          img:nth-child(1) {
            width: 30px;
            height: 30px;
            left: 10px;
          }
          img:nth-child(2) {
            width: 40px;
            height: 40px;
            overflow: hidden;
            z-index: 2;
          }
          img:nth-child(3) {
            width: 30px;
            height: 30px;
            right: 10px;
          }
        }
        // 头部文本
        .text {
          h2 {
            font-size: 19.2px;
            margin: 10px auto;
          }
          p {
            font-size: 14px;
            margin: 10px auto;
          }
        }
        // 头部按钮
        .button {
          display: inline-block;
          width: 130px;
          height: 40px;
          border-radius: 5px;
          background-color: #e94383;
          margin-top: 5px;
          a {
            font-size: 14px;
            line-height: 40px;
            color: #fff;
            text-align: center;
          }
        }
      }

      // 左部底部区域
      .left-foot {
        height: 410px;
        padding: 0 30px;
        overflow: auto;

        ul {
          width: 100%;
          height: 100%;
          li {
            margin: 0 auto 10px;
            // 头像
            img {
              float: left;
              margin: 5px 15px 0;
              width: 35px;
              height: 35px;
              border-radius: 50%;
            }
            // 文本
            .text {
              padding: 20px 0 0 65px;
              .name {
                font-size: 15px;
                font-weight: 600;
              }
              .content {
                font-size: 14px;
                margin: 5px 0;
              }
              .time {
                font-size: 13px;
                color: #ccc;
              }
            }
          }
        }
      }
    }
    // 右侧区域
    .right {
      position: relative;
      z-index: 2;
      width: 870px;
      height: 698px;
      overflow: auto;
      // 添加项目
      .addProject {
        float: left;
        width: 260px;
        height: 150px;
        margin: 0 14px 30px 14px;
        border-radius: 8px;
        border: 1px solid #ccc;
        background-color: #fff;
        a {
          display: block;
          color: #3e99e0;
          font-size: 80px;
          margin: 24px 90px;
        }
      }

      // 项目列表
      .projectList {
        // 项目
        .work {
          float: left;
          width: 260px;
          height: 150px;
          margin: 0 14px 30px 14px;
          border-radius: 8px;
          border: 1px solid #ccc;
          background-color: #fff;
          p {
            height: 40px;
            line-height: 40px;
            font-size: 18px;
            text-align: center;
            border-bottom: 2px solid #ccc;
          }
          // 操作
          .operate {
            margin-top: 20px;
            li {
              float: left;
              width: 40px;
              height: 55px;
              margin: 10px 23px;
              border-radius: 5px;
              text-align: center;
              a {
                font-size: 13px;
                color: #fff;
                .icon-bianji,
                .icon-baocun,
                .icon-shanchu {
                  display: block;
                  margin: 2px 3px 0 3px;
                  font-size: 26px;
                }
              }
            }
            li:nth-child(1) {
              background-color: #629bc6;
            }
            li:nth-child(2) {
              background-color: #63b88f;
            }
            li:nth-child(3) {
              background-color: #e1652f;
            }
          }
        }
      }
    }
  }
}
</style>
