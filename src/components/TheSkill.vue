<template>
  <section class="skills">
    <h2>The tools i use</h2>
    <div class="skillsContainer">
   <div class="skill" v-for="skill in skills" :key="skill.name">
      <h3>{{ skill.name }}</h3>
      <img :src="skill.image" :alt="skill.name" />
    </div>
    </div>
 
  </section>
</template>

<script>
export default {
  name: "Skill",
  props: {
    skills: {
      name: String,
      image: String,
    },
  },
};
</script>

<style>
</style>