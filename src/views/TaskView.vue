<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-card width="1200" flat rounded class="pa-6">
          <v-row justify="center" class="text-center">
            <v-col md="12" sm="12">
              <UserForm/>
            </v-col>
          </v-row>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import UserForm from "@/components/UserForm";
export default {
  name: "TaskView",
  components: { UserForm }
}
</script>

<style scoped>

</style>
