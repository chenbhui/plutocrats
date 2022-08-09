<!-- 左边属性导航菜单-->
<!-- 
    一个元素如果要设为可拖拽，必须给它添加一个 draggable 属性。
    另外，在将组件列表中的组件拖拽到画布中，还有两个事件是起到关键作用的：
    dragstart 事件，在拖拽刚开始时触发。它主要用于将拖拽的组件信息传递给画布。
    drop 事件，在拖拽结束时触发。主要用于接收拖拽的组件信息。
 -->
<template>
    <div class="component-list" @dragstart="handleDragStart">
        <div v-for="(item, index) in componentList" :key="index" class="list" draggable :data-index="index">
            <span class="iconfont" :class="item.icon"></span>
        </div>
    </div>
</template>

<script>
import componentList from '@/custom-component/component-list'

export default {
    data() {
        return {
            componentList,
        }
    },
    methods: {
        // 传输数据
        handleDragStart(e) {
            e.dataTransfer.setData('index', e.target.dataset.index);
        },
    },
}
</script>

<style lang="less" scoped>
.component-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;

    .list {
        width: 45%;
        height: 40px;
        border: 1px solid #ddd;
        cursor: grab;
        margin-bottom: 10px;
        text-align: center;
        color: #333;
        padding: 2px 5px;
        display: flex;
        align-items: center;
        justify-content: center;

        &:active {
            cursor: grabbing;
        }

        .iconfont {
            margin-right: 4px;
            font-size: 20px;
        }

        .icon-wenben,
        .icon-tupian {
            font-size: 18px;
        }
    }
}
</style>
