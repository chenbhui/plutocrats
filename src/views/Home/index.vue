<template>
    <!-- banner -->
    <div class="container">
        <div class="banner">
            <div class="summer" ref="top">
                <div class="summer-show">
                    <div class="summer-show-img">
                        <img src="@/assets/images/home.jpg" alt="">
                    </div>
                    <div class="summer-show-text">
                        <h3>ShortCut design platform</h3>
                        <h3>zero code</h3>
                        <p class="essey">
                            Zero code design platform, random splicing, adjustment of appearance, easy drag and drop,
                            everyone can quickly create your own static web page.
                        </p>
                        <div class="btnOPEN" @click="slideDown()">SLIDE DOWN</div>
                    </div>
                </div>
            </div>
            <!-- 合作伙伴 -->
            <div class="cooperation-sign">
                <img src="@/assets/images/company.jpg" alt="">
            </div>
            <!-- 服务咨询介绍 -->
            <div class="psy-service">
                <div class="service-show">
                    <div class="service-show-text">
                        <h3>ShortCut platform service</h3>
                        <h3>are ahead</h3>
                        <p class="essey">
                            We provide a personal warehouse page, you can enter the historical template design at will,
                            and there is a template page.
                        </p>
                        <div class="btnOPEN" @click="BeginCreate()">Begin create</div>
                    </div>
                    <div class="service-show-img">
                        <img src="@/assets/images/home.jpg" alt="">
                    </div>
                </div>
            </div>
            <!-- 科普方面 -->
            <div class="psy-knowledge">
                <h3>Gain the full control over reaching your leads</h3>
                <div class="knowledge-show">
                    <div class="knowledge-show-book">
                        <div class="knowledge-show-img">
                            <img src="@/assets/images/homeleft.jpg" alt="">
                        </div>
                        <div class="knowledgev-show-text">
                            <h4>Auto-schedule your Template</h4>
                            <p>Manage historical design, click to enter the editing page, </p>
                            <p>and generate new templates and update warehouse files</p>
                            <p> by dragging and style adjustment</p>
                        </div>
                    </div>
                    <div class="knowledge-show-case">
                        <div class="knowledge-show-img">
                            <img src="@/assets/images/homeright.jpg" alt="">
                        </div>
                        <div class="knowledge-show-text">
                            <div class="knowledgev-show-text">
                                <h4>Freely apply others' templates</h4>
                                <p>Enter the template page and click your favorite template </p>
                                <p>to apply it freely, saving time and completing</p>
                                <p> the page in a few minutes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'',
    data() {
        return {};
    },
    methods: {
        slideDown() {
            scrollTo({
                top: this.$refs.top.scrollHeight + 150,
                left: 0,
                behavior: "smooth",
            });
        },
        BeginCreate() {
            if (localStorage.getItem("UserInfo")) {
                this.$router.push('/editPage');
            } else {
                this.$router.push('/login');
            }
        }
    },
};
</script>

<style scoped>
.container{
    padding-bottom: 80px;
    background-color: rgb(226, 244, 247);
}
.banner {
    margin: 0 auto;
}

.banner>div {
    padding: 0 50px;
}

.psy-knowledge {
    margin-top: 50px;
}

.summer-show,
.service-show,
.knowledge-show {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 555px;
}

.knowledge-show {
    height: 660px;
    padding: 88px 80px 0 80px;
}

.summer-show>div,
.service-show>div,
.knowledge-show>div {
    flex: 1;
}

.summer-show-img,
.service-show-img {
    padding: 80px 50px 30px 50px;
}

.summer-show-img img,
.service-show-img img {
    width: 100%;
    height: 100%;
}

.service-show-text,
.summer-show-text {
    position: relative;
    padding: 110px 30px;
    text-align: center;
}

.service-show-text h3,
.summer-show-text h3 {
    font-size: 39px;
    color: #5377ac;
}

.service-show-text p,
.summer-show-text p {
    margin-top: 50px;
    font-size: 20px;
    color: #000;
}

.service-show-text .btnOPEN,
.summer-show-text .btnOPEN {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 245px;
    height: 60px;
    margin-top: 80px;
    line-height: 60px;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    border-radius: 5px;
    background: #5377ac;
    cursor: pointer;
}

.cooperation-sign {
    width: 100%;
    height: 80px;
    margin-top: 55px;
    background: #fafafa;
}

.cooperation-sign img {
    width: 100%;
}

.psy-knowledge h3 {
    width: 100%;
    text-align: center;
    font-size: 32px;
}

.knowledge-show>div {
    margin: 0 36px;
    border-radius: 7px;
    box-shadow: 0px 0px 5px#ccc;
    background: #fff;
    cursor: pointer;
}

.knowledge-show-img {
    width: 100%;
    padding: 0 30px;
}

.readus-author-img img,
.knowledge-show-img img {
    width: 100%;
}

.knowledgev-show-text {
    width: 100%;
    text-align: center;
}

.knowledgev-show-text h4 {
    margin: 48px 0 19px 0;
    font-size: 23px;
}

.knowledgev-show-text p {
    line-height: 23px;
    font-size: 16px;
    color: #535353;
}

/* 减压模块 */
.decompression {
    width: 100%;
    height: 400px;
    padding: 0 50px;
    background: #ffe284;
}

.decompression-wrap {
    display: flex;
    width: 995px;
    max-width: 995px;
    height: 100%;
    margin: 0 auto;
}

.decompression-wrap-show {
    flex: 1;
    margin: 20px 10px;
    text-align: center;
}

.decompresssion-img {
    width: 100px;
    height: 100px;
    margin: 45px auto 32px;
}

.decompression-wrap-show .iconfont:before {
    color: #fff;
    font-size: 100px;
}

.decompression-text-head {
    margin-bottom: 30px;
    font-size: 27px;
    font-weight: 600;
}

.decompression-text-descri {
    font-size: 17px;
    line-height: 28px;
    letter-spacing: 1px;
}

/* 关于我们 */
.readus {
    width: 100%;
    margin-top: 80px;
}

.readus-img {
    width: 100%;
    height: 500px;
    background: url(../../assets/images/aboutus.svg) center center no-repeat;
}

.readus-text {
    position: relative;
    top: -20px;
    width: 100%;
    height: 400px;
}

.readus-text-card {
    width: 917px;
    height: 370px;
    margin: 0 auto;
    padding: 20px 0;
    text-align: center;
    background: #fbf7f1;
}

.readus-text h3 {
    font-size: 32px;
}

.readus-text p {
    margin-top: 5px;
    font-size: 15px;
}

.readus-text-card>div {
    display: flex;
    margin: 30px auto 0 auto;
    width: 758px;
    height: 221px;
}

.readus-author-img {
    width: 221px;
    height: 221px;
    margin-right: 45px;
}

.readus-author-text {
    width: 505px;
    height: 221px;
}

.readus-author-text p {
    text-align: left;
    word-spacing: 3px;
    letter-spacing: 0.3px;
    font-size: 15px;
    color: #134160;
}
</style>