<!-- 上边导航栏菜单 -->
<template>
    <div>
        <!-- 上边 -->
        <div class="wrapper">
            <h1>lowCode</h1>
            <div class="icon">
                <span class="iconfont icon-chexiao" @click="undo"></span>
                <span class="iconfont icon-chexiaoyou" @click="redo"></span>
            </div>
            <div class="btn-box" style="margin-right: 40px">
                <div>
                    <el-button type="primary" icon="el-icon-video-play" size="small" @click="preview(false)">预览
                    </el-button>
                </div>
                <div>
                    <el-button type="primary" icon="el-icon-circle-plus-outline" size="small" @click="save">保存
                    </el-button>
                </div>
                <div class="public-release-box">
                    <el-button type="primary" icon="el-icon-link" size="small" @click="PublicRelease()">发布</el-button>
                    <!-- 生成发布链接 -->
                    <div class="public-release-tip" v-show="showPublicReleaseLink">
                        <div class="tip-head">Public Release Project</div>
                        <p class="copyLink iconfont icon-fuzhi" v-clipboard:copy="linkContent"
                            v-clipboard:success="onCopy" v-clipboard:error="onError">
                            点此复制代码
                        </p>
                        <p class="linkdata" ref="linkdata">
                            {{ linkContent }}}
                        </p>
                    </div>
                </div>
            </div>
            <div style="margin-right: 30px;cursor: pointer">
                <i class="el-icon-search"></i>
                <i class="el-icon-plus inDistance"></i>
                <i class="el-icon-s-opportunity inDistance"></i>
                <i class="el-icon-s-claim inDistance"></i>
            </div>
            <div style="width: 40px">
                <el-avatar> user</el-avatar>
            </div>
        </div>
        <!-- 预览 -->
        <Preview v-model="isShowPreview" :is-screenshot="isScreenshot" @change="handlePreviewChange" />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Preview from '@/components/Editor/Preview'
import eventBus from '@/utils/eventBus'
import { divide, multiply } from 'mathjs'

export default {
    components: { Preview },
    data() {
        return {
            theme: 'dark',
            isShowPreview: false,
            scale: '100%',
            timer: null,
            isScreenshot: false,
            showPublicReleaseLink: false,
            linkContent: 'http://localhost:8080/editpage',
        }
    },
    computed: mapState('EditPage', [
        'componentData',
        'canvasStyleData',
        'areaData',
        'curComponent',
        'curComponentIndex',
    ]),
    created() {
        eventBus.$on('preview', this.preview)
        eventBus.$on('save', this.save)
        eventBus.$on('clearCanvas', this.clearCanvas)
        this.scale = this.canvasStyleData.scale
    },

    methods: {
        // 发布
        PublicRelease() {
            // 1.发布前得先保存，否则提示
            // 2.询问是否确认发布，是的话发送请求并生成链接可以复制
            alert("是否确定发布？");
            console.log("获得componentdata");
            console.log(this.componentData);
            //请求数据
            let Totaldata = JSON.stringify(this.componentData);
            console.log(Totaldata);
            this.showPublicReleaseLink = true;
            this.$message.success('发布成功');
        },
        onCopy() {
            this.showPublicReleaseLink = false;
            this.$message.success('复制成功');
        },
        onError() {
            this.$message.error('复制失败');
        },
        format(value) {
            return multiply(value, divide(parseFloat(this.scale), 100))
        },

        undo() {
            this.$store.commit('EditPage/undo')
        },

        redo() {
            this.$store.commit('EditPage/redo')
        },
        preview(isScreenshot) {
            this.isScreenshot = isScreenshot
            this.isShowPreview = true
            this.$store.commit('EditPage/setEditMode', 'preview')
        },

        save() {
            localStorage.setItem('canvasData', JSON.stringify(this.componentData))
            localStorage.setItem('canvasStyle', JSON.stringify(this.canvasStyleData))
            // 1.保存这里要发一次请求，让后台保存数据
            // 转成字符串
            // let Totaldata = JSON.stringify(this.componentData);
            // 2.
            this.$message.success('保存成功');
        },

        handlePreviewChange() {
            this.$store.commit('EditPage/setEditMode', 'edit')
        },
    },
}
</script>

<style lang="less" scoped>

.wrapper {
    position: relative;
    background: #ffffff;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    border-bottom: 1px solid #ccc;

    h1 {
        font-size: 25px;
        position: relative;
        flex: 2;
        color: black
    }

    h1:after,
    h1:before {
        content: '';
        background: #fff;
        position: absolute;
        z-index: -1;
        left: 10px;
        right: 10px;
        top: 50%;
        bottom: 0px;
        border-radius: 100px/10px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
    }

    .btn-box {
        display: flex;
        width: 260px;
        justify-content: space-around;

        .public-release-box {
            position: relative;

            .public-release-tip {
                position: absolute;
                top: 50px;
                right: 0;
                width: 440px;
                height: 165px;
                padding: 20px;
                background: #fcfcfc;
                border-radius: 5px;
                border: 1px solid #5176ab;
                z-index: 99999;

                .tip-head {
                    position: relative;
                    font-size: 21px;
                    margin-bottom: 15px;

                    &::after {
                        content: "PRO+";
                        margin-left: 15px;
                        padding: 0px 7px;
                        text-align: center;
                        font-size: 17px;
                        border-radius: 7px;
                        background: #5176ab;
                        color: #fff;
                        font-weight: bold;
                    }
                }

                .copyLink {
                    color: red;
                    margin-bottom: 24px;
                    font-size: 13px;
                    cursor: pointer;

                    &::before {
                        font-size: 16px;
                        margin-right: 4px;
                    }
                }

                .linkdata {
                    height: 45px;
                    line-height: 45px;
                    background: #fff;
                    border-radius: 5px;
                    padding-left: 15px;
                    color: rgba(0, 0, 0, .7);
                }
            }
        }

        div .el-button--primary {
            background: #5176ab;
        }
    }

    .el-icon-arrow-left,
    .el-icon-arrow-right,
    .el-icon-search,
    .el-icon-plus,
    .el-icon-s-opportunity,
    .el-icon-s-claim {
        font-size: 25px;
        color: #4e5156;
    }

    .inDistance {
        margin-left: 10px;
    }

    .icon {
        flex: 1;

        .icon-chexiao,
        .icon-chexiaoyou {
            color: #c9c9c9;
            font-size: 25px;
            cursor: pointer;

            &:hover {
                color: #5176ab;
            }
        }

        .icon-chexiaoyou {
            margin-left: 20px;
        }

    }

}
.toolbar {
    position: absolute;
    width: 100%;
    top: 60px;
    left: 0;
    padding: 15px 10px;
    white-space: nowrap;
    overflow-x: auto;
    background: #fff;
    border-bottom: 1px solid #ddd;
    z-index: 999;

    .canvas-config {
        display: inline-block;
        margin-left: 10px;
        font-size: 14px;
        color: #606266;

        input {
            width: 50px;
            margin-left: 4px;
            outline: none;
            padding: 0 5px;
            border: 1px solid #ddd;
            color: #606266;
        }

        span {
            margin-left: 10px;
        }
    }

    .insert {
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #dcdfe6;
        color: #606266;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: 0;
        margin: 0;
        transition: .1s;
        font-weight: 500;
        padding: 9px 15px;
        font-size: 12px;
        border-radius: 3px;
        margin-left: 10px;

        &:active {
            color: #3a8ee6;
            border-color: #3a8ee6;
            outline: 0;
        }

        &:hover {
            background-color: #ecf5ff;
            color: #3a8ee6;
        }
    }

    .canvas-bg {
        display: inline-flex;
        align-items: center;

        span {
            margin-right: 4px;
        }
    }
}
</style>
