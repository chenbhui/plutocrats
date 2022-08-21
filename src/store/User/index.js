import { reqUserRegister, reUserLogin, reqUserInfo, reqLogout } from "@/api";
const state = {
    userInfo: {}
}

const mutations = {
    //用户信息
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo;
    },

}

const actions = {
    //用户注册
    async reqUserRegister({ commit }, user) {
        let result = await reqUserRegister(user);
        console.log(result);
        if (result.code == 200) {
            if (result.msg == "success") {
                return 'ok';
            }
        } else {
            if (result.code == 500)
            return Promise.reject(new Error(result.data));
        }
    },
    //登录
    async reUserLogin({ commit },user) {
        let result = await reUserLogin(user);
        console.log(result);
        if (result.code == 200 && result.msg == 'success') {
            localStorage.setItem("UserInfo", JSON.stringify(result.data));
            //提交用户信息
            commit("GETUSERINFO", result.data);
            return 'ok';
        } else {
            return Promise.reject(new Error(result.data));
        }
    },
    //获取用户信息
    async reqUserInfo({ commit }) {
        let result = await reqUserInfo()
        if (result.code == 200 && result.msg == "success") {
            //提交用户信息
            commit("GETUSERINFO", result.data);
        } else {
            if (result.code == 500) {
                console.log('未登录', result);
           }
            return Promise.reject(new Error(result.data));
        }
    },
    //退出登录
    async reqLogout({ commit }) {
        let result = await reqLogout()
        if (result.code == 200) {
            commit("GETUSERINFO", {});
            localStorage.removeItem("UserInfo")
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
