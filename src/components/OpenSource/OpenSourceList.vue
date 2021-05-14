<script>
import OpenSourceItem from "./OpenSourceItem.vue";
export default {
  props: ["repos"],
  components: { OpenSourceItem },
};
</script>

<template>
  <div class="row mt-50">
    <open-source-item v-for="repo in repos" :key="repo.id" :repo="repo" />
  </div>
</template>