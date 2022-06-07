import Vuex from 'vuex'
import Vue from 'vue'
// import axios from 'axios'

Vue.use(Vuex)

import arrSortModule from './modules/arrSort'
import filterListModule from './modules/filterList'
import arrStringsModule from './modules/arrStrings'
import usersModule from './modules/users'
import allZerosToTheEndModule from './modules/allZerosToTheEnd'
import post from './modules/post'
import message from './modules/message'
import cardPosts from './modules/cardPosts'
import alertPosts from './modules/alertPost'
import table from './modules/table'

const store = new Vuex.Store({
  modules: {
    arrSort: arrSortModule,
    filterList: filterListModule,
    arrStrings: arrStringsModule,
    users: usersModule,
    allZerosToTheEnd: allZerosToTheEndModule,
    post,
    message,
    cardPosts,
    alertPosts,
    table,
  },
})

export default store
