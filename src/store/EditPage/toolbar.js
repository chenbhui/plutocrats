import store from '../../store/index'
import { deepCopy } from '@/utils/utils'
export default {
    state: {
        snapshotData: [], // 编辑器快照数据
        snapshotIndex: -1, // 快照索引
    },
    mutations: {
        lock({ curComponent }) {
            curComponent.isLock = true
        },

        unlock({ curComponent }) {
            curComponent.isLock = false
        },
        // 2.快照——撤销
        undo(state) {
            if (state.snapshotIndex >= 0) {
                state.snapshotIndex--
                const componentData = deepCopy(state.snapshotData[state.snapshotIndex]) || []
                if (state.curComponent) {
                    // 如果当前组件不在 componentData 中，则置空
                    const needClean = !componentData.find(component => state.curComponent.id === component.id)

                    if (needClean) {
                        store.commit('EditPage/setCurComponent', {
                            component: null,
                            index: null,
                        })
                    }
                }

                store.commit('EditPage/setComponentData', componentData)
            }
        },

        redo(state) {
            if (state.snapshotIndex < state.snapshotData.length - 1) {
                state.snapshotIndex++
                store.commit('EditPage/setComponentData', deepCopy(state.snapshotData[state.snapshotIndex]))
            }
        },

        recordSnapshot(state) {
            // 添加新的快照
            state.snapshotData[++state.snapshotIndex] = deepCopy(state.componentData);
            // console.log("添加快照：state.snapshotData", state.snapshotData);
            // 在 undo 过程中，添加新的快照时，要将它后面的快照清理掉
            if (state.snapshotIndex < state.snapshotData.length - 1) {
                state.snapshotData = state.snapshotData.slice(0, state.snapshotIndex + 1)
            }
        },
    },
}