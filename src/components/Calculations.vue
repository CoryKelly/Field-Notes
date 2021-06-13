<template>
  <v-container>
    <v-card flat rounded class="pa-7">

      <v-row justify="start">
        <v-col cols="5">
          <v-text-field
              v-model="nitrogen"
              label="Nitrogen (N)"
              required
          ></v-text-field>

          <v-text-field
              v-model="phosphorus"
              label="Phosphorus (P)"
              required
          ></v-text-field>

          <v-text-field
              v-model="potassium"
              label="Potassium (K)"
              required
          ></v-text-field>

          <v-text-field
              v-model="area"
              label="Area"
              required
          ></v-text-field>

          <v-text-field
              v-model="desiredN"
              label="Desired (N)"
              required
          ></v-text-field>

          <v-col>
            <v-btn class="mr-4" @click="submit">submit</v-btn>

            <v-btn @click="clear">clear</v-btn>
          </v-col>

        </v-col>

        <v-divider vertical class="mx-auto"></v-divider>

        <v-col cols="6">
          <v-card  class="mt-1" flat rounded min-height="400" color="grey lighten-5">

            <v-list-item class="text-left">
              <v-list-item-content>
                <h3 class="mb-2" v-if="poundsNeeded">Results</h3>
                <v-list-item-title class="mb-1" v-if="poundsNeeded">
                  <v-icon medium color="green">mdi-leaf</v-icon> You need <b>{{ poundsNeeded.toPrecision(2) }}</b> Lbs of fertilizer.</v-list-item-title>
                <v-list-item-title v-if="nGiven"> <v-icon medium color="green">mdi-leaf</v-icon> You will add <b>{{ nGiven }}</b> Lbs of N / 1000ft</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

          </v-card>

        </v-col>

      </v-row>

    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Calculations",
  data() {
    return {
      nitrogen: null,
      phosphorus: null,
      potassium: null,
      area: null,
      desiredN: null,
      poundsNeeded: null,
      nGiven: null,
    }
  },
  methods: {
    submit() {
      let numDesiredN = this.desiredN
      let decimalN = this.nitrogen / 100
      let lbsNeeded = numDesiredN / decimalN
      let lawnSize = this.area
      this.poundsNeeded = lbsNeeded * (lawnSize / 1000)
      this.nGiven = lbsNeeded * decimalN
      this.clear()
    },
    clear() {
      this.nitrogen = null
      this.phosphorus = null
      this.potassium = null
      this.area = null
      this.desiredN = null
    }
  }
}
</script>
