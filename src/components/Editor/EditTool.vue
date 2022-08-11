<template>
    <div>
        <div class="editTool">
            <label for="input" class="insert" style="margin-right:10px;">插入图片</label>
            <input id="input" type="file" hidden @change="handleFileChange" />
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
                <el-color-picker v-model="canvasStyleData.background" show-alpha :predefine="predefineColors">
                </el-color-picker>
            </div>
        </div>
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
            // let Totaldata = JSON.stringify(this.componentData);
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
            // 1.保存这里要发一次请求，让后台保存数据
            // 转成字符串
            // let Totaldata = JSON.stringify(this.componentData);
            // 2.
            this.$message.success('保存成功');
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

.editTool {
    position: absolute;
    width: 100%;
    top: 0px;
    left: 0;
    padding: 5px 10px;
    white-space: nowrap;
    background: #fff;
    border-bottom: 1px solid #ddd;

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