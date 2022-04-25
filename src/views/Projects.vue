<template>
    <section class="projects">
    <h2>Projects</h2>
    <div class="projectsContainer">
      <div class="project" v-for="project in projects" :key="project.id">
        <router-link :to="{name: 'Project', params:{id: project.id}}">
          <img :src="project.image" :alt="project.name" />
          <p>{{ project.name }}</p></router-link
        >
        <!-- <p>{{project.description}}</p> -->
      </div>
    </div>
  </section>
</template>

<script>
import sourceData from "../assets/data.json";
export default {
  name: "Projects",
  data() {
    return {
      projects: sourceData.projects
       
    };

  },
};


</script>

<style>
</style>›