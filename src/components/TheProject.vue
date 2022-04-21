<template>
  <section class="projects">
    <h2>Projects</h2>
    <div class="projectsContainer">
    <div class="project" v-for="project in projects" :key="project.id">
      <img :src="project.image" :alt="project.name" />
      <h3>{{ project.name }}</h3>
    </div>
    </div>

  </section>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
    },
  },
};
</script>

<style>
</style>