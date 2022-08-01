
import textComp from './textComp'
import picComp from './picComp'
import tabList from './tabList'

let obj = {
    textComp,
    picComp,
    tabList
}

// install是 vue中可供我们开发新的插件及全局注册组件
// install（Vue,option） 第一个参数是vue的构造器，第二个参数是可选的选项对象
// 字符串数组 循环全局注册
function install(Vue){
    Object.keys(obj).forEach(key=>{
         Vue.component(key,obj[key])
    })
}

let API = {
    version:'1.0',
    install
}

export default API
