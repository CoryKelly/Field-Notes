<template>
  <div>
    <v-timeline :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item
          v-for="task in allTask"
          :key="task._id"
          color="green"
          large
      >
        <template v-slot:icon>
          <v-avatar style="width: 90px;">
            <img src="../assets/lawn-icon.jpg">
          </v-avatar>
        </template>

        <template v-slot:opposite>
            <span
                :class="`headline font-weight-bold grey--text`"
                v-text="task.date"
            ></span>
        </template>

        <v-card>
          <v-card-title class="white--text headline green lighten-0">{{ task.title }}</v-card-title>
          <router-link :to="'/task/' + task._id">
            <v-img
                height="200px"
                :src="'https://field-notes-server.herokuapp.com/static/' + task.photo"
            >
            </v-img>
          </router-link>
          <div class="text-left pa-4">
            <h3>Notes</h3>
            <div class="font-weight-light">{{ task.notes }}</div>
            <v-divider class="mt-2 mb-2 mx-4"></v-divider>
            <h3>Today's Task</h3>
            <v-list-item-subtitle>Application: {{ task.task }}</v-list-item-subtitle>
            <v-list-item-subtitle v-if="task.product">Product: {{ task.product }}</v-list-item-subtitle>
            <v-list-item-subtitle v-if="task.amount">Application Rate: {{ task.amount }} {{ task.units }} - Per 1,000
              SqFt
            </v-list-item-subtitle>
            <v-list-item-subtitle v-if="task.mowHeight">Mow Height: {{ task.mowHeight }} {{ task.units }}</v-list-item-subtitle>
            <v-list-item-subtitle>Zones Effected:</v-list-item-subtitle>
            <v-chip-group active-class="accent-4 white--text">
              <v-chip v-for="zone in task.zone[0].split(',')" :key="zone">{{ zone }}</v-chip>
            </v-chip-group>

            <v-card-actions class="pt-3 pb-0">
              <v-btn color="green" @click="removeTask(task._id)" text>Delete</v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </v-timeline-item>
    </v-timeline>
    <div class="text-center">
      <v-snackbar v-model="snackbar" :multi-line="multiLine">{{ text }}
        <template v-slot:action="{ attrs }">
          <v-btn color="red" text v-bind="attrs" @click="snackbar = false">Close</v-btn>
        </template>
      </v-snackbar>
    </div>
  </div>
</template>

<style>
.v-list-item__subtitle {
  color: rgba(0, 0, 0, .6);
}

.v-card__subtitle, .v-card__text, .v-card__title {
  padding-top: 7px;
  padding-bottom: 7px;
}
</style>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: "Usertask",
  data() {
    return {
      url: null,
      loading: false,
      multiLine: true,
      snackbar: false,
      text: `task deleted successfully`,
    }
  },
  computed: {
    ...mapState({
      allTask: 'collection'
    })
  },
  methods: {
    ...mapActions(['deleteTask']),
    async removeTask(taskId) {
      await this.deleteTask(taskId)
      await location.reload()
      this.snackbar = true
    }
  }
}
</script>

