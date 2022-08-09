// 公共样式
export const commonStyle = {
    rotate: 0,
    opacity: 1,
}

export const commonAttr = {
    animations: [],
    events: {},
    groupStyle: {}, // 当一个组件成为 Group 的子组件时使用
    isLock: false, // 是否锁定组件
}

// 编辑器左侧组件列表
const list = [
    {
        component: 'AnchorPoint',
        label: '锚点',
        propValue: '点击跳转',
        icon: 'icon-lianjie',
        style: {
            width: 200,
            height: 28,
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: '',
            color: '',
        },
    },
    {
        component: 'VText',
        label: '文字',
        propValue: '双击编辑文字',
        icon: 'icon-wenzi',
        style: {
            width: 200,
            height: 28,
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: '',
            color: '',
        },
    },
    {
        component: 'VButton',
        label: '按钮',
        propValue: '按钮',
        icon: 'icon-anniuzu',
        style: {
            width: 100,
            height: 34,
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
        },
    },
    {
        component: 'Picture',
        label: '图片',
        icon: 'icon-charutupian',
        propValue: {
            url: require('@/assets/images/home.jpg'),
            flip: {
                horizontal: false,
                vertical: false,
            },
        },
        style: {
            width: 300,
            height: 200,
            borderRadius: '',
        },
    },
    {
        component: 'Video',
        label: '视频',
        icon: 'icon-shipinbofang',
        propValue: {
            url: require('@/assets/video/cutePKQ.mp4'),
            flip: {
                horizontal: false,
                vertical: false,
            },
        },
        style: {
            width: 300,
            height: 200,
            borderRadius: '',
        },
    },
    {
        component: 'RectShape',
        label: '矩形',
        propValue: '&nbsp;',
        icon: 'icon-juxing',
        style: {
            width: 200,
            height: 200,
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: 'center',
            color: '',
            borderColor: '#000',
            borderWidth: 1,
            backgroundColor: '',
            borderStyle: 'solid',
            borderRadius: '',
            verticalAlign: 'middle',
        },
    },
    {
        component: 'LineShape',
        label: '直线',
        propValue: '',
        icon: 'icon-straight',
        style: {
            width: 200,
            height: 2,
            backgroundColor: '#000',
        },
    },
    {
        component: 'CircleShape',
        label: '圆形',
        propValue: '&nbsp;',
        icon: 'icon-xingzhuang-tuoyuanxing',
        style: {
            width: 200,
            height: 200,
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: 'center',
            color: '',
            borderColor: '#000',
            borderWidth: 1,
            backgroundColor: '',
            borderStyle: 'solid',
            borderRadius: '',
            verticalAlign: 'middle',
        },
    },
    {
        component: 'SVGStar',
        label: '星形',
        icon: 'icon-xingzhuang-xingxing',
        propValue: '',
        style: {
            width: 80,
            height: 80,
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: 'center',
            color: '',
            borderColor: '#000',
            backgroundColor: 'rgba(255, 255, 255, 1)',
        },
    },
    {
        component: 'SVGTriangle',
        label: '三角形',
        icon: 'icon-sanjiaoxing',
        propValue: '',
        style: {
            width: 80,
            height: 80,
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: 'center',
            color: '',
            borderColor: '#000',
            backgroundColor: 'rgba(255, 255, 255, 1)',
        },
    },
]

for (let i = 0, len = list.length; i < len; i++) {
    const item = list[i]
    item.style = { ...commonStyle, ...item.style }
    list[i] = { ...commonAttr, ...item }
}

export default list
