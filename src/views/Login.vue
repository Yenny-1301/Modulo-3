 
<template>

  <div class="login">
        <Header title='Login'></Header>
        <Nav></Nav>

    <template v-if="usuario==null">
      <div class="cont d-flex flex-column justify-content-center aling-items-center ">
        <div>
        <img src="@/assets/nullUser.png" alt="user" class="nulluser">
        </div>
      <div>
        <b-button class="b-gradient" @click="logIn()">Login with Google</b-button>
      </div>
      </div>
      
    </template>
    <template v-else>
        <div class="cont  d-flex flex-column justify-content-center aling-items-center ">
          <div>
        <img :src="usuario.photoURL" :alt="usuario.displayName" class="mb-3">
        <h2>Welcome {{usuario.displayName}}</h2>
       </div>
      <div>
        <b-button class="b-gradient" @click="logOut()">Longout</b-button>
      </div>
        </div>
      
    </template>

  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Nav from '@/components/Nav.vue'
import firebase from 'firebase/app'
import 'firebase/auth'
import {mapState} from 'vuex'

export default {
  name: 'Login',
  computed:{
    ...mapState(['usuario'])
  },
 components:{
    Header,
    Nav
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
.cont{
  height: 60vh;
}
.icono{
  font-size: 60px;
}
.login{
  height: 80vh;
}
img{
  border-radius: 50%;
}
.nulluser{
  width: 100px;
  height: 100px;
}
.b-gradient{
      background: linear-gradient(to right, #2E7D32, #005EA9);
}
</style>