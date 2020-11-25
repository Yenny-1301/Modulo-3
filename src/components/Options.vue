<template>
  <b-row>
    <b-col cols="4">
      <select name="select" class="m-0 p-0">
      <option value="All">Month</option> 
      <option :value="month" v-for="(month,index) of arrayMonths" :key="index">{{month}}</option>
    </select>
    </b-col>
    <b-col cols="4">
      <select name="select" class="m-0 p-0">
      <option value="All">Teams</option> 
      <option :value="team" v-for="(team,index) of arrayTeams" :key="index">{{team}}</option>

    </select>
    </b-col>  
    <b-col cols="4">
      <select name="select" class="m-0 p-0">
      <option value="All">Locations</option> +
      <option :value="location" v-for="(location,index) of arrayLocations" :key="index">{{location}}</option>
    </select>
    </b-col>        
  </b-row>
</template>

<script>
export default {
    name:'Options',
    data(){
      return{
        selected: null,
      }
    },
    props:["arrayLocations", "arrayTeams", "arrayMonths"]
}
</script>

<style scoped lang="scss">

.bor{
  border-right:1px solid black;
  border-left: 1px solid black;
}
</style>