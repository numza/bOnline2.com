import Vue from 'vue'
import Vuex from 'vuex'
import axiosClient from '../axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user :[
      
    ],
    billings :[],
  },
  mutations: {
    setBillings: (state, billings) =>{
      state.billings = billings;
      console.log("s")
      console.log(state.billings)
    }
  },
  actions: {
    getAllBillings({commit}) {
      return  axiosClient.get("/data")
        .then((response) => {
          console.log(response.data);
          commit('setBillings',response.data);
          return response.data
        })
      
    }
  },
  modules: {
  }
})
