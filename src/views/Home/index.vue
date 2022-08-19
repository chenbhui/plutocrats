<template>
    <div class="container">
        <!-- 顶部内容区 -->
        <div class="top-page" ref="top">
            <div class="top-container">
                <!-- 左边图片 -->
                <div class="left-images">
                    <img src="@/assets/images/home.jpg" alt="" />
                </div>
                <!-- 右边内容 -->
                <div class="right-content">
                    <!-- 标题 -->
                    <div class="title">
                        ShortCut design platform <br />
                        zero code
                    </div>
                    <!-- 文本内容 -->
                    <div class="text">
                        Zero code design platform, random splicing, adjustment of appearance, easy drag and drop,
                        everyone can quickly create your own static web page.
                    </div>
                    <!-- 按钮 -->
                    <button class="btn" @click="slideDown">SLIDE DOWN</button>
                </div>
            </div>
            <!-- company -->
            <div class="company">
                <img src="@/assets/images/company.jpg" alt="" />
            </div>
        </div>
        <div class="center-page" id="center">
            <div class="center-container">
                <!-- 左边内容 -->
                <div class="right-content">
                    <!-- 标题 -->
                    <div class="title">
                        ShortCut platform service <br />
                        are ahead
                    </div>
                    <!-- 文本内容 -->
                    <div class="text">
                        We provide a personal warehouse page, you can enter the historical template design at will,
                        and there is a template page.
                    </div>
                    <!-- 按钮 -->
                    <button class="btn" @click="BeginCreate()">Begin create</button>
                </div>
                <!-- 右边图片 -->
                <div class=" left-images">
                    <img src="@/assets/images/home.jpg" alt="" />
                </div>
            </div>
        </div>
        <div class="bottom-page">
            <div class="bottom-container">
                <div class="main-title">
                    Gain the full control over reaching your leads
                </div>
                <div class="imgGroup">
                    <div class="imgContainer">
                        <!-- 图片 -->
                        <img src="@/assets/images/homeleft.jpg" alt="" />
                        <!-- 容器内标题 -->
                        <div class="title">Auto-schedule your Template</div>
                        <!-- 容器内的文本内容 -->
                        <div class="text">
                            Manage historical design, click to enter the editing page, <br />
                            and generate new templates and update warehouse files <br />
                            by dragging and style adjustment
                        </div>
                    </div>
                    <div class="imgContainer">
                        <!-- 图片 -->
                        <img src="@/assets/images/homeright.jpg" alt="" />
                        <!-- 容器内标题 -->
                        <div class="title">Freely apply others' templates</div>
                        <!-- 容器内的文本内容 -->
                        <div class="text">
                            Enter the template page and click your favorite template <br />
                            to apply it freely, saving time and completing <br />
                            the page in a few minutes
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        slideDown() {
            scrollTo({
                top: this.$refs.top.scrollHeight + 50,
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

<style lang="less" scoped>
.container {
    background-color: rgb(226, 244, 247);
    padding-bottom: 50px;

    .top-page {
        height: calc(100vh - 50px);

        .top-container {
            width: 1345px;
            margin: 0 auto;
            height: 85%;
            display: flex;
            align-items: center;

            .left-images {
                width: 50%;

                img {
                    width: 100%;
                }
            }

            .right-content {
                width: 50%;
                height: 60%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;

                .title {
                    color: rgb(83, 119, 172);
                    font-size: 40px;
                    font-weight: 600;
                    text-align: center;
                }

                .text {
                    font-size: 20px;
                    text-align: center;
                }

                .btn {
                    cursor: pointer;
                    color: white;
                    font-weight: 600;
                    background-color: rgb(83, 119, 172);
                    width: 200px;
                    height: 60px;
                    border: 0;
                    border-radius: 5px;
                    font-size: 20px;
                }
            }
        }

        .company {
            width: 100%;
            position: absolute;
            bottom: 0;

            img {
                // width: 100%;
                // height: 60px;
                vertical-align: middle;
                width: 100%;
            }
        }
    }

    .center-page {
        height: 100vh;

        .center-container {
            width: 1345px;
            margin: 0 auto;
            height: 100%;
            display: flex;
            align-items: center;

            .left-images {
                width: 50%;

                img {
                    width: 100%;
                }
            }

            .right-content {
                width: 50%;
                height: 60%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;

                .title {
                    color: rgb(83, 119, 172);
                    font-size: 40px;
                    font-weight: 600;
                    text-align: center;
                }

                .text {
                    font-size: 20px;
                    text-align: center;
                }

                .btn {
                    cursor: pointer;
                    color: white;
                    font-weight: 600;
                    background-color: rgb(83, 119, 172);
                    width: 200px;
                    height: 60px;
                    border: 0;
                    border-radius: 5px;
                    font-size: 20px;
                }
            }
        }
    }

    .bottom-page {
        height: calc(100vh - 50px);

        .bottom-container {
            width: 1345px;
            height: 100%;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            .main-title {
                text-align: center;
                font-size: 30px;
                font-weight: 600;
            }

            .imgGroup {
                display: flex;
                justify-content: space-around;

                .imgContainer {
                    height: 600px;
                    width: 530px;
                    border-radius: 12px;
                    border: 2px solid rgb(219, 233, 234);
                    background-color: white;
                    text-align: center;

                    img {
                        width: 486px;
                        height: 371px;
                    }

                    .title {
                        margin-top: 27px;
                        font-weight: 600;
                        font-size: 23px;
                        line-height: 80px;
                    }

                    .text {
                        font-size: 16px;
                        color: #535353;
                        line-height: 25px;
                    }
                }
            }
        }
    }
}
</style>