<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-card width="1400" flat rounded class="pa-6 mt-10">
          <v-row justify="center" class="text-center">
            <v-col sm="12">
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
