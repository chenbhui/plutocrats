
let obj={

}

// info.type--->就是组件的名称
let getComponent = (info ,attr,data)=>{
    let component =  obj[info.type](attr,data)
    component.info = info
    return component
}

export default getComponent
