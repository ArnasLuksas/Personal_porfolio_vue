<template>
  <TheProject :projects="projects" />
</template>

<script>
import sourceData from "../assets/data.json";
import TheProject from "../components/TheProject.vue";
export default {
  name: "Projects",
  components: {
    TheProject,
  },
  data() {
    return {
      projects: sourceData.projects,
    };
  },
};
</script>

<style>
</style>