/* 右边：动画、事件、属性 */
import Vue from 'vue'
export default {
    mutations: {
        // 1.动画
        addAnimation({ curComponent }, animation) {
            curComponent.animations.push(animation)
        },

        removeAnimation({ curComponent }, index) {
            curComponent.animations.splice(index, 1)
        },

        alterAnimation({ curComponent }, { index, data = {} }) {
            if (typeof index === 'number') {
                const original = curComponent.animations[index]
                curComponent.animations[index] = { ...original, ...data }
            }
        },
        // 2.事件
        addEvent({ curComponent }, { event, param }) {
            curComponent.events[event] = param
        },

        removeEvent({ curComponent }, event) {
            Vue.delete(curComponent.events, event)
        },
    },
}