<template>
      <v-timeline :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item
            v-for="task in allTasks"
            :key="task"
            color="green"
            :icon="task.icon"
        >
          <template v-slot:opposite>
            <span
                :class="`headline font-weight-bold grey--text`"
                v-text="task.date"
            ></span>
          </template>

              <v-card>
                <v-card-title class="white--text headline green lighten-0">{{ task.title }}</v-card-title>
                <v-img
                    height="200px"
                    src=""
                >
                </v-img>
                <div class="text-left pa-4">
                  <h3>Notes</h3>
                  <div class="font-weight-light" >{{ task.notes }}</div>
                  <v-divider class="mt-2 mb-2 mx-4"></v-divider>
                  <h3>Today's Task</h3>
                  <v-list-item-subtitle>Application: {{ task.task }}</v-list-item-subtitle>
                  <v-list-item-subtitle v-if="task.product">Product: {{ task.product }}</v-list-item-subtitle>
                  <v-list-item-subtitle v-if="task.amount">Application Rate: {{ task.amount }} {{ task.units }} - Per 1,000 SqFt</v-list-item-subtitle>
                  <v-list-item-subtitle v-if="task.mowHeight" >Mow Height: {{ task.mowHeight }} {{ task.units }}</v-list-item-subtitle>
                  <v-list-item-subtitle>Zones Effected:</v-list-item-subtitle>
                    <v-chip-group
                        active-class="accent-4 white--text"
                    >
                      <v-chip v-for="zone in task.zone" :key="zone">{{ zone }}</v-chip>
                    </v-chip-group>
                </div>
              </v-card>

        </v-timeline-item>
      </v-timeline>
</template>

<style>
.v-list-item__subtitle {
  color: rgba(0,0,0,.6);
}
.v-card__subtitle, .v-card__text, .v-card__title {
  padding-top: 7px;
  padding-bottom: 7px;
}
</style>

<script>
import { mapState } from 'vuex'
export default {
  name: "UserPost",
  data() {
    return {
      url: null,
      loading: false,
    }
  },
  computed: {
    ...mapState({
      allTasks: 'collection'
    })
  }
}
</script>

