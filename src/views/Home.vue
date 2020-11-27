<template>
  <div class="home">
  <Header title='Upcoming Events' ></Header>
  <Nav></Nav>

    <div v-for="(element, index) of datos" :key="index">
       <Carrusel 
        :titulo ="element.titulo"
        :srcPadre="element.imgSrc"
        :text="element.description"
        :bSrc="element.btnSrc"
        ></Carrusel>
    </div>
  
  </div>
</template>

<script>
// @ is an alias to /src

import Carrusel from '@/components/Carrusel.vue'
import Header from '@/components/Header.vue'
import Nav from '@/components/Nav.vue'

export default {
  name: 'Home',
  data: function (){
    return{
      datos:[
        {
          titulo:"Fundraiser Event",
          imgSrc:"fundraiser.png",
          description:"Come and join us this August 4th for our first fundraiser event before the season begins, invite your friends and family.",
          btnSrc:null
        },
        {
          titulo:"Season Kick-off:Meet the Teams",
          imgSrc:"ball.jpg",
          description:"Come with us this Agust 16th to suport our team and the other kids who will be participating this season",
          btnSrc:null
        },
        {
          titulo:"First Game Of The Season ",
          imgSrc:"soccerPositions.jpg",
          description:"Don't you miss our first game of the season on september 1 (Check the Game Schedule for details)",
          btnSrc:null
        }
      ]
    }
  },
  components:{
    Carrusel,
    Header,
    Nav
  }
}
</script>

<style  scoped lang="scss">

</style>
