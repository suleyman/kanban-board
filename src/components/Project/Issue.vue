<template>
  <div class="bg-white rounded-lg shadow shadow-gray-300 px-4 py-3">
    <h6 class="font-medium">{{ issue.title }}</h6>
    <p>
      Lorem ipsum dolor sit amet
    </p>
    <span>{{ issue.type }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IIssue } from "@/interfaces/issue";

export default defineComponent({
  name: "Issue",
  props: {
    issue: {
      type: Object as PropType<IIssue>,
      required: true
    }
  }
});
</script>