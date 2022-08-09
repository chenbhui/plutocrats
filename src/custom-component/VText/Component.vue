<!-- eslint-disable vue/no-v-html -->
<template>
    <div v-if="editMode == 'edit'" class="v-text" @keydown="handleKeydown" @keyup="handleKeyup">
        <!-- tabindex >= 0 使得双击时聚焦该元素 -->
        <!-- 
            paste：粘贴 
        -->
        <div ref="text" :contenteditable="canEdit" :class="{ canEdit }" :tabindex="element.id"
            :style="{ verticalAlign: element.style.verticalAlign }" @dblclick="setEdit" @paste="clearStyle"
            @mousedown="handleMousedown" @blur="handleBlur" @input="handleInput" v-html="localelement.propValue"></div>
    </div>
    <div v-else class="v-text preview">
        <div :style="{ verticalAlign: element.style.verticalAlign }" v-html="localelement.propValue"></div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { keycodes } from '@/utils/shortcutKey.js'

export default {
    props: {
        propValue: {
            type: String,
            require: true,
            default: '',
        },
        element: {
            type: Object,
            default: () => { },
        },
    },
    data() {
        return {
            canEdit: false,
            ctrlKey: 17,
            isCtrlDown: false,
            // 这个子组件接下来希望将其作为一个本地的 prop 数据来使用。在这种情况下，最好定义一个本地的data prop 并将这个本地 prop 当作其初始值：
            localpropValue: this.propValue,
            localelement: this.element,
        }
    },
    computed: {
        ...mapState('EditPage',[
            'editMode',
        ]),
    },
    methods: {
        handleInput(e) {
            this.$emit('input', this.element, e.target.innerHTML)
        },

        handleKeydown(e) {
            // 阻止冒泡，防止触发复制、粘贴组件操作
            this.canEdit && e.stopPropagation()
            if (e.keyCode == this.ctrlKey) {
                this.isCtrlDown = true
            } else if (this.isCtrlDown && this.canEdit && keycodes.includes(e.keyCode)) {
                e.stopPropagation()
            } else if (e.keyCode == 46) { // deleteKey
                e.stopPropagation()
            }
        },

        handleKeyup(e) {
            // 阻止冒泡，防止触发复制、粘贴组件操作
            this.canEdit && e.stopPropagation()
            if (e.keyCode == this.ctrlKey) {
                this.isCtrlDown = false;
            }
        },

        handleMousedown(e) {
            if (this.canEdit) {
                e.stopPropagation();
            }
        },

        clearStyle(e) {
            e.preventDefault()
            // clipboardData：剪切板数据
            const clp = e.clipboardData
            // window.clipboardData可以实现复制与粘贴的操作，它的getData 方法可以实现数据的读取，setData方法可以实现数据的设置
            const text = clp.getData('text/plain') || ''
            if (text !== '') {
                // 允许文字复制
                document.execCommand('insertText', false, text)
            }

            this.$emit('input', this.element, e.target.innerHTML)
        },

        handleBlur(e) {
            this.localelement.propValue = e.target.innerHTML || '&nbsp;';
            const html = e.target.innerHTML;
            if (html !== '') {
                this.localelement.propValue = e.target.innerHTML;
            } else {
                this.localelement.propValue = ''
                this.$nextTick(() => {
                    this.localelement.propValue = '&nbsp;'
                })
            }
            this.canEdit = false
        },

        setEdit() {
            if (this.element.isLock) return;
            this.canEdit = true;
            // 全选
            this.selectText(this.$refs.text);
        },

        selectText(element) {
            const selection = window.getSelection()
            const range = document.createRange()
            range.selectNodeContents(element)
            selection.removeAllRanges()
            selection.addRange(range)
        },
    },
}
</script>

<style lang="less" scoped>
.v-text {
    width: 100%;
    height: 100%;
    display: table;

    div {
        display: table-cell;
        width: 100%;
        height: 100%;
        outline: none;
        word-break: break-all;
        padding: 4px;
    }

    .canEdit {
        cursor: text;
        height: 100%;
    }
}

.preview {
    user-select: none;
}
</style>
