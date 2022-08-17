<template>
  <div class="morePage">
        <div class="loading">
            <div class="loadingImg">
                <img src="@/assets/images/more.svg" alt="">
            </div>
            <div class="loadingTip">Loading...</div>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>





    .morePage{
        display: flex;
        width: 100vw;
        height: calc(100vh - 60px);
        justify-content: center;
        align-items: center;
        .loading{
            .loadingImg{
                width: 400px;
                height: 400px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .loadingTip{
                font-size: 25px;
                text-align: center;
                color: #7f858a;
            }
        }
    }
</style>