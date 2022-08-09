<template>
    <div class="editPage">
        <!-- 导航栏 -->
        <Toolbar />
        <main>
            <!-- 左侧组件列表 -->
            <section class="left">
                <ComponentList />
            </section>
            <!-- 中间画布 -->
            <!-- drop: drop 事件，在拖拽结束时触发。主要用于接收拖拽的组件信息。-->
            <section class="center">
                <div class="content" @drop="handleDrop" @dragover="handleDragOver" @mousedown="handleMouseDown"
                    @mouseup="deselectCurComponent">
                    <Editor />
                </div>
            </section>
            <!-- 右侧属性列表 -->,
            <section class="right">
                <el-tabs v-model="activeName">
                    <el-tab-pane label="属性" name="attr">
                        <component :is="curComponent.component + 'Attr'" v-if="curComponent" />
                        <p v-else class="placeholder">请选择组件</p>
                    </el-tab-pane>
                    <el-tab-pane label="动画" name="animation">
                        <AnimationList v-if="curComponent" />
                        <p v-else class="placeholder">请选择组件</p>
                    </el-tab-pane>
                    <el-tab-pane label="事件" name="events">
                        <EventList v-if="curComponent" />
                        <p v-else class="placeholder">请选择组件</p>
                    </el-tab-pane>
                </el-tabs>
            </section>
        </main>
    </div>
</template>

<script>
import Editor from '@/components/Editor/index'
import ComponentList from '@/components/ComponentList' // 左侧列表组件
import AnimationList from '@/components/AnimationList' // 右侧动画列表
import EventList from '@/components/EventList' // 右侧事件列表
import componentList from '@/custom-component/component-list' // 左侧列表数据
import Toolbar from '@/components/Toolbar';
import { deepCopy } from '@/utils/utils';
import { mapState } from 'vuex';
import generateID from '@/utils/generateID';
import { listenGlobalKeyDown } from '@/utils/shortcutKey';

export default {
    components: { Editor, ComponentList, AnimationList, EventList, Toolbar},
    data() {
        return {
            activeName: 'attr',
            reSelectAnimateIndex: undefined,
        }
    },
    computed: mapState('EditPage', [
        'componentData',
        'curComponent',
        'isClickComponent',
        'canvasStyleData',
        'editor',
    ]),
    created() {
        this.restore()
        // 全局监听按键事件
        listenGlobalKeyDown()
        // console.log("我真棒");
        // console.log(this.$store.state);
    },
    methods: {
        restore() {
            // 用保存的数据恢复画布
            if (localStorage.getItem('canvasData')) {
                this.$store.commit('EditPage/setComponentData', this.resetID(JSON.parse(localStorage.getItem('canvasData'))))
            }

            if (localStorage.getItem('canvasStyle')) {
                this.$store.commit('EditPage/setCanvasStyle', JSON.parse(localStorage.getItem('canvasStyle')))
            }
        },

        resetID(data) {
            data.forEach(item => {
                item.id = generateID()
                if (item.component === 'Group') {
                    this.resetID(item.propValue)
                }
            })

            return data
        },
        /* 触发 drop 事件时，使用 dataTransfer.getData() 接收传输过来的索引数据，
        然后根据索引找到对应的组件数据，再添加到画布，从而渲染组件。 */
        handleDrop(e) {
            console.log("拖拽元素放置触发");
            e.preventDefault()
            e.stopPropagation()
            const index = e.dataTransfer.getData('index');
            // console.log(e.dataTransfer);
            // console.log(index);//从0开始
            const rectInfo = this.editor.getBoundingClientRect();
            if (index) {
                // console.log("index=", index);//0也能进
                const component = deepCopy(componentList[index]);
                console.log(component);//成功复制
                component.style.top = e.clientY - rectInfo.y;
                component.style.left = e.clientX - rectInfo.x;
                component.id = generateID();
                console.log("component", component);
                this.$store.commit('EditPage/addComponent', { component });
             /*    console.log("梅开二度");
                console.log(this.$store.state);//验证是否成功 */
                this.$store.commit('EditPage/recordSnapshot');
            }
        },

        handleDragOver(e) {
            // console.log("组件被拖进后悬停");
            // 默认不能移动编辑
            e.preventDefault()
            // 视觉效果
            e.dataTransfer.dropEffect = 'copy'
        },

        handleMouseDown(e) {
            // console.log("鼠标按下了");
            e.stopPropagation()
            this.$store.commit('EditPage/setClickComponentStatus', false)
            this.$store.commit('EditPage/setInEditorStatus', true)
        },

        deselectCurComponent(e) {
            if (!this.isClickComponent) {
                this.$store.commit('EditPage/setCurComponent', { component: null, index: null })
            }

            // 0 左击 1 滚轮 2 右击
            if (e.button != 2) {
                this.$store.commit('EditPage/hideContextMenu')
            }
        },
    },
}
</script>

<style lang="less" scoped>
.editPage {
    height: 100vh;
    background: #fff;

    main {
        height: calc(100% - 80px);
        position: relative;

        .left {
            position: absolute;
            height: 100%;
            width: 200px;
            left: 0;
            top: 0;
            padding-top: 10px;
        }

        .right {
            position: absolute;
            height: 100%;
            width: 262px;
            right: 0;
            top: 0;

            .el-select {
                width: 100%;
            }
        }

        .center {
            margin-left: 200px;
            margin-right: 262px;
            background: #f5f5f5;
            height: 100%;
            overflow: auto;
            padding: 20px;

            .content {
                width: 100%;
                height: 100%;
                overflow: auto;
            }
        }
    }

    .placeholder {
        text-align: center;
        color: #333;
    }
}
</style>
