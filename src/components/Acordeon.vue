<template>
  <div class="acordeon">
      <b-container>
           <b-row class="m-2 mb-3 alto p-4 "> 
        <b-col cols="12" text-variant="success" ><h2>{{day}}</h2></b-col>
        <b-col cols="5">
            <h3 >{{team1}}</h3></b-col>
        <b-col cols="2" class="text-success"><h5>vs</h5></b-col>
        <b-col cols="5">
            <h3>{{team2}}</h3>
            </b-col>
        <b-col>

            <b-button v-b-toggle="'collapse' + indice"  variant="success"  class="mb-3 b-gradient rounded-circle">+</b-button>
            <b-collapse :id="'collapse' + indice" class="mt-2">
                <b-col align-self="start">Time:{{time}}</b-col>
                <b-col align-self="start">Direction: {{location}}</b-col> 
                
            <router-link :to="'/chat/'+ id"  class="btn b-blue btn-md mr-3 mt-2 mb-4 "><i class="fas fa-comment-dots"></i></router-link>
            <b-button v-b-modal="'inner' + indice" size="md" class="mt-2 mb-4 b-blue"><i class="fas fa-map-marker-alt"></i></b-button>
            <b-modal :id="'inner'+ indice" :title="location">
                <iframe  class="d-sm-none" :src="mapSrc" width="310" height="250" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                <iframe  class="d-none d-sm-inline" :src="mapSrc" width="450" height="250" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </b-modal>
            </b-collapse>
        </b-col>
    </b-row>
      </b-container>
   
</div>
</template>

<script>
export default {
    name:'Acordeon',
    props:["day", "month","team1", "team2", "time","location", "indice","mapSrc", "id"]
}
</script>

<style scoped lang="scss">
.b-green{
     background-color: #2E7D32;
}
.b-blue{
   background-color:#005EA9 ;
   border: 1px solid #005EA9;
   color:white ;
}
.b-gradient{
      background: linear-gradient(to right, #2E7D32, #005EA9);
}
.row{
    border-radius: 20px;
    box-shadow:  3px 3px 6px 2px rgba(0, 0, 0, 0.2);
}
.style{
    margin: 0;
    padding: 0;
    list-style: none;
}


</style>