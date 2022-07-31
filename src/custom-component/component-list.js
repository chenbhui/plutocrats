// 公共样式
export const commonStyle = {
    rotate: 0,
    opacity: 1,
}
// 组件公共属性
export const commonAttr = {
    // 动画效果
    animation: [],
    // 事件效果（跳转，alert）
    events: {},
    // 是否锁定组件，默认没有
    isLock: false,
}
// 编辑器左侧组件列表
const list = [
    // 文本
    {
        //组件名，需要提前注册到Vue
        component: 'VText',
        //左测组件列表中显示的名字
        label: '文字',
        //组件初始值
        propValue: "双击编辑文字",
        // 左侧列表中显示的icon
        icon: 'wenben',
        // 组件样式
        style: {
            width: 200,
            height: 30,
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: '',
            color: '',
        }
    },
    // 按钮
    {
        component: 'VButton',
        label: '按钮',
        propValue: "按钮",
        icon: 'button',
        style: {
            width: 100,
            height: 45,
            borderWidth: 1,
            borderColor: '',
            borderRadius: '',
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: '',
            color: '',
            backgroundColor: '',
        }
    },
    // 图片
    {
        component: 'Picture',
        label: '图片',
        propValue: {
            url: require('@/assets/images/home.jpg'),
            // 翻转效果
            flip: {
                // 水平
                horizontal: false,
                // 垂直
                vertical: false,
            }
        },
        icon: '图片',
        style: {
            width: 100,
            height: 45,
            borderWidth: 1,
            borderColor: '',
            borderRadius: '',
        }
    }
];
for (let i = 0, len = list.length; i < len; i++) {
    const item = list[i];
    // 组件样式=item的样式+公共样式
    item.style = { ...commonStyle, ...item.style }
    // list[i]=公共属性+组件属性（让组件具有事件、动画等）
    list[i] = { ...commonAttr, ...item }
}

export default list;