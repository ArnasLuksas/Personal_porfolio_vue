<template>
  <TheNav />
  <main>
    <router-view />
  </main>
  <Footer />
</template>


<script>
import Footer from "./components/TheFooter.vue";
import TheNav from "./components/TheNav.vue";

export default {
  name: "App",
  components: {
    Footer,
    TheNav,
  },
};
</script>
<style lang="scss">
@import "./assets/sass/main.scss";
</style>