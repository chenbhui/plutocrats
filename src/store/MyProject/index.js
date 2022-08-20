import { reqFormWork, updateProject, deleteProject, getByopenid } from '@/api'
const state = {
  // 模板中的信息列表
  // projectList: [],
  //当前模板信息
  curprojectData: [],
  // 该用户模板信息
  userProjectData:[],
}

const mutations = {
  // 项目列表赋值
  // GETPROJECT(state, projectList) {
  //   state.projectList = projectList
  // },
  setCurprojectData(state, curprojectData) {
    state.curprojectData = curprojectData;
  },
  setUserProjectData(state, userProjectData) {
    state.userProjectData = userProjectData;
  }
}

const actions = {
  //获取项目列表信息
  // async getProject({ commit }) {
  //   console.log('action中的getProject被调用了')
  //   let result = await reqFormWork()
  //   if (result.code == 200) {
  //     //改变模板列表信息
  //     commit('GETPROJECT', result.data)
  //   }
  // },
  //获取该用户的项目列表信息
  async getByopenid({ commit }, openid) {
    console.log('action中的 getByopenid被调用了')
    let result = await getByopenid(openid)
    if (result.code == 200) {
      const allData = result.data
      console.log(allData);
      const saveData = allData.filter((item) => {
        return item.publishsign == 0
      })
      console.log(saveData);
      commit('setUserProjectData', saveData)
      console.log("获取该用户的项目列表信息",result.data);
    }
  },


  // 编辑项目
  async updateProject({ commit }, templateid) {
    console.log('action中的updateProject被调用了')
    let result = await updateProject(templateid)
    if (result.code === 200) {
      console.log(result);
      const templatedata = JSON.parse(result.data.templatedata);
      const sourceCode = JSON.parse(result.data.sourcecode);
      console.log("结果sourceCode", sourceCode);
      //改变当前模板信息
      commit('setCurprojectData', result.data)
      localStorage.setItem("canvasData", JSON.stringify(templatedata.canvasData));
      localStorage.setItem("canvasStyle", JSON.stringify(templatedata.canvasStyle));
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
