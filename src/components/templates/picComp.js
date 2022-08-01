
import getAttrStr from '../../utils/arr'

let handle = (attr,dataStr)=>{
    let attribute =[{
        key:"width",
        name:'宽度',
        value:'100',
        type:'input',
        placeholder:'请输入宽度'
    },{
        key:"height",
        name:'高度',
        value:'40',
        type:'input',
        placeholder:'请输入高度'
    }]
    if(attr){
        attribute = attr
    }

    let data = {filename:'fj01.png'}
    if(dataStr){
        data = JSON.parse(dataStr)
    }
    let template = `<picComp ${getAttrStr(attribute)}  data='${JSON.stringify(data)}'></picComp>`
    return {attribute,data,template}
}

export default handle
