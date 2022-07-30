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
        <a href="#"><img src="@/assets/images/warn.png" />Filters</a>
      </div>
    </div>
    <!-- 四个表单框 -->
    <div class="searchs">
      <ul>
        <li>
          Tags
          <div class="inputs"><img src="@/assets/images/search.png" /> <input type="text" /></div>
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
          <div class="text">
            <div class="left">
              <a href="#"><img src="" alt="" /></a><span class="name">Nantha Kumar</span>
            </div>
            <div class="right"><span class="like"></span><span class="watch"></span></div>
          </div>
        </li>
        <li>
          <a href="#" class="formImg"><img src="@/assets/images/formWork.png" alt="" /></a>
          <div class="text">
            <div class="left">
              <a href="#"><img src="" alt="" /></a><span class="name">Nantha Kumar</span>
            </div>
            <div class="right"><span class="like"></span><span class="watch"></span></div>
          </div>
        </li>
        <li>
          <a href="#" class="formImg"><img src="@/assets/images/formWork.png" alt="" /></a>
          <div class="text">
            <div class="left">
              <a href="#"><img src="" alt="" /></a><span class="name">Nantha Kumar</span>
            </div>
            <div class="right"><span class="like"></span><span class="watch"></span></div>
          </div>
        </li>
        <li>
          <a href="#" class="formImg"><img src="@/assets/images/formWork.png" alt="" /></a>
          <div class="text">
            <div class="left">
              <a href="#"><img src="" alt="" /></a><span class="name">Nantha Kumar</span>
            </div>
            <div class="right"><span class="like"></span><span class="watch"></span></div>
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

      img {
        width: 30px;
        height: 30px;
        vertical-align: middle;
        margin: -2px 2px 0 2px;
      }
      a {
        color: #000;
        font-size: 18px;
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
          img {
            width: 20px;
            height: 20px;
            margin: 7px 12px;
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
  // 模板列表
  .formWork {
    height: 376px;
    background-color: green;
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
        background-color: skyblue;
        margin: 0 48px 0 0;
        .formImg{
          display: block;
          width: 100%;
          height: 210px;
          border-radius: 10px;
          overflow: hidden;
          background-color: pink;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
