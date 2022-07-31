const state = {
  // 取色盘颜色
  color: '#9ce5f4',
  // 模板中的信息列表
  formWorkList: [
    {
      id: 1,
      name: 'Nantha Kumar',
      likes: '10',
      likesColor: '#9e9ea7',
      browses: '60',
      // 之后获取到渲染
      // formWorkImg: '',
      // authorImg: ''

    },
    {
      id: 2,
      name: 'Kumar',
      likes: '66',
      likesColor: '#9e9ea7',
      browses: '20',
    },
    {
      id: 3,
      name: 'Nantha',
      likes: '88',
      likesColor: '#9e9ea7',
      browses: '30',
    },
    {
      id: 4,
      name: 'Bob',
      likes: '77',
      likesColor: '#9e9ea7',
      browses: '70',
    },
    {
      id: 5,
      name: 'JIM',
      likes: '99',
      likesColor: '#9e9ea7',
      browses: '90',
    },
  ],
}

const mutations = {
  // 点赞
  ADDLIKES(state, value) {
    // console.log(value);
    console.log('mutations中的ADDLIKES被调用了')
    const list = state.formWorkList
    const intLikes = parseInt(list[value.i].likes)
    state.formWorkList[value.i].likes = intLikes + value.n
  },
  // 取消点赞
  SUBLIKES(state, value) {
    console.log('mutations中的SUBLIKES被调用了')
    const list = state.formWorkList
    const intLikes = parseInt(list[value.i].likes)
    state.formWorkList[value.i].likes = intLikes - value.n
  },
  // 点击浏览量增加
  ADDBROWSES(state, value) {
    // console.log(value);
    console.log('mutations中的ADDBROWSES被调用了')
    const list = state.formWorkList
    const intBrowses = parseInt(list[value.i].browses)
    state.formWorkList[value.i].browses = intBrowses + value.n
  },
  // 改变颜色
  CHANGECOLOR(state, value) {
    console.log('mutations中的CHANGECOLOR被调用了', state, value)
    state.color = value
  },
  // 改变赞的颜色
  CHANGELIKECOLOR(state, value) {
    console.log('mutations中的CHANGELIKECOLOR被调用了', state, value)
    const list = state.formWorkList
    list[value.i].likesColor = value.c
  },
}

// 获取要修改数据的index
const getIndex = function (list, value) {
  var i;
  list.some((item, index) => {
    if (item.id === value) {
      i = index
      // 再找到对应的项之后，可以通过return true的固定语法，来终止some循环
      return true
    }
  })
  return i;
}

const actions = {
  // 改变颜色
  changeColor(context, e) {
    console.log('action中的changeColor被调用了', context, e)
    // console.log(e.target.value);
    var txtColor = e.target.value
    context.commit('CHANGECOLOR', txtColor)
  },
  // 点赞&取消点赞
  changeLikes(context, value) {
    console.log('action中的changeLikes被调用了', context, value)
    const list = context.state.formWorkList
    var i = getIndex(list, value)
    // console.log(i);
    if (list[i].likesColor === '#9e9ea7') {
      // context.commit('COLORCHANGE',value)
      // console.log('灰色');
      context.commit('CHANGELIKECOLOR', { c: '#f00c4d', i })
      context.commit('ADDLIKES', { n:1, i })
    } else {
      context.commit('CHANGELIKECOLOR', { c: '#9e9ea7', i })
      context.commit('SUBLIKES',{ n:1, i })
    }
  },
  // 增加浏览量
  addBrowse(context, value) {
    console.log('action中的changeLikes被调用了', context, value)
    const list = context.state.formWorkList
    var i = getIndex(list, value)
    context.commit('ADDBROWSES', { n:1, i })
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
