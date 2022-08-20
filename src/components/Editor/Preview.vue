<!-- 预览出现的框 -->
<template>
    <div v-show="show" ref="container" class="bg">
        <el-button v-if="!isScreenshot" class="close iconfont icon-guanbi" @click="close"></el-button>
        <el-button v-else class="close iconfont icon-segi-icon-download" @click="htmlToImage"></el-button>
        <div class="canvas-container" ref="sourceCodeOutput">
            <div class="canvas" :style="{
                width: changeStyleWithScale(canvasStyleData.width) + 'px',
                height: changeStyleWithScale(canvasStyleData.height) + 'px',
                background: canvasStyleData.background,
            }">
                <ComponentWrapper v-for="(item, index) in componentData" :key="index" :config="item" />
            </div>
        </div>
    </div>
</template>

<script>
import { getStyle } from '@/utils/style'
import { mapState } from 'vuex'
import ComponentWrapper from './ComponentWrapper'
import { changeStyleWithScale } from '@/utils/translate'
import { toPng } from 'html-to-image'

export default {
    components: { ComponentWrapper },
    model: {
        prop: 'show',
        event: 'change',
    },
    props: {
        show: {
            type: Boolean,
            default: false,
        },
        isScreenshot: {
            type: Boolean,
            default: false,
        },
    },
    computed: mapState('EditPage', [
        'componentData',
        'canvasStyleData',
        'sourceCodeOutput'
    ]),
    mounted() {
        this.$store.commit('EditPage/setSourceCodeOutput', this.$refs.sourceCodeOutput);
    },
    methods: {
        changeStyleWithScale,

        getStyle,

        close() {
            this.$emit('change', false)
        },

        htmlToImage() {
            toPng(this.$refs.container.querySelector('.canvas'))
                .then(dataUrl => {
                    const a = document.createElement('a')
                    a.setAttribute('download', 'screenshot')
                    a.href = dataUrl
                    a.click()
                })
                .catch(error => {
                    console.error('oops, something went wrong!', error)
                })
                .finally(this.close)
        },
    },
}
</script>

<style lang="less" scoped>








.bg {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: fixed;
    background:#e2f4f7;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
    padding: 20px;

    .canvas-container {
        width: calc(100% - 40px);
        height: calc(100% - 120px);
        overflow: auto;

        .canvas {
            background: #fff;
            position: relative;
            margin: auto;
        }
    }

    .close {
        position: absolute;
        right: 13px;
        top: 20px;
        background:transparent;
        border: none;
        color: #5377ac;
    }
    .iconfont::before{
        font-size: 42px;
    }
    .canvas-container::-webkit-scrollbar {
        /*滚动条整体样式*/
        width: 0px;
        /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
    }
    
    .canvas-container::-webkit-scrollbar-thumb {
        /*滚动条里面小方块*/
        border-radius: 10px;
        box-shadow: inset 0 0 5px rgb(0, 0, 0, .2);
        background: rgb(238, 232, 255);
    }
    
    .canvas-container::-webkit-scrollbar-track {
        /*滚动条里面轨道*/
        box-shadow: inset 0 0 5px rgb(238, 232, 255);
        border-radius: 10px;
        background: #ededed;
    }
}
</style>
