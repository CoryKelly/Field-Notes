<template>
    <v-row class="text-center">
      <v-col md="12">
          <v-card class="mx-auto pa-4 rounded" flat>
            <UserTask/>
          </v-card>
      </v-col>
    </v-row>
</template>

<script>
import UserTask from "@/components/UserTask";
  export default {
    name: 'Timeline',
    components: { UserTask }
  }
</script>
