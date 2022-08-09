<!--每个组件的基本属性，通用的-->
<!-- 
    遍历组件的 style 对象，将每一个属性遍历出来。
    并且需要根据具体的属性用不同的组件显示出来
    例如颜色属性，需要用颜色选择器显示；数值类的属性需要用 type=number 的 input 组件显示等等。
    为了方便用户修改属性值，使用 v-model 将组件和值绑定在一起。
 -->
<template>
    <el-form>
        <el-form-item v-for="({ key, label }, index) in styleKeys" :key="index" :label="label">
            <el-color-picker 
                v-if="isIncludesColor(key)"
                v-model="curComponent.style[key]" 
                show-alpha
                :predefine="predefineColors"
            ></el-color-picker>
            <el-select 
                v-else-if="selectKey.includes(key)" 
                v-model="curComponent.style[key]">
                <el-option 
                    v-for="item in optionMap[key]" 
                    :key="item.value" 
                    :label="item.label" 
                    :value="item.value"
                ></el-option>
            </el-select>
            <el-input 
                v-else v-model.number="curComponent.style[key]" 
                type="number" 
            />
        </el-form-item>
    </el-form>
</template>

<script>
import { styleData, textAlignOptions, borderStyleOptions, verticalAlignOptions, selectKey, optionMap } from '@/utils/attr'

export default {
    data() {
        return {
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
            optionMap,
            styleData,
            textAlignOptions,
            borderStyleOptions,
            verticalAlignOptions,
            selectKey,
        }
    },
    computed: {
        styleKeys() {
            if (this.curComponent) {
                const curComponentStyleKeys = Object.keys(this.curComponent.style)
                return this.styleData.filter(item => curComponentStyleKeys.includes(item.key))
            }
            return []
        },
        curComponent() {
            return this.$store.state.EditPage.curComponent;
        },
    },
    methods: {
        isIncludesColor(str) {
            return str.toLowerCase().includes('color')
        },
    },
}
</script>
