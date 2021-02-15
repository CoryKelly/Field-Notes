<template>
  <div>
    <Timeline />
  </div>
</template>

<style>
 .v-main__wrap {
   background-color: #f4f4f4;
   border: thin solid rgba(0,0,0,.12)
 }
</style>


<script>
import Timeline from "@/components/Timeline";
export default {
  name: 'TimelineView',
  components: {
    Timeline
  }
}
</script>

