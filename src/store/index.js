import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

import Home from './Home'
import User from './User';
import MyProject from './MyProject';
import Community from './Community';
import EditPage from './EditPage';

export default new Vuex.Store({
    modules: {
        Home,
        MyProject,
        Community,
        User,
        EditPage,
    }
})