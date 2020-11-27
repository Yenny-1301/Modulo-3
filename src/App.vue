<template >
  <div id="app" >
    <div id="envoltorio">
      <!-- <Nav></Nav> -->
      <main class="main-view">
        <router-view/>
      </main>
      <footer>
        <section id="contact">
          <h3>Contact Us</h3>
          <ul class="degradado">
            <li><i class="fab fa-instagram"></i></li>
            <li><i class="fab fa-facebook-square"></i></li>
            <li><i class="fab fa-twitter-square"></i></li>
           
          </ul>
        </section>
        <section id="teamInfo">
          <a href="#" class="left">Tlf: 1124564275 </a>
          <a href="#">Email: nysl@chisoccer.org</a>
        </section>
      </footer>
    </div>
  </div>
</template>

<script>
// import Nav from  '@/components/Nav.vue'
import {mapMutations, mapState} from 'vuex'

export default {
  name:'App',
  // components:{
  //   Nav
  // },
  methods:{
    ...mapMutations(['listenUser'])
  },
  beforeMount(){
    this.listenUser()
  },
  computed:{
    ...mapState(['usuario'])
  }

}
</script>>

<style lang="scss">
body{
  margin: 0;
  padding: 0;
  
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #0F5189 ;
  margin: 0;
  padding: 0;

}

#envoltorio {
  margin: 0;
  padding: 0;
   width: 100%;
   height: 100vh;

 
    }
    Nav{
      margin: 0;
      padding: 0; 
    }
    main{
      width: 100%;
    }
    footer{
      section{
        border-top: 0.5px solid #7A7A7A;
         &#contact{
               h3{
                margin: 0;
                padding: 0;
                font-size: 20px;
                  }
                ul{
                  margin: 2px;
                  padding: 0;
                  margin-left: 0px;
                  display: flex;
                  justify-content: center;
                  background: -webkit-linear-gradient( #2E7D32, #004983);
                  -webkit-text-fill-color: transparent;
                  -webkit-background-clip: text;

                  li{
                    padding: 2px;
                    list-style:none;
                    font-size: 40px;
                  }
                }
            }
      
      &#teamInfo{
        display: flex;
        justify-content: center;
         a{
           text-decoration: none;
           color: #7A7A7A;
           margin-top: 5px;
           
           &.left{
           border-right: 1px solid #7A7A7A;
           margin-right: 5px;
           padding-right: 5px;;
         }
           
         }
         
      }
    }

      }
     



</style>

