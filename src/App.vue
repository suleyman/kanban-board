<template>
  <div class="h-full">
    <navbar />
    <router-view class="ml-72" />
  </div>
</template>

<script lang="ts">
import Navbar from "@/components/Navbar/Navbar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Project",
  components: {
    Navbar
  }
});
</script>