<template>
  <div class="myProject">
    <!-- <h1>项目管理页</h1> -->
    <!-- <Header></Header> -->
    <div class="body">
      <img src="@/assets/images/home.jpg" alt="" class="bg-r" />
      <div class="left">
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
          </ul>
        </div>
      </div>
      <div class="right">
        <div class="project">
          <div class="addbutton">
            <a href="#"><img src="@/assets/images/create.png" alt="" /></a>
          </div>
        </div>
        <ul class="projectList">
          <li>
            <p>1</p>
            <ul class="operate">
              <li>
                <a href="#"><img src="@/assets/images/edit.png" alt="" />编辑</a>
              </li>
              <li>
                <a href="#"><img src="@/assets/images/preserve.png" alt="" />另存</a>
              </li>
              <li>
                <a href="#"><img src="@/assets/images/delete.png" alt="" />删除</a>
              </li>
            </ul>
          </li>
          <li>
            <p>2</p>
            <ul class="operate">
              <li>
                <a href="#"><img src="@/assets/images/edit.png" alt="" />编辑</a>
              </li>
              <li>
                <a href="#"><img src="@/assets/images/preserve.png" alt="" />另存</a>
              </li>
              <li>
                <a href="#"><img src="@/assets/images/delete.png" alt="" />删除</a>
              </li>
            </ul>
          </li>
          <li>
            <p>3</p>
            <ul class="operate">
              <li>
                <a href="#"><img src="@/assets/images/edit.png" alt="" />编辑</a>
              </li>
              <li>
                <a href="#"><img src="@/assets/images/preserve.png" alt="" />另存</a>
              </li>
              <li>
                <a href="#"><img src="@/assets/images/delete.png" alt="" />删除</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <img src="@/assets/images/home.jpg" alt="" class="bg-f" />
    </div>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    Footer,
  },
}
</script>

<style lang="less">
.myProject {
  width: 100%;
  background-color: rgb(226, 244, 247);
  height: 100vh;
  .body {
    width: 1345px;
    margin: 0 auto;
    position: relative;
    background-color: #e2f4f8;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    .bg-r {
      position: absolute;
      right: 30px;
      top: 0;
      width: 350px;
      height: 300px;
      clip: rect(0px 358px 72px 175px);
    }
    .bg-f {
      position: absolute;
      right: 570px;
      bottom: 0;
      width: 350px;
      height: 300px;
      clip: rect(230px 187px 320px 0px);
    }

    .left {
      width: 350px;
      height: 680px;
      background-color: #fff;
      .left-head {
        position: relative;
        height: 160px;
        padding: 45px;
        text-align: center;
        .star-l,
        .star-r {
          position: absolute;
          width: 35px;
          height: 35px;
        }
        .star-r {
          right: 100px;
        }
        .imgs {
          display: inline-block;
          width: 150px;
          height: 50px;
          // background-color: pink;
          img {
            position: relative;
            border-radius: 50%;
          }
          img:nth-child(2n + 1) {
            width: 30px;
            height: 30px;
          }
          img:nth-child(2) {
            width: 40px;
            height: 40px;
            overflow: hidden;
            z-index: 2;
          }
          img:nth-child(1) {
            left: 10px;
          }
          img:nth-child(3) {
            right: 10px;
          }
        }
        .text {
          h2 {
            margin: 10px auto;
          }
          p {
            margin: 10px auto;
          }
        }
        .button {
          display: inline-block;
          width: 130px;
          height: 40px;
          border-radius: 5px;
          background-color: #e94383;
          a {
            line-height: 40px;
            color: #fff;
            text-align: center;
          }
        }
      }
      .left-foot {
        height: 400px;
        padding: 0 30px;
        // background-color: pink;
        ul {
          width: 100%;
          height: 100%;
          // background-color: skyblue;
          li {
            // height: 90px;
            width: 100%;
            // background-color: green;
            margin: 10px auto;
            img {
              float: left;
              margin: 5px 15px 0;
              width: 35px;
              height: 35px;
              border-radius: 50%;
            }
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
                color: #ccc;
              }
            }
          }
        }
      }
    }
    .right {
      position: relative;
      z-index: 2;
      width: 870px;
      height: 680px;
      // background-color: #fff;
      .project,
      .projectList > li {
        float: left;
        width: 260px;
        height: 150px;
        margin: 0 14px 30px 14px;
        border-radius: 5px;
        border: 1px solid #ccc;
        background-color: #fff;
      }
      .project .addbutton {
        margin: 29px auto;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .projectList {
        p {
          height: 40px;
          line-height: 40px;
          font-size: 18px;
          text-align: center;
          border-bottom: 2px solid #ccc;
        }

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
              color: #fff;
            }
            img {
              margin: 3px 3px 0 3px;
              width: 75%;
              height: 60%;
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
</style>
