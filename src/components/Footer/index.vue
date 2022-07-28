<template>
  <footer class="footer">
    <div class="footer-publish">
      <p class="copyright">Copyright &copy; | All Rights Reserved</p>
      <p class="slogan">love and expectation are ahead</p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.footer {
  position: relative;
  bottom: 0;
  left: 0;
  height: 80px;
  background-color: #5176ab;
  text-align: center;
  h5 {
    line-height: 30px;
  }
  h6 {
    line-height: 20px;
  }
}

/* 尾部 */
.footer {
  width: 100%;
  background: #5176ab;
  .footer-publish {
    width: 100%;
    height: 100px;
    padding-top: 30px;
    text-align: center;
    background: #5176ab;
    .copyright {
      margin-bottom: 10px;
      font-size: 16px;
    }
  }
}
</style>
