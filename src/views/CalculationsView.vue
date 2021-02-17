<template>
  <div>
    <v-container>
      <v-row justify="center" class="text-center">
        <v-col cols="12">
          <h1>Calculations Page</h1>
          <Calculations/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Calculations from "@/components/Calculations";
export default {
  name: 'CalculationsView',
  components: { Calculations }
}
</script>
