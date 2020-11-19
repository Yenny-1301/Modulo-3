<template>
  <div class="schedule">
    <Options />
    <div v-for="(object,index) of gameInfo" :key="index">
   <Acordeon 
   :date="object.day"
   :month="object.month"
    :team1A="object.team1A"
   :team2A="object.team2A"
   :locationA="object.locationA"
   :team1B="object.team1B"
   :team2B="object.team2B"
   :locationB="object.locationB"
  />
    </div>
  </div>


</template>

<script>
// @ is an alias to /src
import Acordeon from '@/components/Acordeon.vue'
import Options from '@/components/Options.vue'

export default {
  name: 'Schedule',
  data: function(){
    return{
      gameInfo:[
                {
                day:"9/01",
                month:"september",
                team1A:"U1",
                team2A:"U4",
                locationA:"AJ Katzenmaier",
                team1B:"U3 ",
                team2B:" U2",
                locationB:"Greenbay "
                },
                {
                day:"9/08",
                month:"september",
                team1A:"U5",
                team2A:"U6",
                locationA:"Howard A Yeager",
                team1B:"U6",
                team2B:" U1",
                locationB:"Marjorie P HartGreenbay "
                 },
                 {
                day:"9/15",
                month:"september",
                team1A:"U2",
                team2A:"U4",
                locationA:"North",
                team1B:"U3",
                team2B:" U5",
                locationB:"AJ Katzenmaier"
                },
                {
                day:"9/22",
                month:"september",
                  team1A:"U1",
                  team2A:"U3",
                  locationA:"South",
                  team1B:"U2",
                  team2B:" U6",
                  locationB:"Howard A Yeager"
            },
            {
                day:"9/29",
                month:"september",
                 team1A:"U4",
                  team2A:" U5",
                  locationA:"Greenbay "
            },
            {
                day:"10/06",
                month:"october",
                  team1A:"U2",
                  team2A:"U5",
                  locationA:"Marjorie P Hart",
                  team1B:"U1",
                  team2B:" U6",
                  locationB:"South"
            },
            {
                day:"10/13",
                month:"october",
                  team1A:"U3",
                  team2A:"U4",
                  locationA:"Howard A Yeager",
                  team1B:"U5",
                  team2B:" U1",
                  locationB:"Greenbay"
            },
            {
                day:"10/20",
                month:"october",
                  team1A:"U6",
                  team2A:"U3",
                  locationA:"North",
                  team1B:"U2",
                  team2B:" U4",
                  locationB:"Marjorie P Hart"
            },
            {
                day:"10/27",
                month:"october",
                  team1A:"U3",
                  team2A:"U1",
                  locationA:"AJ Katzenmaier",
                  team1B:"U5",
                  team2B:" U6",
                  locationB:"Howard A Yeager"
            }
      ]
    }
  },
  components:{
    Acordeon,
    Options
  }
}
</script>