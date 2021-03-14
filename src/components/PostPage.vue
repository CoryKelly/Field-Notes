<template>
  <div>
    <v-row justify="center">
      <v-col cols="10">

        <v-card
            v-for="post in Post"
            :key="post._id"
            style="border-left: #4CAF50  solid 7px"
            class="pa-4"
        >
          <v-row justify="end">
            <v-col cols="6">
              <h2 class="text-center display-2 pb-3 mt-4">{{ post.title }}</h2>
              <h3 class="body-1">{{ post.notes }}</h3>
              <v-divider class="mx-1 mt-5 mb-5"></v-divider>

              <h4 class="subtitle-1"><b>Application:</b> {{ post.task }}</h4>
              <h4 v-if="post.product" class="subtitle-1"><b>Product:</b> {{ post.product }}</h4>
              <h4 class="subtitle-1"><b>Task Date:</b> {{ post.date }}</h4>
              <h4 class="subtitle-1" v-if="post.mowHeight"><b>Mow Height:</b> {{ post.mowHeight }}
                {{ post.units }}</h4>
              <h4 class="subtitle-1" v-if="post.amount"> <b>Application Rate:</b> {{ post.amount }} {{ post.units }} - Per
                1,000</h4>
              <h4 class="subtitle-1"><b>Zones Effected:</b></h4>
              <v-chip-group active-class="accent-4 white--text">
                <v-chip v-for="zone in post.zone[0].split(',')" :key="zone">{{ zone }}</v-chip>
              </v-chip-group>
            </v-col>
            <v-col cols="6">
              <v-img
                  height="700px"
                  :src="'https://filed-notes-app-backend.herokuapp.com/' + post.photo"
              ></v-img>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PostPage",
  data() {
    return {
      Post: null,
      Soil: null
    }
  },
  mounted() {
    this.fetchPost()
  },
  methods: {
    async fetchPost() {
      await axios.get('https://filed-notes-app-backend.herokuapp.com/posts/' + this.$route.params.postId)
          .then((response) => {
            this.Post = response.data
            console.log(this.Post)
          })
    }
  }
}
</script>

<style scoped>

</style>
