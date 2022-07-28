//全局注册

let obj = {

}

function install(Vue){
    Object.keys(obj).forEach(key=>{
         Vue.component(key,obj[key])
    })
}
/* 
let API = {
    version:'1.0',
    install
}

export default API
*/
