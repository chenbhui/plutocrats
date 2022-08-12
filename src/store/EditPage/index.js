import Vue from 'vue'
import attr from './attr'
import compose from './compose'
import contextmenu from './contextmenu'
import toolbar from './toolbar'

const state = {
    ...attr.state,
    ...compose.state,
    ...contextmenu.state,
    ...toolbar.state,
    editMode: 'edit', // 编辑器模式 edit preview
    canvasStyleData: {
        // 页面全局数据
        width: 1200,
        height: 740,
        scale: 100,
        background: '#fff',
    },
    isInEdiotr: false, // 是否在编辑器中，用于判断复制、粘贴组件时是否生效，如果在编辑器外，则无视这些操作
    componentData: [], // 画布组件数据
    curComponent: null,
    curComponentIndex: null,
    // 点击画布时是否点中组件，主要用于取消选中组件用。
    // 如果没点中组件，并且在画布空白处弹起鼠标，则取消当前组件的选中状态
    isClickComponent: false,
}

const mutations = {
    ...attr.mutations,
    ...compose.mutations,
    ...contextmenu.mutations,
    ...toolbar.mutations,

    setClickComponentStatus(state, status) {
        state.isClickComponent = status
    },

    setEditMode(state, mode) {
        state.editMode = mode
    },

    setInEditorStatus(state, status) {
        state.isInEdiotr = status
    },

    setCanvasStyle(state, style) {
        state.canvasStyleData = style
    },

    setCurComponent(state, {component, index}) {
        state.curComponent = component
        state.curComponentIndex = index
    },


    setShapeStyle({curComponent}, {top, left, width, height, rotate}) {
        if (top) curComponent.style.top = Math.round(top)
        if (left) curComponent.style.left = Math.round(left)
        if (width) curComponent.style.width = Math.round(width)
        if (height) curComponent.style.height = Math.round(height)
        if (rotate) curComponent.style.rotate = Math.round(rotate)
        console.log('11')
    },

    setShapeStyle({curComponent}, {top, left, width, height, rotate}) {
        if (top) curComponent.style.top = Math.round(top)
        if (left) curComponent.style.left = Math.round(left)
        if (width) curComponent.style.width = Math.round(width)
        if (height) curComponent.style.height = Math.round(height)
        if (rotate) curComponent.style.rotate = Math.round(rotate)
        let cWidth = state.canvasStyleData.width
        let cHeight = state.canvasStyleData.height
        //   逻辑增加
        if (left < 0) {
            curComponent.style.left = 0
        }
        if (top < 0) {
            curComponent.style.top = 0
        }
        if (left + width > state.canvasStyleData.width * state.canvasStyleData.scale * 0.01) {
            state.canvasStyleData.width = (curComponent.style.left + width) / (state.canvasStyleData.scale * 0.01)
            if (state.canvasStyleData.width <= cWidth) {
                state.canvasStyleData.width = cWidth
            }
        }
        if (top + height > state.canvasStyleData.height * state.canvasStyleData.scale * 0.01) {
            state.canvasStyleData.height = (curComponent.style.top + height) / (state.canvasStyleData.scale * 0.01)
            if (state.canvasStyleData.height <= cHeight) {
                state.canvasStyleData.height = cHeight
            }
        }
    },


    setShapeSingleStyle({curComponent}, {key, value}) {
        curComponent.style[key] = value
    },

    setComponentData(state, componentData = []) {
        Vue.set(state, 'componentData', componentData)
    },

    addComponent(state, {component, index}) {
        if (index !== undefined) {
            state.componentData.splice(index, 0, component)
        } else {
            // console.log("component进来了");
            state.componentData.push(component)
            // console.log(state.componentData);
        }
    },

    deleteComponent(state, index) {
        if (index === undefined) {
            index = state.curComponentIndex
        }

        if (index == state.curComponentIndex) {
            state.curComponentIndex = null
            state.curComponent = null
        }

        if (/\d/.test(index)) {
            state.componentData.splice(index, 1)
        }
    },
}

const actions = {}

const getters = {}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}
