<template>
  <div class="chat  d-flex flex-column justify-content-center">
    <Header title='Chat Room'></Header>
    <template v-if="usuario==null">
          <div>
            <h2>If you want to access to our Chat Rooms, please login</h2>
          <router-link to="/login" class="btn b-gradient mt-3">Login</router-link>
          </div> 
    </template>
      <template v-else>
          <div class="contenido ">
          <div class="body d-flex flex-column align-items-center m-2">
              <div v-for="(mensaje,indice) of messages" :key="indice" class="mensaje m-2">
                  <p class="mt-3"><strong>{{mensaje.autor}} said:</strong></p>
                  <p class="m-2">
                      {{mensaje.texto}}
                  </p>
              </div>
          </div>
        </div>
        <form @submit.prevent="post()" class="mb-3">
                      <input type="text" placeholder="Write your message..." id="box" v-model="input">
                      <button type="submit">Send</button>
        </form>
          <!-- <router-link to="/schedule" class="btn btn-success mt-3 mb-2 mr-1 b-bt rounded-circle"><i class="fas fa-arrow-left"></i></router-link> -->
          
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
        messages:[],
        input:null
        }
    },
    methods:{
        post(){
            let folder=db.ref('forum/match'+ this.$route.params.id)

            let message={
                texto:this.input,
                autor:this.usuario.displayName,
                imagen:this.usuario.photoURL,
                date: new Date().toDateString()
            }
            folder.push(message)
            this.input=null;
        }
    },
    computed:{
        ...mapState(['usuario'])
    },
    mounted(){
        this.messages=[]
        db.ref('forum/match'+ this.$route.params.id).on("child_added",(snapshot)=>{
            this.messages.push(snapshot.val())
        })

    },
    components:{
        Header
    }
}
</script>

<style lang="scss" scoped>
.chat{
    width: 100%;
    min-height:80vh;
    
    
    .mensaje{
      background:rgba(0, 77, 153,0.9 );
    box-shadow:  3px 3px 6px 2px rgba(0, 0, 0, 0.2);
      border-radius: 20px;
      margin-bottom: 0;
      color: white;
      width: 50%;     
      border: 0;
      &:hover{
          background-color: rgba(0, 77, 153,0.7 );
      }
    }
    #box{
        padding: 5px;
        border: none;
        border: 1px solid #707070;
        border-right: none;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    } 
    button{
        padding: 6px;
        border: none;
        color: white;
        background: linear-gradient(to right, #2E7D32, #005EA9);
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    .contenido{
        height: 70vh;
        max-height: 70vh;
        overflow: auto;
    }
}
.b-bt{
      background:#2E7D32 ;
      &:hover{
          background-color: #004983;
          border-color: #004983;
      }

}
.header{
    position: fixed;
    top: 0;
}
.b-gradient{
        background: linear-gradient(to right, #2E7D32, #005EA9);
        color:white ;

}

</style>