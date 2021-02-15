<template>
    <v-row>
      <v-col style="padding-left: 0;padding-top: 0; padding-bottom: 0;" cols="4">
        <v-img
            height="100%"
            src="https://freshexchange.com/assets/Monday_Words_01-5.jpg"
        >
        </v-img>
      </v-col>
      <v-col cols="8">
        <form>
          <v-row>
            <v-col cols="6">
              <!-- TASK TITLE -->
              <v-text-field
                  v-model="title"
                  label="Event Title"
                  required
                  outlined
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <!-- SELECTED TASKS -->
              <v-select
                  v-model="selectedTask"
                  :items="tasks"
                  label="Enter task"
                  required
                  outlined
                  @change="$v.select.$touch()"
                  @blur="$v.select.$touch()"
              ></v-select>
            </v-col>
          </v-row>

          <!-- PRODUCT OPTIONS -->
          <v-row>
            <v-col cols="6">
              <v-text-field
                  v-if="selectedTask === 'Biostimulants' ||
                selectedTask === 'Fungicide' ||
                selectedTask === 'Granular Application' ||
                selectedTask === 'Liquid Application' ||
                selectedTask === 'Post-Emergent' ||
                selectedTask === 'Pre-Emergent'"
                  v-model="selectedProduct"
                  label="Product Name"
                  required
                  outlined
              ></v-text-field>
            </v-col>

            <v-col cols="6">
              <!-- AMOUNT  -->
              <v-text-field
                  v-if="selectedTask === 'Biostimulants' ||
                selectedTask === 'Fungicide' ||
                selectedTask === 'Granular Application' ||
                selectedTask === 'Liquid Application' ||
                selectedTask === 'Post-Emergent' ||
                selectedTask === 'Pre-Emergent'"
                  v-model="selectedAmount"
                  label="Product Amount"
                  required
                  outlined
              ></v-text-field>
            </v-col>
          </v-row>

          <!-- MOW HEIGHT  -->
          <v-text-field
              v-if="selectedTask === 'Mow'"
              v-model="selectedMowHeight"
              label="Mow Height"
              required
              outlined
          ></v-text-field>

          <!-- UNIT  -->
          <v-select
              v-if="selectedTask === 'Biostimulants' ||
                selectedTask === 'Fungicide' ||
                selectedTask === 'Mow' ||
                selectedTask === 'Granular Application' ||
                selectedTask === 'Liquid Application' ||
                selectedTask === 'Post-Emergent' ||
                selectedTask === 'Pre-Emergent'"
              v-model="selectedUnits"
              :items="units"
              label="Units"
              required
              outlined
              @change="$v.select.$touch()"
              @blur="$v.select.$touch()"
          ></v-select>

          <v-row>
            <v-col cols="6">
              <!-- SELECTED ZONE  -->
              <v-select
                  v-model="selectedZone"
                  :items="zones"
                  label="Zones"
                  multiple
                  chips
                  persistent-hint
                  outlined
              ></v-select>
            </v-col>

            <v-col cols="6">
              <!--  DATE PICKER  -->
              <v-dialog
                  ref="dialog"
                  v-model="modal"
                  :return-value.sync="date"
                  persistent
                  width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                      v-model="date"
                      label="Picker in dialog"
                      prepend-icon="mdi-calendar"
                      readonly
                      outlined
                      v-bind="attrs"
                      v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal = false">Cancel
                  </v-btn>
                  <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <!-- USER NOTES -->
              <v-textarea
                  v-model="notes"
                  clearable
                  clear-icon="mdi-close-circle"
                  label="Notes"
                  value="This is clearable text."
                  outlined
              ></v-textarea>
            </v-col>
          </v-row>


          <v-row justify="end">
            <v-col cols="5">
              <!-- SUBMIT BUTTON -->
              <v-btn class="mr-4" @click="submit">
                submit
              </v-btn>
              <v-btn @click="clear">
                clear
              </v-btn>
            </v-col>
          </v-row>

        </form>
      </v-col>
    </v-row>
</template>

<style>
.v-select__selections {
min-height: 42px!important;
}
</style>



<script>
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
export default {
  name: 'UserForm',
  mixins: [validationMixin],

  validations: {
    select: { required }
  },
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      title: '',
      notes: '',
      selectedTask: null,
      selectedProduct: null,
      selectedZone: [],
      selectedMowHeight: null,
      selectedAmount: null,
      selectedUnits: null,
      mowHeight: '',
      amount: '',
      product: '',
      menu: false,
      modal: false,
      units: [
        'Feet',
        'Fluid Onces',
        'Gallon',
        'Hour',
        'Inches',
        'Minute',
        'Onces',
        'Pint',
        'Pound',
        'Quart',
        'SecondYard'
      ],
      zones: ['Front','Back','Hot Side','Cool Side','All'],
      tasks: [
        'Biostimulants',
        'Edge',
        'Fungicide',
        'Granular Application',
        'Liquid Application',
        'Mow',
        'Overseed',
        'Post-Emergent',
        'Pre-Emergent',
        'Water'
      ]
    }
  },
  methods: {
    submit () {
      this.$v.$touch()
      this.$store.commit('SET_TASKS', {
        title: this.title,
        notes: this.notes,
        task: this.selectedTask,
        product: this.selectedProduct,
        amount: this.selectedAmount,
        units: this.selectedUnits,
        zone: this.selectedZone,
        mowHeight: this.selectedMowHeight,
        date: this.date,
      });
      this.clear()
    },
    clear () {
      this.$v.$reset()
      this.select = null
      this.title = ''
      this.selectedTask = null
      this.selectedZone = null
      this.notes = ''
      this.product = ''
      this.amount = ''
      this.selectedMowHeight = null
    },
  },
}
</script>
