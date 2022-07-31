<template>
  <div class="community">
    <!-- 两个标签 -->
    <div class="options">
      <select name="" id="" class="selects">
        <option value="Populor" selected>Populor</option>
        <option value="other1">other1</option>
        <option value="other2">other2</option>
        <option value="other3">other3</option>
      </select>
      <div class="filters">
        <a href="#"><span class="iconfont icon-tixingshixin"></span>Filters</a>
      </div>
    </div>
    <!-- 四个表单框 -->
    <div class="searchs">
      <ul>
        <li>
          Tags
          <div class="inputs"><a href="#" class="iconfont icon-sousuo"></a> <input type="text" /></div>
        </li>
        <li>
          Color
          <div class="inputs">
            <input type="color" value="#9ce5f4" @click="changeColor" id="color" />
            <p id="txt">#9CE5F4</p>
          </div>
        </li>
        <li>
          Timeframe
          <div class="inputs">
            <select name="" id="">
              <option value="">Now</option>
            </select>
          </div>
        </li>
        <li>
          Downloads
          <div class="inputs">
            <select name="" id="">
              <option value="">All shots</option>
            </select>
          </div>
        </li>
      </ul>
    </div>
    <!-- 模板列表 -->
    <div class="formWork">
      <ul>
        <li>
          <a href="#" class="formImg"><img src="@/assets/images/formWork.png" alt="" /></a>
          <div class="information">
            <div class="left">
              <a href="#"><img src="@/assets/images/author3.jpg" alt="" />Nantha Kumar</a>
            </div>
            <div class="right"><span class="iconfont icon-xiai"></span>3<span class="iconfont icon-yanjing"></span>1.1k</div>
          </div>
        </li>
        <li>
          <a href="#" class="formImg"><img src="@/assets/images/formWork.png" alt="" /></a>
          <div class="information">
            <div class="left">
              <a href="#"><img src="@/assets/images/author3.jpg" alt="" />Nantha Kumar</a>
            </div>
            <div class="right"><span class="iconfont icon-xiai"></span>3<span class="iconfont icon-yanjing"></span>1.1k</div>
          </div>
        </li>
        <li>
          <a href="#" class="formImg"><img src="@/assets/images/formWork.png" alt="" /></a>
          <div class="information">
            <div class="left">
              <a href="#"><img src="@/assets/images/author3.jpg" alt="" />Nantha Kumar</a>
            </div>
            <div class="right"><span class="iconfont icon-xiai"></span>3<span class="iconfont icon-yanjing"></span>1.1k</div>
          </div>
        </li>
        <li>
          <a href="#" class="formImg"><img src="@/assets/images/formWork.png" alt="" /></a>
          <div class="information">
            <div class="left">
              <a href="#"><img src="@/assets/images/author3.jpg" alt="" />Nantha Kumar</a>
            </div>
            <div class="right"><span class="iconfont icon-xiai"></span>3<span class="iconfont icon-yanjing"></span>1.1k</div>
          </div>
        </li>
        <li>
          <a href="#" class="formImg"><img src="@/assets/images/formWork.png" alt="" /></a>
          <div class="information">
            <div class="left">
              <a href="#"><img src="@/assets/images/author3.jpg" alt="" />Nantha Kumar</a>
            </div>
            <div class="right"><span class="iconfont icon-xiai"></span>3<span class="iconfont icon-yanjing"></span>1.1k</div>
          </div>
        </li>
        <li>
          <a href="#" class="formImg"><img src="@/assets/images/formWork.png" alt="" /></a>
          <div class="information">
            <div class="left">
              <a href="#"><img src="@/assets/images/author3.jpg" alt="" />Nantha Kumar</a>
            </div>
            <div class="right"><span class="iconfont icon-xiai"></span>3<span class="iconfont icon-yanjing"></span>1.1k</div>
          </div>
        </li>
        <li>
          <a href="#" class="formImg"><img src="@/assets/images/formWork.png" alt="" /></a>
          <div class="information">
            <div class="left">
              <a href="#"><img src="@/assets/images/author3.jpg" alt="" />Nantha Kumar</a>
            </div>
            <div class="right"><span class="iconfont icon-xiai"></span>3<span class="iconfont icon-yanjing"></span>1.1k</div>
          </div>
        </li>
        <li>
          <a href="#" class="formImg"><img src="@/assets/images/formWork.png" alt="" /></a>
          <div class="information">
            <div class="left">
              <a href="#"><img src="@/assets/images/author3.jpg" alt="" />Nantha Kumar</a>
            </div>
            <div class="right"><span class="iconfont icon-xiai"></span>3<span class="iconfont icon-yanjing"></span>1.1k</div>
          </div>
        </li>
        <li>
          <a href="#" class="formImg"><img src="@/assets/images/formWork.png" alt="" /></a>
          <div class="information">
            <div class="left">
              <a href="#"><img src="@/assets/images/author3.jpg" alt="" />Nantha Kumar</a>
            </div>
            <div class="right"><span class="iconfont icon-xiai"></span>3<span class="iconfont icon-yanjing"></span>1.1k</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeColor() {
      var color = document.querySelector('#color')
      var txt = document.querySelector('#txt')
      color.addEventListener('change', (e) => {
        // console.log(e.target.value);
        txt.innerHTML = e.target.value
      })
    },
  },
}
</script>

<style lang="less" scoped>
.community {
  width: 1345px;
  margin: 0 auto;
  // 两个选项
  .options {
    height: 100px;
    // background-color: pink;
    .selects {
      float: left;
      width: 110px;
      height: 40px;
      margin: 28px;
      padding: 8px;
      background-color: #fff;
      border-radius: 5px;
      border: 1px solid #ccc;
      option {
        font-size: 14px;
      }
    }
    .filters {
      float: right;
      width: 110px;
      height: 40px;
      margin: 28px;
      padding: 8px;
      background-color: #f3f3f4;
      border-radius: 5px;
      a {
        color: #000;
        font-size: 18px;
        .icon-tixingshixin {
          display: inline-block;
          font-size: 25px;
          color: #5176ab;
          width: 30px;
          vertical-align: top;
          margin: -3px 0 0 5px;
        }
      }
    }
  }
  // 四个四个表单框
  .searchs {
    height: 100px;
    // background-color: skyblue;
    ul {
      height: 100%;
      padding: 0 30px;
      li:nth-child(4n) {
        margin-right: 0;
      }
      li {
        float: left;
        width: 290px;
        height: 100%;
        font-size: 15px;
        font-weight: 600;
        margin: 0 41px 0 0;
        .inputs {
          width: 100%;
          height: 35px;
          background-color: #f3f3f4;
          border-radius: 5px;
          margin-top: 10px;
          .icon-sousuo {
            display: block;
            font-size: 20px;
            color: #ababb3;
            padding: 5px 12px;
          }
          input[type='text'] {
            float: right;
            height: 33px;
            width: 250px;
            margin-top: 1px;
            border-radius: 0 0 5px 5px;
          }
          input[type='color'] {
            width: 20px;
            height: 20px;
            margin: 8px;
          }
          // 外面的容器
          input[type='color']::-webkit-color-swatch-wrapper {
            padding: 0;
            margin: 0;
          }
          // 内部的颜色按钮
          input[type='color']::-webkit-color-swatch {
            border: none;
            border-radius: 50%;
          }
          p {
            display: inline-block;
            font-size: 14px;
            line-height: 35px;
            font-weight: 500;
          }
          select {
            width: 92%;
            margin: 5px 10px;
            color: #9499a0;
          }
        }
      }
    }
  }

  // 滚动条透明
  .formWork::-webkit-scrollbar {
    height: 0;
    width: 0;
    color: transparent;
  }

  // 模板列表
  .formWork {
    height: 570px;
    overflow: auto;
    // background-color: green;
    ul {
      width: 100%;
      height: 100%;
      li:nth-child(4n) {
        margin-right: 0;
      }
      li {
        float: left;
        height: 250px;
        width: 300px;
        // background-color: skyblue;
        margin: 0 48px 35px 0;
        overflow: hidden;
        // 模板照片
        .formImg {
          display: block;
          width: 100%;
          height: 210px;
          border-radius: 10px;
          overflow: hidden;
          background-color: pink;
          img {
            width: 100%;
            height: 100%;
          }
        }
        // 个人信息&点赞&浏览
        .information {
          .left {
            float: left;
            width: 180px;
            height: 100%;
            a {
              font-size: 15px;
              color: #000;
              img {
                display: inline-block;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                margin: 5px 5px 6px 5px;
                vertical-align: middle;
              }
            }
          }
          .right {
            float: right;
            width: 110px;
            height: 100%;
            padding: 10px 0;
            color: #000;
            font-size: 15px;
            .icon-xiai {
              margin: 0 5px 0 22px;
              color: #9e9ea7;
              font-size: 16px;
            }
            .icon-yanjing {
              margin: 0 5px;
              color: #9e9ea7;
              font-size: 16px;
            }
          }
        }
      }
    }
  }
}
</style>
