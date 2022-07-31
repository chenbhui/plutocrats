import Vue from 'vue';
// 统一暴露
const components = [
    'Picture',
    'VText',
    'VButton',
];
components.forEach(key => {
    Vue.component(key, () => import(`@/custom-component/${key}/Component`))
    Vue.component(key + 'Attr', () => import(`@/custom-component/${key}/Attr`))
})