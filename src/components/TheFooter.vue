<template>
  <footer v-for="item in developer" :key="item.name">
    &copy; {{ currentYear }}
    <router-link :to="{ name: 'Home' }">
      {{ item.name }} {{ item.surname }}</router-link
    >
  </footer>
</template>

<script>
import sourceData from "../assets/data.json";

export default {
  name: "Footer",
  data() {
    return {
      developer: sourceData.developer,
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style>
</style>