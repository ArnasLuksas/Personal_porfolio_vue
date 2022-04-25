<template>
  <div class="singleProject">
    <h2>{{ project.name }}</h2>
    <p>{{ project.description }}</p>
    <img :src="project.image" :alt="project.name" />
    <div class="links">
      <AppLink  :to="project.link">
       <img src="../assets/icon/view.png" alt="view"> <p>Live preview</p>
      </AppLink>
      <AppLink :to="project.sourceLink">  <p>Source code</p> </AppLink>
    </div>
  </div>
</template>

<script>
import sourceData from "../assets/data.json";
import AppLink from "./AppLink.vue";

export default {
  components: {
    AppLink,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },

  computed: {
    project() {
      return sourceData.projects.find((project) => project.id === this.id);
    },
  },
};
</script>

<style>
</style>