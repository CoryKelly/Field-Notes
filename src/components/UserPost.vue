<template>
  <div>
    <v-timeline :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item
          v-for="post in allPost"
          :key="post._id"
          color="green"
          :icon="post.icon"
      >
        <template v-slot:opposite>
            <span
                :class="`headline font-weight-bold grey--text`"
                v-text="post.date"
            ></span>
        </template>

        <v-card>
          <v-card-title class="white--text headline green lighten-0">{{ post.title }}</v-card-title>
          <v-img
              height="200px"
              :src="'https://filed-notes-app-backend.herokuapp.com/' + post.photo"
          >
          </v-img>
          <div class="text-left pa-4">
            <h3>Notes</h3>
            <div class="font-weight-light">{{ post.notes }}</div>
            <v-divider class="mt-2 mb-2 mx-4"></v-divider>
            <h3>Today's Task</h3>
            <v-list-item-subtitle>Application: {{ post.task }}</v-list-item-subtitle>
            <v-list-item-subtitle v-if="post.product">Product: {{ post.product }}</v-list-item-subtitle>
            <v-list-item-subtitle v-if="post.amount">Application Rate: {{ post.amount }} {{ post.units }} - Per 1,000
              SqFt
            </v-list-item-subtitle>
            <v-list-item-subtitle v-if="post.mowHeight || post.units">Mow Height: {{ post.mowHeight }} {{
                post.units
              }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>Zones Effected:</v-list-item-subtitle>
            <v-chip-group active-class="accent-4 white--text">
              <v-chip v-for="zone in post.zone[0].split(',')" :key="zone">{{ zone }}</v-chip>
            </v-chip-group>

            <v-card-actions class="pt-3 pb-0">
              <v-btn color="green" @click="removePost(post._id)" text>Delete</v-btn>
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
  name: "UserPost",
  data() {
    return {
      url: null,
      loading: false,
      multiLine: true,
      snackbar: false,
      text: `Post deleted successfully`,
    }
  },
  computed: {
    ...mapState({
      allPost: 'collection'
    })
  },
  methods: {
    ...mapActions(['deletePost']),
    async removePost(postId) {
      await this.deletePost(postId)
      await location.reload()
      this.snackbar = true
    }
  }
}
</script>

