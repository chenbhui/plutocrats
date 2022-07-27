<template>
<<<<<<< Updated upstream
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
=======
  <div>
    <Header></Header>
>>>>>>> Stashed changes
    <Footer></Footer>
  </div>
</template>

<script>
<<<<<<< Updated upstream
import Header from '@/views/header.vue'
import Footer from '@/views/footer.vue'

=======
import Header from "@/views/MyProject/header";
import Footer from "@/views/MyProject/footer";
>>>>>>> Stashed changes
export default {
  components: {
    Header,
    Footer
<<<<<<< Updated upstream
},
}
</script>

<style lang="less">
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
=======
  },
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
>>>>>>> Stashed changes
}
</style>
