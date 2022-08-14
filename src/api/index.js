//API统一管理
import requests from "./request";

// 注册请求
export const reqUserRegister = (data) => requests({
    // 瞎写的
    url: "/user/register",
    data,
    method: 'post'
});


// 登录请求
export const reUserLogin = (data) => requests({
    // 瞎写的
    url: "/user/Login",
    data,
    method: 'post'
});

//用户信息
export const reqUserInfo = () => requests({
    url: '/user/passport/auth/getUserInfo',
    method: 'get'
})

//退出登录
export const reqLogout = () => requests({
    url: '/user/passport/logout',
    method: 'get'
})

// 模板列表
export const reqFormWork = () => requests({
    url: '/getall',
    method: 'post'
})

// 查看项目
export const updateProject = (templateid) => requests({
    url: `/getone?templateid=${templateid}`,
    method:'post'
})

// 删除项目
export const deleteProject = (templateid) => requests({
    url: `/delete?templateid=${templateid}`,
    method:'post'
})
/*
使用例子
export function name() {
    return requests({
        url:'地址',
        method:'get'
    })
}
*/