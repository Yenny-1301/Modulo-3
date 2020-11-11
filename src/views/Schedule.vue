<template>
  <div class="schedule">
   <Acordeon />
  </div>
</template>

<script>
// @ is an alias to /src
import Acordeon from '@/components/Acordeon.vue'

export default {
  name: 'Schedule',
  data: function(){
    return{
      gameInfo:[
        {
          september:{
            one:{
              info:{
                day:"9/01",
                teamOne:{
                  team1:"U1",
                  team2:"U4",
                  location:"AJ Katzenmaier",
                  times:"9:30 a.m."
                },
                teamTwo:{
                  team1:"U3 ",
                  team2:" U2",
                  location:"Greenbay ",
                  times:"1:00 p.m"
                }

              }
            },
            two:{
            info:{
                day:"9/08",
                teamOne:{
                  team1:"U5",
                  team2:"U6",
                  location:"Howard A Yeager",
                  times:"9:30 a.m."
                },
                teamTwo:{
                  team1:"U6",
                  team2:" U1",
                  location:"Marjorie P HartGreenbay ",
                  times:"1:00 p.m"
                }

              }

            },
            three:{
              info:{
                day:"9/15",
                teamOne:{
                  team1:"U2",
                  team2:"U4",
                  location:"North",
                  times:"9:30 a.m."
                },
                teamTwo:{
                  team1:"U3",
                  team2:" U5",
                  location:"AJ Katzenmaier",
                  times:"1:00 p.m"
                }

              }

            },
            four:{
               info:{
                day:"9/22",
                teamOne:{
                  team1:"U1",
                  team2:"U3",
                  location:"South",
                  times:"9:30 a.m."
                },
                teamTwo:{
                  team1:"U2",
                  team2:" U6",
                  location:"Howard A Yeager",
                  times:"1:00 p.m"
                }
              }
            },
            five:{
              info:{
                day:"9/29",
                teamOne:{
                 team1:"U4",
                  team2:" U5",
                  location:"Greenbay ",
                  times:"1:00 p.m"
                },
              }
            }
          },
          october:{
             one:{
              info:{
                day:"10/06",
                teamOne:{
                  team1:"U2",
                  team2:"U5",
                  location:"Marjorie P Hart",
                  times:"9:30 a.m."
                },
                teamTwo:{
                  team1:"U1",
                  team2:" U6",
                  location:"South",
                  times:"1:00 p.m"
                }

              }
            },
            two:{
            info:{
                day:"10/13",
                teamOne:{
                  team1:"U3",
                  team2:"U4",
                  location:"Howard A Yeager",
                  times:"9:30 a.m."
                },
                teamTwo:{
                  team1:"U5",
                  team2:" U1",
                  location:"Greenbay",
                  times:"1:00 p.m"
                }

              }

            },
            three:{
              info:{
                day:"10/20",
                teamOne:{
                  team1:"U6",
                  team2:"U3",
                  location:"North",
                  times:"9:30 a.m."
                },
                teamTwo:{
                  team1:"U2",
                  team2:" U4",
                  location:"Marjorie P Hart",
                  times:"1:00 p.m"
                }

              }

            },
            four:{
               info:{
                day:"10/27",
                teamOne:{
                  team1:"U3",
                  team2:"U1",
                  location:"AJ Katzenmaier",
                  times:"9:30 a.m."
                },
                teamTwo:{
                  team1:"U5",
                  team2:" U6",
                  location:"Howard A Yeager",
                  times:"1:00 p.m"
                }
              }
            }

          }
        }
      ]
    }
  },
  components:{
    Acordeon
  }
}
</script>