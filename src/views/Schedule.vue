<template>
  <div class="schedule">
    <!-- <i class="fas fa-comment-dots"></i> -->
    <div class="container ">
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
   :mapSrc="object.directionSrc"
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
                time:"9:30 hs",
                directionSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.656836443422!2d-87.6312603845582!3d41.900236679220434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x754eb9271a4a27fd!2sOgden%20Elementary%20School!5e0!3m2!1ses-419!2sar!4v1606339598840!5m2!1ses-419!2sar",
                },
                {
                day:"9/01",
                month:"september",
                team1:"U3",
                team2:"U2",
                location:"Greenbay",
                time:"13:00 hs",
                directionSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.022981686595!2d-87.64002218455776!3d41.913864679219344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb351205fae50c6f3!2sGreenbay%20Elementary!5e0!3m2!1ses-419!2sar!4v1606339988098!5m2!1ses-419!2sar",
                },
                {
                day:"9/08",
                month:"september",
                team1:"U5",
                team2:"U6",
                location:"Howard A Yeager",
                 directionSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5864786779157!2d-87.66530238455746!3d41.92324747921862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8b4d680e25a482e5!2sSt.%20Josaphat%20School!5e0!3m2!1ses-419!2sar!4v1606340752227!5m2!1ses-419!2sar",
                time:"9:30pm",
                },
                {
                day:"9/08",
                month:"september",
                team1:"U6",
                team2:"U1",
                directionSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.289839348977!2d-87.64816138455728!3d41.92962287921805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdbff5d5dfcfcfa35!2sMarjorie%20P%20Hart%20Elementary!5e0!3m2!1ses-419!2sar!4v1606339809160!5m2!1ses-419!2sar",
                location:"Marjorie P Hart",
                time:"13:00 hs"
                },
                {
                day:"9/15",
                month:"september",
                team1:"U2",
                team2:"U4",
                directionSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.3355487036233!2d-87.64831158455799!3d41.90714487921991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5736e62f19086c62!2sNorth%20Elementary!5e0!3m2!1ses-419!2sar!4v1606340221046!5m2!1ses-419!2sar",
                location:"North",
                time:"9:30 hs"
                },
                {
                day:"9/15",
                month:"september",
                team1:"U3",
                team2:"U5",
                location:"AJ Katzenmaier",
                directionSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.656836443422!2d-87.6312603845582!3d41.900236679220434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x754eb9271a4a27fd!2sOgden%20Elementary%20School!5e0!3m2!1ses-419!2sar!4v1606339598840!5m2!1ses-419!2sar",
                time:"13:00 hs"
                
                },
                {
                day:"9/22",
                month:"september",
                team1:"U1",
                team2:"U3",
                location:"South",
                directionSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.730653315668!2d-87.65286418455756!3d41.920148579218846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1caabcbc4893f0da!2sSt%20James%20Lutheran%20School!5e0!3m2!1ses-419!2sar!4v1606340535158!5m2!1ses-419!2sar",
                time:"9:30 hs"
                },
                {
                day:"9/22",
                month:"september",
                team1:"U2",
                team2:"U6",
                directionSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5864786779157!2d-87.66530238455746!3d41.92324747921862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8b4d680e25a482e5!2sSt.%20Josaphat%20School!5e0!3m2!1ses-419!2sar!4v1606340752227!5m2!1ses-419!2sar",
                location:"Howard A Yeager",
                time:"13:00 hs"
                },
                {
                day:"9/29",
                month:"september",
                team1:"U4",
                team2:"U5",
                location:"Greenbay",
                directionSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.022981686595!2d-87.64002218455776!3d41.913864679219344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb351205fae50c6f3!2sGreenbay%20Elementary!5e0!3m2!1ses-419!2sar!4v1606339988098!5m2!1ses-419!2sar",
                time:"9:30 hs"

                },
                {
                day:"10/06",
                month:"october",
                team1:"U2",
                team2:"U5",
                location:"Marjorie P Hart",
                directionSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.289839348977!2d-87.64816138455728!3d41.92962287921805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdbff5d5dfcfcfa35!2sMarjorie%20P%20Hart%20Elementary!5e0!3m2!1ses-419!2sar!4v1606339809160!5m2!1ses-419!2sar",
                time:"13:00 hs"
                },
                {
                day:"10/06",
                month:"october",
                team1:"U1",
                team2:"U6",
                directionSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.730653315668!2d-87.65286418455756!3d41.920148579218846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1caabcbc4893f0da!2sSt%20James%20Lutheran%20School!5e0!3m2!1ses-419!2sar!4v1606340535158!5m2!1ses-419!2sar",
                location:"South",
                time:"9:30 hs"
                },
                {
                day:"10/08",
                month:"october",
                team1:"U3",
                team2:"U4",
                location:"Howard A Yeager",
                 directionSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5864786779157!2d-87.66530238455746!3d41.92324747921862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8b4d680e25a482e5!2sSt.%20Josaphat%20School!5e0!3m2!1ses-419!2sar!4v1606340752227!5m2!1ses-419!2sar",
                time:"13:00 hs"
                },
                {
                day:"10/08",
                month:"october",
                team1:"U5",
                team2:"U1",
                directionSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.022981686595!2d-87.64002218455776!3d41.913864679219344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb351205fae50c6f3!2sGreenbay%20Elementary!5e0!3m2!1ses-419!2sar!4v1606339988098!5m2!1ses-419!2sar",
                location:"Greenbay",
                time:"9:30 hs"
                },
                {
                day:"10/20",
                month:"october",
                team1:"U6",
                team2:"U3",
                directionSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.3355487036233!2d-87.64831158455799!3d41.90714487921991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5736e62f19086c62!2sNorth%20Elementary!5e0!3m2!1ses-419!2sar!4v1606340221046!5m2!1ses-419!2sar",
                location:"North",
                time:"13:00 hs"
                },
                {
                day:"10/20",
                month:"october",
                team1:"U2",
                team2:"U4",
                location:"Marjorie P Hart",
                directionSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.289839348977!2d-87.64816138455728!3d41.92962287921805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdbff5d5dfcfcfa35!2sMarjorie%20P%20Hart%20Elementary!5e0!3m2!1ses-419!2sar!4v1606339809160!5m2!1ses-419!2sar",
                time:"9:30 hs"
                },
                {
                day:"10/27",
                month:"october",
                team1:"U3",
                team2:"U1",
                location:"AJ Katzenmaier",
                directionSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.656836443422!2d-87.6312603845582!3d41.900236679220434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x754eb9271a4a27fd!2sOgden%20Elementary%20School!5e0!3m2!1ses-419!2sar!4v1606339598840!5m2!1ses-419!2sar",
                time:"13:00 hs"
                },
                {
                day:"10/27",
                month:"october",
                team1:"U5",
                team2:"U6",
                directionSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5864786779157!2d-87.66530238455746!3d41.92324747921862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8b4d680e25a482e5!2sSt.%20Josaphat%20School!5e0!3m2!1ses-419!2sar!4v1606340752227!5m2!1ses-419!2sar",
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
$base-color: #2E7D32;
.container {
  display: flex;
  justify-content: space-between;

}

.container > * {
  flex-grow: 1;
  color:$base-color;
  width: 20px;
  border:none;
  border-bottom: 1px solid;
  font-size: 18px;
}
.container :nth-child(2) {
  margin: 0 2em;
  border-right: 1px solid #707070 ;
  border-left: 1px solid #707070 ;

}



</style>