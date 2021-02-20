<template>
  <v-app>
    <v-app-bar app color="white" flat>
      <div class="d-flex align-center">
        <router-link style="display: inline-block;text-decoration: none; color: black" to="/posts">
          <span class="font-weight-light title">Field</span>
          <span class="font-weight-bold title">Notes</span>
        </router-link>
      </div>
      <v-spacer></v-spacer>

      <router-link to="/posts/createPost">
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
export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
