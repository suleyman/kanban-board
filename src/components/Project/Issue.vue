<template>
  <div class="bg-white shadow rounded px-3 pt-3 pb-5 border border-white">

    <p class="text-gray-700 font-semibold font-sans tracking-wide text-lg">{{ issue.title }}</p>

    <div class="flex mt-4 justify-between items-center">
      <div
        v-if="issue.type"
        class="px-3 h-6 rounded-full text-xs font-semibold flex items-center"
        :class="[badgeColor.bg, badgeColor.text]"
      >
        <span class="w-2 h-2 rounded-full mr-1" :class="[badgeColor.icon]"></span>
        <span>
          {{ issue.type }}
        </span>
      </div>
      <img
        class="w-6 h-6 rounded-full ml-3"
        src="https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png"
        alt="Avatar"
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import { IIssue } from "@/interfaces/issue";
import { IssueType } from "@/enums/issue";

export default defineComponent({
  name: "Issue",
  props: {
    issue: {
      type: Object as PropType<IIssue>,
      required: true
    }
  },
  setup(props) {
    const badgeColor = computed(() => {
      const mappings: Record<IssueType, any> = {
        [IssueType.BUG]: {
          bg: "bg-red-100",
          icon: "bg-red-400",
          text: "text-red-700"

        },
        [IssueType.TASK]: {
          bg: "bg-blue-100",
          icon: "bg-blue-400",
          text: "text-blue-700"
        },
        [IssueType.STORY]: {
          bg: "bg-purple-100",
          icon: "bg-purple-400",
          text: "text-purple-700"
        }
      };
      return mappings[props.issue.type];
    });

    return {
      badgeColor
    };
  }
});
</script>