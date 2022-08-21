import { reqFormWork, clickLike } from '@/api'
const state = {
  // 取色盘颜色
  color: '#9ce5f4',
  // 模板中的信息列表
  formWorkList: [],
  // 赞的颜色
  colorList:[]
}

const mutations = {
  // 模板列表赋值
  GETFORMWORK(state, formWorkList) {
    state.formWorkList = formWorkList
  },

  // 改变颜色
  CHANGECOLOR(state, color) {
    state.color = color
  },

  // 点赞
  ADDLIKES(state, index) {
    state.formWorkList[index].likenum += 1
    state.colorList.push(index)
  },


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
    var txtColor = e.target.value
    commit('CHANGECOLOR', txtColor)
  },

  // 点赞&取消点赞
  async changeLikes({ commit }, { $event, index }) {
    if ($event.target.className === 'iconfont icon-xiai') {
      $event.target.className = 'iconfont icon-xiai red'
      let data = {
        templateid: state.formWorkList[index].templateid,
      }
      await clickLike(data)
      commit('ADDLIKES', index)
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
