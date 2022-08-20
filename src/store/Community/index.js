import { reqFormWork, clickLike } from '@/api'
const state = {
  // 取色盘颜色
  color: '#9ce5f4',
  // 模板中的信息列表
  formWorkList: [],
}

const mutations = {
  // 模板列表赋值
  GETFORMWORK(state, formWorkList) {
    console.log('mutations中的GETFORMWORK被调用了')
    state.formWorkList = formWorkList
    console.log('formWorkList', formWorkList)
  },

  // 改变颜色
  CHANGECOLOR(state, color) {
    console.log('mutations中的CHANGECOLOR被调用了')
    state.color = color
  },

  // 点赞
  ADDLIKES(state, index) {
    // console.log(value);
    console.log('mutations中的ADDLIKES被调用了')
    state.formWorkList[index].likenum += 1
  },

  // 取消点赞
  // SUBLIKES(state, index) {
  //   console.log('mutations中的SUBLIKES被调用了')
  //   state.formWorkList[index].likenum -= 1
  // },

  // 点击浏览量增加
  // ADDBROWSES(state, index) {
  //   console.log('mutations中的ADDBROWSES被调用了')
  //   state.formWorkList[index].publish_sign += 1
  // },
}

const actions = {
  //获取模板列表信息
  async getFormWork({ commit }) {
    console.log('action中的getFormWork被调用了')
    let result = await reqFormWork()
    if (result.code == 200) {
      //改变模板列表信息
      commit('GETFORMWORK', result.data)
    }
  },

  // 改变颜色
  changeColor({ commit }, e) {
    console.log('action中的changeColor被调用了')
    var txtColor = e.target.value
    commit('CHANGECOLOR', txtColor)
  },

  // 点赞&取消点赞
  async changeLikes({ commit }, { $event, index }) {
    console.log('action中的changeLikes被调用了')
    if ($event.target.className === 'iconfont icon-xiai') {
      $event.target.className = 'iconfont icon-xiai red'
      let data = {
        templateid: state.formWorkList[index].templateid,
      }
      await clickLike(data)
      commit('ADDLIKES', index)
      // if (result.code === 200) {
      //   return 'ok'
      // }
      // }
      // else {
    //   $event.target.className = 'iconfont icon-xiai'
    //   commit('SUBLIKES', index)
     }
  },
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
