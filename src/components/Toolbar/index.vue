<!-- 上边导航栏菜单 -->
<template>
    <div>
        <!-- 上边 -->
        <div class="wrapper">
            <h1>lowCode</h1>
            <div class="icon">
                <span class="iconfont icon-chexiao"></span>
                <i class="iconfont icon-chexiaoyou"></i>
            </div>
            <div class="btn-box" style="margin-right: 40px">
                <el-button type="primary" icon="el-icon-video-play" size="small">预览</el-button>
                <el-button type="primary" icon="el-icon-circle-plus-outline" size="small">保存</el-button>
                <el-button type="primary" icon="el-icon-link" size="small">发布</el-button>

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
        <!-- 二级导航 -->
        <div class="toolbar">
            <el-button @click="undo">撤消</el-button>
            <el-button @click="redo">重做</el-button>
            <label for="input" class="insert">插入图片</label>
            <input id="input" type="file" hidden @change="handleFileChange" />
            <el-button style="margin-left: 10px;" @click="preview(false)">预览</el-button>
            <el-button @click="save">保存</el-button>
            <el-button @click="clearCanvas">清空画布</el-button>
            <el-button :disabled="!areaData.components.length" @click="compose">组合</el-button>
            <el-button :disabled="!curComponent || curComponent.isLock || curComponent.component != 'Group'"
                @click="decompose">
                拆分
            </el-button>

            <el-button :disabled="!curComponent || curComponent.isLock" @click="lock">锁定</el-button>
            <el-button :disabled="!curComponent || !curComponent.isLock" @click="unlock">解锁</el-button>
            <el-button @click="preview(true)">截图</el-button>

            <div class="canvas-config">
                <span>画布大小</span>
                <input v-model="canvasStyleData.width">
                <span>*</span>
                <input v-model="canvasStyleData.height">
            </div>
            <div class="canvas-config">
                <span>画布比例</span>
                <input v-model="scale" @input="handleScaleChange"> %
            </div>
            <div class="canvas-config canvas-bg">
                <span>画布背景色</span>
                <!-- <el-color-picker v-model="canvasStyleData.background"></el-color-picker> -->
                <el-color-picker v-model="canvasStyleData.background" show-alpha :predefine="predefineColors">
                </el-color-picker>
            </div>
        </div>
        <!-- 预览 -->
        <Preview v-model="isShowPreview" :is-screenshot="isScreenshot" @change="handlePreviewChange" />
    </div>
</template>

<script>
import generateID from '@/utils/generateID'
import toast from '@/utils/toast'
import { mapState } from 'vuex'
import Preview from '@/components/Editor/Preview'
import { commonStyle, commonAttr } from '@/custom-component/component-list'
import eventBus from '@/utils/eventBus'
import { deepCopy, $ } from '@/utils/utils'
import { divide, multiply } from 'mathjs'

export default {
    components: { Preview },
    data() {
        return {
            theme: 'dark',
            predefineColors: [
                '#ff4500',
                '#ff8c00',
                '#ffd700',
                '#90ee90',
                '#00ced1',
                '#1e90ff',
                '#c71585',
                'rgba(255, 69, 0, 0.68)',
                'rgb(255, 120, 0)',
                'hsv(51, 100, 98)',
                'hsva(120, 40, 94, 0.5)',
                'hsl(181, 100%, 37%)',
                'hsla(209, 100%, 56%, 0.73)',
                '#c7158577'
            ],
            isShowPreview: false,
            needToChange: [
                'top',
                'left',
                'width',
                'height',
                'fontSize',
            ],
            scale: '100%',
            timer: null,
            isScreenshot: false,
        }
    },
    computed: mapState('EditPage',[
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
        format(value) {
            return multiply(value, divide(parseFloat(this.scale), 100))
        },

        getOriginStyle(value) {
            return divide(value, divide(parseFloat(this.canvasStyleData.scale), 100))
        },

        handleScaleChange() {
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                // 画布比例设一个最小值，不能为 0
                // eslint-disable-next-line no-bitwise
                this.scale = (~~this.scale) || 1
                const componentData = deepCopy(this.componentData)
                componentData.forEach(component => {
                    Object.keys(component.style).forEach(key => {
                        if (this.needToChange.includes(key)) {
                            // 根据原来的比例获取样式原来的尺寸
                            // 再用原来的尺寸 * 现在的比例得出新的尺寸
                            component.style[key] = this.format(this.getOriginStyle(component.style[key]))
                        }
                    })
                })

                this.$store.commit('EditPage/setComponentData', componentData)
                // 更新画布数组后，需要重新设置当前组件，否则在改变比例后，直接拖动圆点改变组件大小不会生效 https://github.com/woai3c/visual-drag-demo/issues/74
                this.$store.commit('EditPage/setCurComponent', { component: componentData[this.curComponentIndex], index: this.curComponentIndex })
                this.$store.commit('EditPage/setCanvasStyle', {
                    ...this.canvasStyleData,
                    scale: this.scale,
                })
            }, 1000)
        },

        lock() {
            this.$store.commit('EditPage/lock')
        },

        unlock() {
            this.$store.commit('EditPage/unlock')
        },

        compose() {
            this.$store.commit('EditPage/compose')
            this.$store.commit('EditPage/recordSnapshot')
        },

        decompose() {
            this.$store.commit('EditPage/decompose')
            this.$store.commit('EditPage/recordSnapshot')
        },

        undo() {
            this.$store.commit('EditPage/undo')
        },

        redo() {
            this.$store.commit('EditPage/redo')
        },

        handleFileChange(e) {
            const file = e.target.files[0]
            if (!file.type.includes('image')) {
                toast('只能插入图片')
                return
            }

            const reader = new FileReader()
            reader.onload = (res) => {
                const fileResult = res.target.result
                const img = new Image()
                img.onload = () => {
                    this.$store.commit('EditPage/addComponent', {
                        component: {
                            ...commonAttr,
                            id: generateID(),
                            component: 'Picture',
                            label: '图片',
                            icon: '',
                            propValue: {
                                url: fileResult,
                                flip: {
                                    horizontal: false,
                                    vertical: false,
                                },
                            },
                            style: {
                                ...commonStyle,
                                top: 0,
                                left: 0,
                                width: img.width,
                                height: img.height,
                            },
                        },
                    })

                    this.$store.commit('EditPage/recordSnapshot')

                    // 修复重复上传同一文件，@change 不触发的问题
                    $('#input').setAttribute('type', 'text')
                    $('#input').setAttribute('type', 'file')
                }

                img.src = fileResult
            }

            reader.readAsDataURL(file)
        },

        preview(isScreenshot) {
            this.isScreenshot = isScreenshot
            this.isShowPreview = true
            this.$store.commit('EditPage/setEditMode', 'preview')
        },

        save() {
            localStorage.setItem('canvasData', JSON.stringify(this.componentData))
            localStorage.setItem('canvasStyle', JSON.stringify(this.canvasStyleData))
            this.$message.success('保存成功')
        },

        clearCanvas() {
            this.$store.commit('EditPage/setCurComponent', { component: null, index: null })
            this.$store.commit('EditPage/setComponentData', [])
            this.$store.commit('EditPage/recordSnapshot')
        },

        handlePreviewChange() {
            this.$store.commit('EditPage/setEditMode', 'edit')
        },
    },
}
</script>

<style lang="less" scoped>

.wrapper {
    position:relative;
    background: #ffffff;
    height: 80px;
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
        //margin-right: -40%;
        width: 200px;
        justify-content: space-around;

        .el-button--primary {
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
        cursor: pointer;

        .icon-chexiao,
        .icon-chexiaoyou {
            color: #c9c9c9;
            font-size: 25px;

        }

        .icon-chexiaoyou {
            margin-left: 20px;
        }

    }

}
.toolbar {
    position:absolute;
    display: none;
    width:100%;
    top:60px;
    left:0;
    padding: 15px 10px;
    white-space: nowrap;
    overflow-x: auto;
    background: #fff;
    border-bottom: 1px solid #ddd;
    z-index:999;

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
