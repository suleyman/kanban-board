<template>
  <header class="fixed h-full w-72 border border-r-gray-200">
    <div class="flex items-center h-16 px-6 py-2 border-b border-b-gray-200">
      <span class="flex items-center justify-center w-10 h-10 bg-blue-800 text-white rounded-lg">K</span>
      <strong class="ml-4">Kanban Board</strong>
    </div>
    <div class="px-6 py-4">
      <button type="button" class="block w-full bg-blue-800 text-white p-3 rounded-lg mb-4">New Task</button>
      <navbar-item />
      <navbar-item />
      <navbar-item />
      <h4>General</h4>
      <navbar-item />
      <navbar-item />
      <navbar-item />
      <h4>General</h4>
      <navbar-item />
      <navbar-item />
      <navbar-item />
    </div>
  </header>
</template>

<script lang="ts">
import NavbarItem from "@/components/Navbar/NavbarItem.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
  components: {
    NavbarItem
  }
});
</script>