<template>
  <div class="schedule">
    <div class="container">
      <select name="select" class="m-0 p-0" v-model="monthSelected">
      <option value="All">Month</option> 
      <option :value="month" v-for="(month,index) of this.months" :key="index">{{month}}</option>
    </select>

      <select name="select" class="m-0 p-0" v-model="teamSelected">
      <option value="All">Teams</option> 
      <option :value="team" v-for="(team,index) of this.teams" :key="index">{{team}}</option>
      </select>

    <select name="select" class="m-0 p-0" v-model="locationSelected">
      <option value="All">Locations</option>
      <option :value="location" v-for="(location,index) of this.locations" :key="index">{{location}}</option>
    </select>
    </div>
    <div v-for="(object,index) of filtered" :key="index">
   <Acordeon
   :day="object.day"
   :month="object.month"
   :team1="object.team1"
   :team2="object.team2"
   :location="object.location"
   :indice="index"
   :time="object.time"
  />
    </div>
  </div>


</template>

<script>
// @ is an alias to /src
import Acordeon from '@/components/Acordeon.vue'
// import Options from '@/components/Options.vue'

export default {
  name: 'Schedule',
  data: function(){
    return{
      gameInfo:[
                {
                day:"9/01",
                month:"september",
                team1:"U1",
                team2:"U4",
                location:"AJ Katzenmaier",
                time:"9:30 hs"
                },
                {
                day:"9/01",
                month:"september",
                team1:"U3",
                team2:"U2",
                location:"Greenbay",
                time:"13:00 hs"
                },
                {
                day:"9/08",
                month:"september",
                team1:"U5",
                team2:"U6",
                location:"Howard A Yeager",
                time:"9:30pm"
                },
                {
                day:"9/08",
                month:"september",
                team1:"U6",
                team2:"U1",
                location:"Marjorie P Hart",
                time:"13:00 hs"
                },
                {
                day:"9/15",
                month:"september",
                team1:"U2",
                team2:"U4",
                location:"North",
                time:"9:30 hs"
                },
                {
                day:"9/15",
                month:"september",
                team1:"U3",
                team2:"U5",
                location:"AJ Katzenmaier",
                time:"13:00 hs"
                
                },
                {
                day:"9/22",
                month:"september",
                team1:"U1",
                team2:"U3",
                location:"South",
                time:"9:30 hs"
                },
                {
                day:"9/22",
                month:"september",
                team1:"U2",
                team2:"U6",
                location:"Howard A Yeager",
                time:"13:00 hs"
                },
                {
                day:"9/29",
                month:"september",
                team1:"U4",
                team2:"U5",
                location:"Greenbay",
                time:"9:30 hs"

                },
                {
                day:"10/06",
                month:"october",
                team1:"U2",
                team2:"U5",
                location:"Marjorie P Hart",
                time:"13:00 hs"
                },
                {
                day:"10/06",
                month:"october",
                team1:"U1",
                team2:"U6",
                location:"South",
                time:"9:30 hs"
                },
                {
                day:"10/08",
                month:"october",
                team1:"U3",
                team2:"U4",
                location:"Howard A Yeager",
                time:"13:00 hs"
                },
                {
                day:"10/08",
                month:"october",
                team1:"U5",
                team2:"U1",
                location:"Greenbay",
                time:"9:30 hs"
                },
                {
                day:"10/20",
                month:"october",
                team1:"U6",
                team2:"U3",
                location:"North",
                time:"13:00 hs"
                },
                {
                day:"10/20",
                month:"october",
                team1:"U2",
                team2:"U4",
                location:"Marjorie P Hart",
                time:"9:30 hs"
                },
                {
                day:"10/27",
                month:"october",
                team1:"U3",
                team2:"U1",
                location:"AJ Katzenmaier",
                time:"13:00 hs"
                },
                {
                day:"10/27",
                month:"october",
                team1:"U5",
                team2:"U6",
                location:"Howard A Yeager",
                time:"9:30 hs"

                }
      ],
      locations:["Howard A Yeager","AJ Katzenmaier","Marjorie P Hart","North","Greenbay","South"],
      months:["september", "october"],
      teams:["U1","U2", "U3", "U4", "U5","U6"],
      monthSelected:"All",
      teamSelected:"All",
      locationSelected:"All"
    }
  },
  components:{
    Acordeon
  },
  computed:{
    filtered: function(){
      return this.gameInfo.filter(team => (this.monthSelected==team.month || this.monthSelected=="All") &&
                                          (this.teamSelected==team.team1 || this.teamSelected==team.team2 || this.teamSelected=="All") &&
                                          (this.locationSelected==team.location || this.locationSelected=="All")


        )
   }
  } 
}

</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: space-between;
}

.container > * {
  flex-grow: 1;
  margin: 0 ;
}
.container :nth-child(2) {
  margin: 0 1em;
}
</style>