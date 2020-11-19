<template>
  <div class="acordeon">
    <b-row class="m-2 mb-3 alto p-4"> 
        <b-col cols="12" text-variant="success" ><h2>{{date}}</h2></b-col>
        <b-col cols="5"><h3>{{team1A}}</h3></b-col>
        <b-col cols="2"><h5>vs</h5></b-col>
        <b-col cols="5"><h3>{{team2A}}</h3></b-col>
        <b-col>

            <b-button v-b-toggle.collapse-1 variant="success"  class="mb-3">More </b-button>
            <b-collapse id="collapse-1" class="mt-2">
                <b-col align-self="start">Time:9:30 pm</b-col>
                <b-col align-self="start">{{locationA}}</b-col>  
            <b-button v-b-toggle.collapse-1-inner size="sm">Map</b-button>
            <b-collapse id="collapse-1-inner" class="mt-2">
                <p>The map will be here</p>
            </b-collapse>
            </b-collapse>
        </b-col>
        
    </b-row>
    <b-row class="m-2 mb-3 alto p-4"> 
        <b-col cols="12"><h2>{{date}}</h2></b-col>
        <b-col cols="5"><h3>{{team1B}}</h3></b-col>
        <b-col cols="2"><h5>vs</h5></b-col>
        <b-col cols="5"><h3>{{team2B}}</h3></b-col>
        <b-col>

            <b-button v-b-toggle.collapse-2 variant="success"  class="mb-3">More </b-button>
        <b-collapse id="collapse-2" class="mt-2">
            <ul class="style d-flex flex-column justify-content-start">
                <li>Time: 1:00 pm</li>
                <li>Direction:{{locationB}} </li>
            </ul>    
            <b-button v-b-toggle.collapse-2-inner size="sm">Map</b-button>
            <b-collapse id="collapse-2-inner" class="mt-2">
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
    props:["date","month","team1A","team2A","locationA","team1B","team2B","locationB" ]
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