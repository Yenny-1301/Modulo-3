import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase/app'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false
var firebaseConfig = {
  apiKey: "AIzaSyAjUndNHZz7ALUZLaoT3MUbY4I6ICKwi7E",
  authDomain: "nysl-app2020.firebaseapp.com",
  databaseURL: "https://nysl-app2020.firebaseio.com",
  projectId: "nysl-app2020",
  storageBucket: "nysl-app2020.appspot.com",
  messagingSenderId: "147422641",
  appId: "1:147422641:web:8c46d8757cb83815fe1190"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
