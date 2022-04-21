<template>
  <header>
    <div class="wrapper">
      <div
        @click="toggleNav"
        :class="{ toggle: changeCondition }"
        class="navBtn"
      >
        <span class="lineOne"></span>
        <span class="lineTwo"></span>
        <span class="lineThree"></span>
      </div>
      <div id="nav" v-if="changeCondition">
        <div class="navLinks">
          <router-link to="/">Home</router-link>
          <router-link :to="{ name: 'About' }">About</router-link>
          <router-link :to="{ name: 'Skills' }">Skills</router-link>
          <router-link :to="{ name: 'Projects' }">Projects</router-link>
          <router-link :to="{ name: 'Contacts' }">Contacts</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      changeCondition: false,
    };
  },
  methods: {
    toggleNav() {
      this.changeCondition = !this.changeCondition;
    },
  },
  watch: {
    $route() {
      this.changeCondition = false;
    },
  },
};
</script>

<style>
</style>