<template>
  <div>
    <v-container>
      <v-row justify="space-around">
        <v-card width="1400">
          <v-img height="460px" src="../assets/LCN.jpg" >
            <v-card-title class="black--text mt-8">
              <p class="green--text ml-3 display-1 font-weight-bold">
                All-Liquid Plan
              </p>
            </v-card-title>
          </v-img>

          <v-card-text>
            <div class="font-weight-bold ml-8 mb-2">{{ today }}</div>

            <v-timeline align-top dense>
              <v-timeline-item
                  v-for="plan in lawnplan"
                  :key="plan.id"
                  large
              >
                <template v-slot:icon>
                  <v-avatar size="52">
                    <img v-if="plan.fert" src="../assets/Thow.png">
                    <img v-if="!plan.fert" src="../assets/lawn-icon.jpg">
                  </v-avatar>
                </template>

                <v-card :color="plan.color" :width="plan.width" dark class="mb-10">
                  <v-card-title class="title">
                   {{ plan.title }}
                  </v-card-title>

                  <v-list v-if="plan.rounds" light three-line>
                    <v-list-item v-for="product in plan.rounds" :key="product.id">

                      <v-list-item-content>
                        <v-list-item-title class="title">{{ product.title }}</v-list-item-title>
                        <v-list-item-subtitle><b>Rate: {{ product.rate }} </b> </v-list-item-subtitle>
                        <v-list-item-subtitle><b>Coverage: {{ product.coverage }}</b></v-list-item-subtitle>
                      </v-list-item-content>

                    </v-list-item>
                  </v-list>

                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import moment from "moment/moment"
moment.suppressDeprecationWarnings = true
export default {
  name: 'LawnPlan',
  data() {
    return {
      today: moment().format("dddd, MMMM Do YYYY"),
      lawnplan: [
        {
          id: 1,
          title: 'Round 1: When soil temps near 55°F',
          color: 'light-green',
          width: 600,
          fert: true,
          rounds: [
            {
              id: 1,
              title: "18-0-1 Greene Punch",
              rate: '16 oz',
              coverage: '1,000 sq ft'
            },
            {
              id: 2,
              title: "7-0-0 Greene Effect",
              rate: '6 oz',
              coverage: '1,000 sq ft'
            },
            {
              id: 3,
              title: "Prodiamine Pre-Emergent",
              rate: '3 lbs',
              coverage: '1,000 sq ft'
            },
            {
              id: 4,
              title: "Humic12",
              rate: '6 oz',
              coverage: '1,000 sq ft'
            },
            {
              id: 4,
              title: "RGS - Root Growth Stimulant",
              rate: '3 oz',
              coverage: '1,000 sq ft'
            }
          ]
        },
        {
          title: "Enjoy The Mow!",
          color: 'green darken-3',
          width: 190,
        },
        {
          id: 1,
          title: 'Round 2: When soil temps approach 65°F heading to 70°F',
          color: 'light-green',
          width: 600,
          fert: true,
          rounds: [
            {
              id: 1,
              title: "18-0-1 Greene Punch",
              rate: '16 oz',
              coverage: '1,000 sq ft'
            },
            {
              id: 2,
              title: "7-0-0 Greene Effect",
              rate: '6 oz',
              coverage: '1,000 sq ft'
            },
            {
              id: 3,
              title: "Prodiamine Pre-Emergent",
              rate: '3 lbs',
              coverage: '1,000 sq ft'
            },
            {
              id: 5,
              title: "RGS - Root Growth Stimulant",
              rate: '3 oz',
              coverage: '1,000 sq ft'
            },
            {
              id: 6,
              title: "Air-8",
              rate: '9 oz',
              coverage: '1,000 sq ft'
            },
            {
              id: 7,
              title: "Fungicide - bullet proof strategy",
              rate: '3 lbs',
              coverage: '1,000 sq ft'
            }
          ]
        },
        {
          title: "Enjoy The Mow!",
          color: 'green darken-3',
          width: 190,
        },
        {
          id: 1,
          title: 'Round 3: 4-6 weeks after the previous fertilizer application',
          color: 'light-green',
          width: 600,
          fert: true,
          rounds: [
            {
              id: 1,
              title: "0-0-2 MicroGreene",
              rate: '12 oz',
              coverage: '1,000 sq ft'
            },
            {
              id: 4,
              title: "Humic12",
              rate: '6 oz',
              coverage: '1,000 sq ft'
            },
            {
              id: 5,
              title: "RGS - Root Growth Stimulant",
              rate: '3 oz',
              coverage: '1,000 sq ft'
            }
          ]
        },
        {
          title: "Enjoy The Mow!",
          color: 'green darken-3',
          width: 190,
        },
        {
          id: 1,
          title: 'Round 4: 4-6 weeks after previous fertilizer application',
          color: 'light-green',
          width: 600,
          fert: true,
          rounds: [
            {
              id: 1,
              title: "0-0-2 MicroGreene",
              rate: '12 oz',
              coverage: '1,000 sq ft'
            },
            {
              id: 4,
              title: "Humic12",
              rate: '6 oz',
              coverage: '1,000 sq ft'
            },
            {
              id: 5,
              title: "RGS - Root Growth Stimulant",
              rate: '3 oz',
              coverage: '1,000 sq ft'
            }
          ]
        },
        {
          title: "Enjoy The Mow!",
          color: 'green darken-3',
          width: 190,
        },
        {
          id: 1,
          title: 'Round 5: As soil temps fall to 70°F',
          color: 'light-green',
          width: 600,
          fert: true,
          rounds: [
            {
              id: 1,
              title: "18-0-1 Greene Punch",
              rate: '16 oz',
              coverage: '1,000 sq ft'
            },
            {
              id: 4,
              title: "7-0-0 Greene Effect",
              rate: '6 oz',
              coverage: '1,000 sq ft'
            },
            {
              id: 5,
              title: "RGS - Root Growth Stimulant",
              rate: '9 oz',
              coverage: '1,000 sq ft'
            },
            {
              id: 6,
              title: "Air-8",
              rate: '3 oz',
              coverage: '1,000 sq ft'
            }
          ]
        },
        {
          title: "Enjoy The Mow!",
          color: 'green darken-3',
          width: 190,
        },
        {
          id: 1,
          title: 'Round 6: 4-5 weeks after previous application',
          color: 'light-green',
          width: 600,
          fert: true,
          rounds: [
            {
              id: 1,
              title: "18-0-1 Greene Punch",
              rate: '16 oz',
              coverage: '1,000 sq ft'
            },
            {
              id: 4,
              title: "7-0-0 Greene Effect",
              rate: '6 oz',
              coverage: '1,000 sq ft'
            },
            {
              id: 5,
              title: "RGS - Root Growth Stimulant",
              rate: '3 oz',
              coverage: '1,000 sq ft'
            },
            {
              id: 6,
              title: "Humic12",
              rate: '6 oz',
              coverage: '1,000 sq ft'
            },
            {
              id: 6,
              title: "Prodiamine Pre-Emergent - for winter annuals",
              rate: '3 lbs',
              coverage: '1,000 sq ft'
            }
          ]
        }
      ]
    }
  },

}
</script>

<style scoped>

</style>
