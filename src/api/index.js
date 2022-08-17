//API统一管理
import requests from "./request";

// 注册请求
export const reqUserRegister = (data) => requests({
    url: "/user/signIn",
    data,
    method: 'post'
});

// 登录请求
export const reUserLogin = (data) => requests({
    url: "/login",
    // url: `/login?username=${data.username}&password=${data.password}`,
    data,
    method: 'post',
    transformRequest: [function (data) {
        let res = ''
        for (let i in data) {
            res +=encodeURIComponent(i)+'='+encodeURIComponent(data[i])+'&'
        }
        return res;
    }],
    headers: {
        'Content-Type':'application/x-www-form-urlencoded'
    }
});
  
//用户信息
export const reqUserInfo = () => requests({
    url: '/user/getUserInfo',
    method: 'get'
})

//退出登录
export const reqLogout = () => requests({
    url: '/logout',
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

// 保存模板
export const saveTemplate = (data) => requests({
    url: `/savetemplate`,
    data,
    method:'post',
})
// 发布模板
export const releaseTemplate = (data) => requests({
    url: `/releasetemplate`,
    data,
    method:'post'
})