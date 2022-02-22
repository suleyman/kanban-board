<template>
  <div class="h-full flex flex-col">
    <div class="px-4">
      <div class="h-16 flex items-center">
        <nav>
          <ul class="flex">
            <li>
              Kanban
            </li>
            <li>
              Product Design
            </li>
            <li>
              Mobile UI/UX
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex gap-2">
          <img src="https://via.placeholder.com/30x30" class="rounded-full" alt="User 1" width="30" height="30" />
          <img src="https://via.placeholder.com/30x30" class="rounded-full" alt="User 1" width="30" height="30" />
          <img src="https://via.placeholder.com/30x30" class="rounded-full" alt="User 1" width="30" height="30" />
          <button type="button" class="bg-blue-800 text-white rounded-lg w-14">+</button>
        </div>
      </div>
      <h1 class="text-3xl font-bold mt-16">Project Name</h1>
    </div>
    <board />
  </div>
</template>

<script lang="ts">
import Board from "@/components/Project/Board.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Project",
  components: { Board }
});
</script>