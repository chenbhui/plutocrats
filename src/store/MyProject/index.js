import { reqFormWork,updateProject,deleteProject} from '@/api'
const state = {
  // 模板中的信息列表
  projectList: [],
}

const mutations = {
  // 项目列表赋值
  GETPROJECT(state, projectList) {
    console.log('mutations中的GETPROJECT被调用了')
    state.projectList = projectList
  },
}

const actions = {
  //获取项目列表信息
  async getProject({ commit }) {
    console.log('action中的getProject被调用了')
    let result = await reqFormWork()
    if (result.code == 200) {
      //改变模板列表信息
      commit('GETPROJECT', result.data)
    }
  },

  // 编辑项目
  async updateProject({ commit }, templateid) {
    console.log('action中的updateProject被调用了')
    let result = await updateProject(templateid)
    if (result.code === 200) {
      return 'ok'
    }
  },

  // 删除项目
  async deleteProject({ commit }, templateid) {
    console.log('action中的deleteProject被调用了')
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
