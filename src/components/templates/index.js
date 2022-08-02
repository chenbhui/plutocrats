
import textComp from './textComp'
import picComp from './picComp'
import tabList from './tabList'

let obj={
    textComp,
    picComp,
    tabList
}
// info.type--->就是组件的名称
let getComponent = (info, attr, data) => {
    // info.type eg:textComp
    let component =  obj[info.type](attr,data)
    component.info = info
    return component
}

export default getComponent
