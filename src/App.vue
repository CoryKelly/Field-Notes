<template>
  <v-app>
      <v-snackbar v-model="firstWarning" :timeout="timeout" :multi-line="multiLine">{{ firstWarningText.title }}<br/>{{ firstWarningText.body }}
        <template v-slot:action="{ attrs }"><v-btn color="green" text v-bind="attrs" @click="firstWarning = false">
          Close
        </v-btn>
        </template>
      </v-snackbar>
    <v-snackbar v-model="secondWarning" :timeout="timeout" :multi-line="multiLine">{{ secondWarningText.title }}<br/>{{ secondWarningText.body }}
        <template v-slot:action="{ attrs }"><v-btn color="green" text v-bind="attrs" @click="secondWarning = false">
          Close
        </v-btn>
        </template>
      </v-snackbar>
    <v-app-bar app color="white" flat>
      <div class="d-flex align-center">
        <router-link style="display: inline-block;text-decoration: none; color: black" to="/task/all">
          <span class="font-weight-light title">Field</span>
          <span class="font-weight-bold title">Notes</span>
        </router-link>
      </div>
      <v-spacer></v-spacer>

      <router-link to="/task/create">
        <v-btn  target="_blank" text>
          <span class="mr-2">Create Task</span>
          <v-icon>mdi-border-color</v-icon>
        </v-btn>
      </router-link>


      <router-link to="/calculations">
        <v-btn  target="_blank" text>
          <span class="mr-2">Calculations</span>
          <v-icon>mdi-calculator</v-icon>
        </v-btn>
      </router-link>


      <router-link to="/lawnplan">
        <v-btn  target="_blank" text>
          <span class="mr-2">Lawn Plans</span>
          <v-icon>mdi-calendar-text</v-icon>
        </v-btn>
      </router-link>

      <span style="font-weight: 500;" class="mr-1 bold pl-2">Today's 24Hr Avg</span><v-icon>mdi-thermometer</v-icon>
      <v-chip-group  v-for="soil in dailySoilTemp" :key="soil._id" active-class="accent-4 white--text">
        <v-chip v-for="temp in soil" :key="temp._id"> <b>{{ temp.soil_temp_0to10cm.value }}{{ temp.soil_temp_0to10cm.unit }}°</b></v-chip>
      </v-chip-group>

      <v-icon>mdi-water</v-icon>
      <v-chip-group  v-for="soilMoist in dailySoilMoist" :key="soilMoist._id" active-class="accent-4 white--text">
        <v-chip v-for="moist in soilMoist" :key="moist._id"> <b>{{ moist.soil_moisture_0to10cm.value }}{{  moist.soil_moisture_0to10cm.unit  }}</b></v-chip>
      </v-chip-group>

    </v-app-bar>
    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
.container{
  max-width: 95%;
}
</style>

<script>
import axios from "axios";

export default {
  name: 'App',
  data() {
    return {
      filteredSoilTemp: [],
      multiLine: true,
      timeout: 20000,
      firstWarning: false,
      secondWarning: false,
      firstWarningText: {
        title: "Warning: FIRST round of Prodiamine.",
        body: "This first application of Prodiamine, apply at 3 lbs/1,000 sq ft."
      },
      secondWarningText: {
        title: 'Warning: SECOND round of Prodiamine',
        body: "This first application of Prodiamine, apply at 3 lbs/1,000 sq ft."
      },
      dailySoilTemp: null,
      dailySoilMoist: null
    }
  },
  created() {
    this.getTools()
  },
  methods: {
   async getTools() {
     let date = new Date()
     let startTime = this.getTime(date.setDate(date.getDate() - 1))
     let endTime = this.getTime(Date.now())

     await axios.get(`https://ag.us.clearapis.com/v1.1/daily/soil?app_id=a2f0d7a4&app_key=742a069efe55c7015c2245032fb16bbb&location=36.3986944,-86.5533952&start=${startTime}&end=${endTime}`)
         .then((response) => {
          this.dailySoilTemp = response.data
           this.getProdiamineWarning()
         })

       await axios.get(`https://ag.us.clearapis.com/v1.1/daily/soil?app_id=a2f0d7a4&app_key=742a069efe55c7015c2245032fb16bbb&location=36.3986944,-86.5533952&start=${startTime}&end=${endTime}&unitcode=si-std`)
           .then((response) => {
             this.dailySoilMoist = response.data
           })
   },
   getTime() {
     return new Date().getTime() / 1000;
   },
    getProdiamineWarning() {
     let tempObj = []
      for (let key in this.dailySoilTemp) {
        let position = this.dailySoilTemp[key];
        for (let group_key in position) {
          let stat_group = position[group_key];
          for (let stat_key in stat_group) {
            tempObj.push(stat_group[stat_key])
          }
        }
      }
      this.filteredSoilTemp.push(tempObj.filter(v => v.unit === "F"))
      if(this.filteredSoilTemp[0][0].value >= 50 && this.filteredSoilTemp[0][0].value <= 55) {
          this.firstWarning = true
      } else if(this.filteredSoilTemp[0][0].value >= 65 && this.filteredSoilTemp[0][0].value <= 70) {
          this.secondWarning = true
      }
   }
 }
}
</script>
