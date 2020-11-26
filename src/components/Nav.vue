<template>
<div>
 <div class="container d-sm-none">
        <div @click="showNav=!showNav" class="menu">
         <i class="fas fa-bars"></i>
        </div>
        <div id="nav" :class="{showNav:showNav, hideNav:!showNav}">
        <div class="logo">
        <img src="@/assets/logo.png" alt="logo">
        <div><h4>NYSL</h4></div>
        </div>
    <ul>
      
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/schedule">Schedule</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
      
    </ul>
        </div>    
  </div>
  <div class="landscape d-none d-sm-inline">
    <div class="logo d-flex justify-content-center align-items-center">
        <img src="@/assets/logo.png" alt="logo">
        <span class="ml-2">NYSL</span>
        <span class="ml-2 d-none d-lg-inline">NorthSide Youth Soccer League</span>
        </div>
    <b-row class="pt-2 ">
      <b-col cols="3" class="derecha"><router-link to="/">Home</router-link></b-col>
      <b-col cols="3" class="derecha"><router-link to="/about">About</router-link></b-col>
      <b-col cols="3" class="derecha"><router-link to="/schedule">Schedule</router-link></b-col>
      <b-col cols="3"><router-link to="/login">Login</router-link></b-col>
    </b-row>
  </div>
</div>
 
</template>

<script>
export default {
  name: 'Nav',
  data: function (){
    return {
    showNav:false,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.showNav{
  margin-left: 0;
}
.hideNav{
    margin-left:-70%;
}


.container{
  margin: 0;
  padding: 0;
  z-index:999;

  .menu{
    font-size: 30px;
    color: white;
    position: absolute;
    margin: 0;
    top: 0px;
    left: 0px;
    width: 50px;
    height: 48px;
    &:hover{
    background-color: rgba(0, 0, 0, 0.3);

    }
    
    
  }
  #nav{ 
  height: 100%;
  width: 60%;
  position: absolute;
  z-index: 9999;
  top: 20;
  background-color: rgba(44, 44, 44 , 0.95);
  transition: all 1s;

   
    ul{
    margin: 0;
    padding: 0;
    
    li{
      text-decoration: none;
      border-bottom: 1px solid rgba(255,255,255,0.3);
      padding: 20px;
      font-size: 1em;
      text-align: left;
      &:hover{
        background-color: rgba(44, 39, 39, 0.692);
      }
      a{
      color: white;
      text-decoration: none;
      &.router-link-exact-active{
        color:#9CC99F ;
      }
      }
      
    }
  } img{
      margin: 0;
      padding: 0;
    height: 120px;
    width: 120px;
  }
     .logo{
        margin: 0;
        padding: 0;
        text-align: center;
        padding-top: 20px;
        color: white;
        h4{
          margin:0;
          padding: 0;
          font-size: 1em;
          margin-top:1em;
        }
      }
  }
  
  

}
.landscape{
  margin: 0;
  padding: 0;
  color: rgba(44, 39, 39, 0.692) ;
  .logo{
    position: absolute;
    top: 5px;
    left: 4px;
    color: white;
    img{
      widows: 50px;
      height: 50px;
    }
  }
  
  .row{
      background: linear-gradient(to right, #2E7D32, #004983);
      .col-3{
         &:hover{
        background-color: rgba(255,255,255,0.3);
      }
      }
       
    .derecha{
      border-right: 1px solid white ;
      
    }
     a{
          color:white;
      
       &.router-link-exact-active{
        color:#9CC99F ;

      }
        }
   
  }
 
}

</style>
