<template>
  <div class="myProject">
    <div class="body">
      <!-- 上边的小云 -->
      <img src="@/assets/images/home.jpg" alt="" class="bg-h" />
      <!-- 左部区域 -->
      <div class="left">
        <!-- 头部区域 -->
        <div class="left-head">
          <div class="noticerPhoto">
            <div class="star-l"><img src="@/assets/images/star-l.png" alt="" /></div>
            <div class="imgs">
              <div><img src="@/assets/images/author1.jpg" alt=""></div>
              <div><img src="@/assets/images/author.jpg" alt=""></div>
              <div><img src="@/assets/images/author2.jpg" alt=""></div>
            </div>
            <div class="star-r"><img src="@/assets/images/star-r.png" alt="" /></div>
          </div>
          <div class="text">
            <h2>Some of your notices</h2>
            <p>Notice about some official activities or works like notice...</p>
          </div>
          <div class="button">
            <a href="#">Notice details</a>
          </div>
        </div>
        <!-- 底部评论区域 -->
        <div class="left-foot">
          <ul>
            <li>
              <img src="@/assets/images/author3.jpg" />
              <div class="text">
                <p class="name">Official notice</p>
                <p class="content">Templates <span>`你好蓝色`</span> get likes</p>
                <p class="time">about 1 month</p>
              </div>
            </li>
            <li>
              <img src="@/assets/images/author3.jpg" />
              <div class="text">
                <p class="name">Official notice</p>
                <p class="content">Someone commented on you</p>
                <p class="time">about 1 month</p>
              </div>
            </li>
            <li>
              <img src="@/assets/images/author2.jpg" />
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
          <p class="iconfont icon-zengjia" style="cursor: pointer" @click="clearLocalCanvasData()"></p>
        </div>
        <!-- 项目列表 -->
        <ul class="projectList">
          <li class="work" v-for="item in projectList" :key="item.templateid">
            <p>{{ item.templatename }}</p>
            <ul class="operate">
              <li>
                <a @click="updateProject(item.templateid)" style="cursor: pointer">
                  <span class="iconfont icon-bianji"></span>
                  编辑
                </a>
              </li>
              <li>
                <a @click="sourceCode(item.templateid)" style="cursor: pointer">
                  <span class="iconfont icon-baocun"></span>
                  源码
                </a>
              </li>
              <li>
                <a @click="deleteProject(item.templateid)" style="cursor: pointer">
                  <span class="iconfont icon-shanchu"></span>
                  删除
                </a>
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
import { mapState } from 'vuex'
import toast from '@/utils/toast'
import generateJsonFile from '@/utils/generateJsonFile'
export default {
  name: 'myProject',
  computed: {
    ...mapState('MyProject', ['projectList','curprojectData']),
  },
  methods: {
    // 编辑项目
    async updateProject(templateid) {
      try {
        await this.$store.dispatch('MyProject/updateProject', templateid)
        this.$router.push(`/editPage?templateid=${templateid}`)
      } catch (err) {
        console.log(err.message)
      }
    },

    // 源码
    async sourceCode(templateid) {
      console.log('sourceCode', templateid)
      // 1.发请求拿到源码然后转成json文件
      try {
        await this.$store.dispatch('MyProject/updateProject', templateid);
        console.log("吃完了", this.curprojectData);
        generateJsonFile(JSON.parse(this.curprojectData.sourcecode));
      } catch (err) {
        console.log(err.message)
      }
      
    },
    // 删除项目
    async deleteProject(templateid) {
      try {
        await this.$store.dispatch('MyProject/deleteProject', templateid)
        this.$store.dispatch('MyProject/getProject')
      } catch (error) {
        toast('请登录！')
      }
    },
    //清除本地的CanvasData（上一次的编辑页面内容）
    clearLocalCanvasData() {
      console.log("我们真棒");
      localStorage.removeItem('canvasData');
      localStorage.setItem('canvasStyle', JSON.stringify({ "width": 1200, "height": 740, "scale": 100, "background": "#fff" }));
      this.$store.commit('MyProject/setCurprojectData', '');
      this.$store.commit('EditPage/setComponentData');
      this.$router.push('/editPage');
    }
  },
  mounted() {
    // 获取模板信息在首页展示
    this.$store.dispatch('MyProject/getProject');
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

        .noticerPhoto {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 50px;

          // 星星浮动
          .star-l,
          .star-r {
            width: 35px;
            height: 35px;

            img {
              width: 100%;
            }
          }

          .imgs {
            display: flex;
            width: 125px;
            height: 50px;

            div {
              position: relative;
              width: 37px;
              height: 37px;
              border-radius: 50%;
              border: 2px solid #5377ac;
              overflow: hidden;

              img {
                width: 100%;
                object-fit: cover;
              }
            }

            div:nth-child(1) {
              top: 7px;
              left: 11px;
            }

            div:nth-child(2) {
              width: 45px;
              height: 45px;
              z-index: 2;
            }

            div:nth-child(3) {
              top: 7px;
              right: 11px;
            }
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
              padding: 20px 20px 0 65px;

              .name {
                font-size: 15px;
                font-weight: 600;
              }

              .content {
                font-size: 14px;
                margin: 5px 0;

                span {
                  color: #5377ac;
                  font-weight: bold;
                }
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

        p {
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
                  margin: 6px 3px 0 3px;
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
