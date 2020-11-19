<template>
  <div class="about">
   <div v-for="(element, index) of datos" :key="index">
       <Carrusel 
        :titulo ="element.titulo"
        :srcPadre="element.imgSrc"
        :text="element.description"
        :bSrc="element.btnSrc"
        />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Carrusel from '@/components/Carrusel.vue'


export default {
  name: 'About',
  data:function(){
    return{
      datos:[
        {
          titulo:"Mision",
          imgSrc:"chicago2.jpg",
          description:"To support young athletes living in Chicago's northside neighborhoods, who have an interest in learning and playing soccer, with oportunities to learn and practice skills related to the game of soccer, specifically those skills around team cooperation an good sportsmanship.",
          btnSrc:null,
        },
         {
          titulo:"Vision",
          imgSrc:"mision.jpg",
          description:"The Northside Youth Soccer League aspires to develop strong, well-ronunded, and mindful athletes through the building of character, self-discipline, and leadership.",
          btnSrc:null,
        },
         {
          titulo:"General Information",
          imgSrc:"general.jpg",
          description:"The Northside Youth Soccer League was established in 1996 to provide athletes residing in Chicago's northside neighborhoods an enviroment in which to lear and play soccer. To be a member of NYSL, you must be between the ages of 4-12 and reside in a Chicago northside neighborhood. NYSL is ran by a small full-time staff, and relies on the generous volunteer time of parents and previous league members.",
          btnSrc:null,
        }
      ]
    }
  },
  components:{
    Carrusel
  }
  
}
</script>

