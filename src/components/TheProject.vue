<template>
  <section class="projects">
    <h2>Projects</h2>
    <div class="projectsContainer">
      <div class="project" v-for="project in projects" :key="project.id">
        <AppLink :to="project.link">
          <img :src="project.image" :alt="project.name" />
          <p>{{ project.name }}</p></AppLink
        >
      </div>
    </div>
  </section>
</template>

<script>
import AppLink from "./AppLink.vue";
export default {
    props: {
        projects: {
            type: Array,
            required: true,
        },
    },
    components: { AppLink }
};
</script>

<style>
</style>