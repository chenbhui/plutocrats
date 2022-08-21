import {updateProject, deleteProject, getByopenid } from '@/api'
const state = {
  // 模板中的信息列表
  // projectList: [],
  //当前模板信息
  curprojectData: [],
  // 该用户模板信息
  userProjectData:[],
}

const mutations = {
  setCurprojectData(state, curprojectData) {
    state.curprojectData = curprojectData;
  },
  setUserProjectData(state, userProjectData) {
    state.userProjectData = userProjectData;
  }
}

const actions = {
  //获取该用户的项目列表信息
  async getByopenid({ commit }, openid) {
    let result = await getByopenid(openid)
    if (result.code == 200) {
      const allData = result.data
      const saveData = allData.filter((item) => {
        return item.publishsign == 0
      })
      commit('setUserProjectData', saveData)
    }
  },


  // 编辑项目
  async updateProject({ commit }, templateid) {
    let result = await updateProject(templateid)
    if (result.code === 200) {
      console.log(result);
      const templatedata = JSON.parse(result.data.templatedata);
      //改变当前模板信息
      commit('setCurprojectData', result.data)
      localStorage.setItem("canvasData", JSON.stringify(templatedata.canvasData));
      localStorage.setItem("canvasStyle", JSON.stringify(templatedata.canvasStyle));
      return 'ok'
    }
  },

  // 删除项目
  async deleteProject({ commit }, templateid) {
    let result = await deleteProject(templateid)
    if (result.code === 200) {
      return 'ok'
    }
  }
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
