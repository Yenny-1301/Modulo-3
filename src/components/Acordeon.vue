<template>
  <div class="acordeon">
    <b-row class="m-2 mb-3 alto p-4"> 
        <b-col cols="12" text-variant="success" ><h2>{{day}}</h2></b-col>
        <b-col cols="5"><h3>{{team1}}</h3></b-col>
        <b-col cols="2"><h5>vs</h5></b-col>
        <b-col cols="5"><h3>{{team2}}</h3></b-col>
        <b-col>

            <b-button v-b-toggle="'collapse' + indice"  variant="success"  class="mb-3">More </b-button>
            <b-collapse :id="'collapse' + indice" class="mt-2">
                <b-col align-self="start">{{time}}</b-col>
                <b-col align-self="start">{{location}}</b-col>  
            <b-button v-b-toggle.collapse-1-inner size="sm">Map</b-button>
            <b-collapse id="collapse-1-inner" class="mt-2">
                <p>The map will be here</p>
            </b-collapse>
            </b-collapse>
        </b-col>
    </b-row>
</div>
</template>

<script>
export default {
    name:'Acordeon',
    props:["day", "month","team1", "team2", "time","location", "indice"]
}
</script>

<style scoped lang="scss">
.row{
    border: 1px solid #7A7A7A;
    border-radius: 20px;
}
.style{
    margin: 0;
    padding: 0;
    list-style: none;
}


</style>