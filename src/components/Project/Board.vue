<template>
  <div class="flex-1 bg-gray-200 px-4 py-6 mt-8 grid grid-cols-4 gap-4">
    <div
      v-for="column in columns"
      :key="column.title"
      class="bg-gray-100 rounded-lg px-3 py-3 column-width rounded mr-4"
    >
      <p class="text-gray-700 font-semibold font-sans tracking-wide text-sm">{{ column.title }}</p>
      <draggable v-model="column.issues" :animation="200" ghost-class="ghost-card" group="issues">
        <template #item="{ element, index }">
          <issue
            :issue="element"
            class="mt-3 cursor-move"
          ></issue>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script lang="ts">
import Draggable from "vuedraggable";
import Issue from "@/components/Project/Issue.vue";
import { defineComponent, onMounted, ref } from "vue";
import { getProject } from "@/services/project";
import { IColumn } from "@/interfaces/project";

export default defineComponent({
  name: "Board",
  components: {
    Draggable,
    Issue
  },
  setup(props) {
    const columns = ref<IColumn[]>();

    onMounted(() => {
      getProject().then(response => {
        columns.value = response.data.columns;
      });
    });


    return {
      columns
    };
  }
});
</script>