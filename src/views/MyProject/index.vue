<template>

  <div class="myProject">
    <!-- <h1>项目管理页</h1> -->
    <Header></Header>
    <div class="body">
      <div class="left">

      </div>
      <div class="right">
          <ul>
            <li></li>
            <li></li>
          </ul>
      </div>
    </div>

  <div>
    

    <Footer></Footer>
  </div>
  </div>
</template>

<script>




import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: {
    Header,
    Footer

},
}
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;

}
.body{
  background-color: #e2f4f8;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  .left{
    width: 300px;
    height: 550px;
    background-color: #fff;
  }
  .right{
    width: 820px;
    height: 550px;
    background-color: #fff;
  }

}
</style>




