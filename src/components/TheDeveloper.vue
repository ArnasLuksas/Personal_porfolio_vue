<template>
  <section class="developer" v-for="item in developer" :key="item.name">
    <img :src="img" :alt="item.name" />
    <h1>{{ item.name }} {{ item.surname }}</h1>
    <h2>{{ item.role }}</h2>
  </section>
</template>



<script>
const imgLink = require("../assets/arnas.png");

export default {
  props: {
    developer: {
      type: Array,
    },
  },

  data() {
    return {
      img: imgLink,
    };
  },
};
</script>

<style>
</style>
