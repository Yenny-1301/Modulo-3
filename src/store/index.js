import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario:null,
  },
  mutations:{
    listenUser(state){
      firebase.auth().onAuthStateChanged(user=>{
        if (user) {
          state.usuario=user;
        }else{
          state.usuario=null;
        }
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
// onaoutStatechange