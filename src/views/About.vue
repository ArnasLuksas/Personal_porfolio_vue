<template>
  <section class="about" v-for="item in developer" :key="item.name">
    <h2>Who I am?</h2>
    <p>
      {{ item.description }}
      <router-link :to="{ name: 'Contacts' }">Contacts </router-link>
     
    </p>
  </section>
</template>

<script>
import userData from "../assets/data.json";
export default {
  name: "About",

  data() {
    return {
      developer: userData.developer,
    };
  },
};
</script>

<style>
</style>