<template>
  <div class="flex-1 bg-gray-200 px-4 py-6 mt-8 grid grid-cols-4 gap-4">
    <div>
      OPEN
      <template v-for="issue in openIssues">
        <issue />
      </template>
    </div>
    <div>
      IN PROGRESS
      <template v-for="issue in inProgressIssues">
        <issue />
      </template>
    </div>
    <div>
      TEST
      <template v-for="issue in testIssues">
        <issue />
      </template>
    </div>
    <div>
      DONE
      <template v-for="issue in doneIssues">
        <issue />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Issue from "@/components/Project/Issue.vue";
import { computed, defineComponent, PropType } from "vue";
import { IIssue } from "@/interfaces/issue";
import { IssueStatus } from "@/enums/issue";

export default defineComponent({
  name: "Board",
  components: {
    Issue
  },
  props: {
    issues: {
      type: Array as PropType<IIssue[]>,
      required: true
    }
  },
  setup(props) {
    const openIssues = computed(() => {
      return props.issues.filter(issue => issue.status === IssueStatus.OPEN);
    });

    const inProgressIssues = computed(() => {
      return props.issues.filter(issue => issue.status === IssueStatus.IN_PROGRESS);
    });

    const testIssues = computed(() => {
      return props.issues.filter(issue => issue.status === IssueStatus.TEST);
    });

    const doneIssues = computed(() => {
      return props.issues.filter(issue => issue.status === IssueStatus.DONE);
    });

    return {
      openIssues,
      inProgressIssues,
      testIssues,
      doneIssues
    };
  }
});
</script>