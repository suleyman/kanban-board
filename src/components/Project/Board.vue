<template>
  <div class="flex-1 bg-gray-200 px-4 py-6 mt-8 grid grid-cols-4 gap-4">
    <div>
      OPEN
      <issue />
    </div>
    <div>
      IN PROGRESS
      <issue />
    </div>
  </div>
</template>

<script lang="ts">
import Issue from "@/components/Project/Issue.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Board",
  components: {
    Issue
  }
});
</script>