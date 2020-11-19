<template>
  <div id="Carrusel">
        <div class="cards one" >
        <b-card
            :title="titulo"
            :img-src="require('../assets/' + srcPadre)"
            :img-alt="titulo"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
            <b-card-text>{{text}}</b-card-text>
        </b-card>
        </div>
       
  </div>
</template>

<script>
export default {
    name:'Carrusel',
    props:['titulo', 'srcPadre','text','bSrc']
    
}
</script>

<style scoped lang="scss">


#Carrusel{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    
    z-index: 10;
    .cards{
    margin-top:3em ;
    
    }
  
    
}
</style>