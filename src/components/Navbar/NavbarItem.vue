<template>
  <div class="flex items-center w-full py-2 px-4 rounded-md hover:bg-gray-100 hover:text-blue-700 text-gray-500 cursor-pointer">
    <div class="mr-2">
      <slot name="icon" />
    </div>
    <span class="flex-1 text-gray-900">{{ title }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "NavbarItem",
  props: {
    title: {
      type: String as PropType<string>
    }
  }
});
</script>