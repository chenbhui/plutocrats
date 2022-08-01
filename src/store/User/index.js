//注册模块
import { reqUserRegister, reUserLogin, reqUserInfo, reqLogout } from "@/api";
import { setToken, getToken, removeToken } from '@/utils/token'

const state = {
    token: getToken(),
    userInfo: {}
}

const mutations = {
    //token
    USERLOGIN(state, token) {
        state.token = token;
    },
    //用户信息
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo
    },
    //清除本地数据
    CLEAR(state) {
        //把仓库中相关用户信息清空
        state.token = ''
        state.userInfo = {}
        //本地存储数据清空
        removeToken()
    }

}

const actions = {
    //用户注册
    async reqUserRegister({ commit }, user) {
        console.log(commit);
        let result = await reqUserRegister(user);
        if (result.code == 200) {
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    //登录
    async userLogin({ commit }, data) {
        console.log(commit);
        let result = await reUserLogin(data);
        //这里看后台有没有带token,将来通过带token找服务器要用户信息进行展示
        if (result.code == 200) {
            //用户已经登录成功且获取到token
            commit("USERLOGIN", result.data.token)
            //持久化存储token
            setToken(result.data.token) //token本身就是字符串这里不用转了
            return 'ok'
        } else {
            return Promise.reject(new Error("faile"))
        }
    },
    //获取用户信息
    async getUserInfo({ commit }) {
        let result = await reqUserInfo()
        // console.log(result)
        if (result.code == 200) {
            //提交用户信息
            commit("GETUSERINFO", result.data);
        }
    },
    //退出登录
    async userLogout({ commit }) {
        //只是向服务器发起一次请求,通知服务器清除token
        let result = await reqLogout()
        //action里面不能操作state,需要提交mutation修改state
        if (result.code == 200) {
            commit("CLEAR")
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    }
}

const getters = {

}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
