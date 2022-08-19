<template>
    <div @click="handleClick">
        <component :is="config.component" v-if="config.component.startsWith('SVG')" ref="component" class="component"
            :style="getSVGStyle(config.style)" :prop-value="config.propValue" :element="config" />

        <component :is="config.component" v-else ref="component" class="component" :style="getStyle(config.style)"
            :prop-value="config.propValue" :element="config" />
    </div>
</template>

<script>
import { getStyle, getSVGStyle } from '@/utils/style'
import runAnimation from '@/utils/runAnimation'
import { mixins } from '@/utils/events'

export default {
    mixins: [mixins],
    props: {
        config: {
            type: Object,
            require: true,
            default: () => { },
        },
    },
    mounted() {
        setTimeout(() => {
            runAnimation(this.$refs.component.$el, this.config.animations)
        },100)
    },
    methods: {
        getStyle,
        getSVGStyle,

        handleClick() {
            const events = this.config.events
            Object.keys(events).forEach(event => {
                this[event](events[event])
            })
        },
    },
}
</script>

<style lang="less" scoped>
.component {
    position: absolute;
}
</style>
