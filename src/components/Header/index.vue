<template>
  <div class="header">
    <!-- logo -->
      <div class="logo">
        <img src="@/assets/images/logo.jpg" alt="">
      </div>
      <!-- 导航栏部分 -->
      <ul class="nav">
        <li><a href="#">PSY SERVICE</a></li>
        <li><a href="#">DECOMPRESSION</a></li>
        <li><a href="#">PSY KNOWLEDGE</a></li>
        <li><a href="#">ABOUT US</a></li>
      </ul>
      <!-- 头像 -->
      <div class="author">
        <img src="@/assets/images/author.jpg" alt="">
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>

.header {
  height: 50px;
  background-color: #5176ab;

  .logo {
    float: left;
    height: 50px;
    width: 200px;
    margin-left: 80px;
    img{
      height: 100%;
    }
  }

  .nav {
    float: left;
    height: 100%;
    margin: 0 0 0 200px;
    li {
      float: left;
      margin: 0 15px;
      line-height: 50px;
      list-style: none;
      a {
        text-decoration: none;
        font-size: 16px;
        color: #fff;
      }
    }
  }

  .author {
    float: right;
    margin: 5px 100px 0 0;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid #fff;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
