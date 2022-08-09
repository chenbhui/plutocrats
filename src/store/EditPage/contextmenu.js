/* 菜单 */
import store from '../../store/index';
import toast from '@/utils/toast'
import generateID from '@/utils/generateID'
import { deepCopy } from '@/utils/utils'
import { swap } from '@/utils/utils'
export default {
    state: {
        menuTop: 0, // 右击菜单数据
        menuLeft: 0,
        menuShow: false,
        copyData: null, // 复制粘贴剪切
        isCut: false,
    },
    mutations: {
        // 1. 右击菜单出现隐藏
        showContextMenu(state, { top, left }) {
            state.menuShow = true
            state.menuTop = top
            state.menuLeft = left
        },

        hideContextMenu(state) {
            state.menuShow = false;
        },
        // 2.复制粘贴剪切
        copy(state) {
            if (!state.curComponent) {
                toast('请选择组件');
                return;
            }

            // 如果有剪切的数据，需要先还原
            restorePreCutData(state);
            copyData(state);
            state.isCut = false;
        },

        paste(state, isMouse) {
            if (!state.copyData) {
                toast('请选择组件')
                return
            }

            const data = state.copyData.data;

            if (isMouse) {
                data.style.top = state.menuTop
                data.style.left = state.menuLeft
            } else {
                data.style.top += 10
                data.style.left += 10
            }

            data.id = generateID();
            // Group 的子组件根节点的 id 是通过组件的 id 生成的，必须重新生成 id，否则拆分 Group 的时候获取根节点不正确
            if (data.component === 'Group') {
                data.propValue.forEach(component => {
                    component.id = generateID()
                })
            }
            store.commit('EditPage/addComponent', { component: deepCopy(data) });
            if (state.isCut) {
                state.copyData = null
            }
        },

        cut(state) {
            if (!state.curComponent) {
                toast('请选择组件')
                return
            }

            // 如果重复剪切，需要恢复上一次剪切的数据
            restorePreCutData(state)
            copyData(state)
            console.log("EditPage/store",store);

            store.commit('EditPage/deleteComponent')
            state.isCut = true
        },

        // 3. 层级
        upComponent({ componentData, curComponentIndex }) {
            // 上移图层 index，表示元素在数组中越往后
            if (curComponentIndex < componentData.length - 1) {
                swap(componentData, curComponentIndex, curComponentIndex + 1)
            } else {
                toast('已经到顶了')
            }
        },

        downComponent({ componentData, curComponentIndex }) {
            // 下移图层 index，表示元素在数组中越往前
            if (curComponentIndex > 0) {
                swap(componentData, curComponentIndex, curComponentIndex - 1)
            } else {
                toast('已经到底了')
            }
        },

        topComponent({ componentData, curComponentIndex, curComponent }) {
            // 置顶
            if (curComponentIndex < componentData.length - 1) {
                componentData.splice(curComponentIndex, 1)
                componentData.push(curComponent)
            } else {
                toast('已经到顶了')
            }
        },

        bottomComponent({ componentData, curComponentIndex, curComponent }) {
            // 置底
            if (curComponentIndex > 0) {
                componentData.splice(curComponentIndex, 1)
                componentData.unshift(curComponent)
            } else {
                toast('已经到底了')
            }
        },
    },
}
// 恢复上一次剪切的数据
function restorePreCutData(state) {
    if (state.isCut && state.copyData) {
        const data = deepCopy(state.copyData.data)
        const index = state.copyData.index
        data.id = generateID()
        store.commit('EditPage/addComponent', { component: data, index })
        if (state.curComponentIndex >= index) {
            // 如果当前组件索引大于等于插入索引，需要加一，因为当前组件往后移了一位
            state.curComponentIndex++;
        }
    }
}

function copyData(state) {
    state.copyData = {
        data: deepCopy(state.curComponent),
        index: state.curComponentIndex,
    }
}