import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

import Home from './Home'
import Login from './Login';
import MyProject from './MyProject';
import Community from './Community';
import Editor from './Editor';

export default new Vuex.Store({
    modules:{
        Home,
        Login,
        MyProject,
        Community,
        Editor
    }
})