<template>
  <div class="community">
    <div class="body">
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
              <input type="color" :value="color" @change="changeColor" />
              <p id="txt">{{ color }}</p>
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
          <li v-for="(item,index) in formWorkList" :key="item.templateid">
            <a class="formImg" @click="clickTemplate(index,item.templateid)">
              <img :src="item.templateimg" alt="" />
            </a>
            <div class="information">
              <div class="left">
                <a href="#">
                  <img :src="item.iconurl" alt="" />
                  {{ item.username}}
                </a>
              </div>
              <div class="right">
                <a @click="changeLikes({ $event, index })"><span class="iconfont icon-xiai"></span></a>
                {{ item.likenum }}
                <span class="iconfont icon-yanjing"></span>
                {{ item.publish_sign }}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { updateProject } from '@/api'

export default {
  computed: {
    ...mapState('Community', ['color', 'formWorkList']),
  },
  methods: {
    // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象写法)
    // ...mapMutations('Community', { addBrowse: 'ADDBROWSES'}),
    // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(对象写法)
    ...mapActions('Community', { changeColor: 'changeColor', changeLikes: 'changeLikes' }),
    async clickTemplate(index,templateid) {
      this.$store.commit('Community/ADDBROWSES', index)
      // 获取模板信息
      const result=await updateProject(templateid)
      const clickTemplateData = result.data
      console.log(clickTemplateData);
      // 修改模板信息中的templateid属性为null，让其进行后续编辑时重新传入新的templateid后保存或发布
      const copyTemplateData = clickTemplateData;
      copyTemplateData.templateid = null;
      copyTemplateData.id = null;
      copyTemplateData.openid = null;
      console.log(copyTemplateData);
      // Myproject中逻辑复用
      const templatedata = JSON.parse(copyTemplateData.templatedata);
      console.log(templatedata);
      //改变当前模板信息
      this.$store.commit('MyProject/setCurprojectData', copyTemplateData)
      localStorage.setItem("canvasData", JSON.stringify(templatedata.canvasData));
      localStorage.setItem("canvasStyle", JSON.stringify(templatedata.canvasStyle));
      // 跳转到编辑页
      this.$router.push('/editPage')
    }
  },
  mounted() {
    // 获取模板信息在首页展示
    this.$store.dispatch('Community/getFormWork');
  },
}
</script>

<style lang="less" scoped>
.community {
  width: 100%;
  
  .body {
    width: 1345px;
    margin: 0 auto;
    padding: 30px;
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
        padding: 0 10px;
        li:nth-child(4n) {
          margin-right: 0;
        }
        li {
          float: left;
          width: 280px;
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
              float: left;
              display: block;
              font-size: 20px;
              color: #ababb3;
              padding: 5px 12px;
            }
            input[type='text'] {
              float: right;
              height: 33px;
              width: 228px;
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
      height: 540px;
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
          width: 290px;
          // background-color: skyblue;
          margin: 0 35px 35px 0;
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
              height: 100%;
              padding: 10px 0;
              color: #000;
              font-size: 15px;
              a {
                display: block;
                float: left;
                width: 17px;
                height: 17px;
                margin: 0 9px;
                .icon-xiai {
                  color: #9e9ea7;
                  font-size: 16px;
                }
                .red{
                  color: rgb(226, 42, 42);
                }
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
}
</style>
