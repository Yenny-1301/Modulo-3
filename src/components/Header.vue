<template>
  <div class="header">
      <h1 class="d-flex justify-content-center align-items-center pt-2 ">{{title}}</h1>
      <img src="../assets/logo.png" alt="logo" class="logo d-none d-sm-inline">
      <span class="d-none d-sm-inline d-lg-none abs ">NYSL</span>
      <span class="d-none d-lg-inline abs">North Side Youth Soccer League</span>

        <template v-if="usuario!=null" >
          <router-link to="/login"><img :src="usuario.photoURL" alt="foto del usuario" class="rounded-circle"></router-link>

          
        </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name:'Header',
    props:['title'],
    computed:{
        ...mapState(['usuario'])
    }
}
</script>

<style lang="scss" scope >
.header{
      width: 100%;
      background: linear-gradient(to right, #2E7D32, #004983);
      color: white;
      text-align: center;
      margin:0;
      height: 50px;
  .abs{
    position: absolute;
    top: 15px;
    left: 70px;
  }
      
      h1{
        margin: 0;
        padding: 0;
        font-size: 30px;
      }
       .btn-menu{
        color:white;
        font-size: 30px;
        position: absolute;
        top:7px;
        left: 10px;
      }
      img{
        width: 30px;
        height: 30px;
        position: absolute;
        top:10px;
        right: 10px;
        
         &.logo{
        width: 50px;
        height: 50px;
        position: absolute;
        top:3px;
        left: 10px;
      }
      }
      
}

</style>