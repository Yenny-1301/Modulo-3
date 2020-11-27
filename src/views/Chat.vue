<template>
  <div class="chat">
      <Header title='Chat Room' ></Header>
      <template v-if="usuario==null">
          <router-link to="/login" class="btn btn-success mt-5"> Please Login</router-link>
          <router-link to="/schedule" class="btn btn-success mt-5"> Back</router-link>


      </template>
      <template v-else>
          <div class="body">
              <div v-for="(mensaje,indice) of mensajes" :key="indice">
                  <p>
                      <strong>{{mensaje.autor}} said:</strong> 
                  </p>
                  <p>
                      {{mensaje.texto}}
                  </p>
                
              </div>
                <form @submit.prevent="post()">
                      <input type="text" placeholder="Write your message..." id="box" v-model="input">
                      <button type="submit">Send</button>
                  </form>
          </div>
          <router-link to="/schedule" class="btn btn-success mt-5"> Back</router-link>

      </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from '../components/Header.vue'
import {db} from '../firebase/db'

export default {
    name:'Chat',
    data(){
        return{
          mensajes:[{autor:'Juan Cruz',texto:'holi'}],
          input:null
        }
    },
    methods:{
        post(){
            let folder=db.ref('forum/match'+ this.$route.params.id);

            let message={
                texto:this.input,
                autor:this.usuario.displayName,
                date: new Date()
            }
            folder.push(message)
            this.input=null;
        }
    },
    computed:{
        ...mapState(['usuario'])
    },
    components:{
        Header
    }
}
</script>

<style lang="scss" scoped>
.chat{
    height: 70vh;
    width: 100%;
}

</style>