 
<template>
  <b-row class="login">
    <template v-if="usuario==null">
      <b-col cols="12" class=" d-flex align-items-end justify-content-center mb-3">
        <img src="@/assets/nullUser.png" alt="user" class="nulluser">
        <!-- <i class="fas fa-user icono"></i> -->
        </b-col>
      <b-col cols="12">
        <b-button variant="success" @click="logIn()">Login with google</b-button>
      </b-col>
    </template>
    <template v-else>
        
      <b-col cols="12" class=" d-flex align-items-center justify-content-end mb-3 flex-column">
        <img :src="usuario.photoURL" :alt="usuario.displayName" class="mb-3">
        <h2>Welcome {{usuario.displayName}}</h2>
        <!-- <i class="fas fa-user icono"></i> -->
       </b-col>
      <b-col cols="12">
        <b-button variant="success" @click="logOut()">Longout</b-button>
      </b-col>
    </template>

    <!-- <template v-else=""></template> -->
  </b-row>
</template>

<script>
// @ is an alias to /src
import firebase from 'firebase/app'
import 'firebase/auth'
import {mapState} from 'vuex'

export default {
  name: 'Login',
  computed:{
    ...mapState(['usuario'])
  },
  methods:{
    logIn () {
      // ESTABLECE CONEXION CON GOOGLE
      let provider= new firebase.auth.GoogleAuthProvider()
        firebase.auth()
        .signInWithPopup(provider)
        .then(result => {
         console.log('login'+' '+ result.user.email);
        })
        .catch(error =>{
          console.log(error.code);
        })
    },
    logOut(){
      firebase.auth()
      .signOut()
      .then( result =>{
         console.log('logout'+ result.user.email);
      
      })
      .catch(error =>{
        console.log(error.code);
      })

    }

  }
}
</script>

<style scoped lang="scss">
.icono{
  font-size: 60px;
}
.login{
  height: 72vh;
}
img{
  border-radius: 50%;
}
.nulluser{
  width: 100px;
  height: 100px;
}
</style>