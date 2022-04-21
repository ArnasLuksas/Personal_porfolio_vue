<template>
  <section class="contacts">
    <h2>Contacts</h2>
    <div class="contactsContainer">
      <div class="contact" v-for="contact in contacts" :key="contact.name">
        <img :src="contact.image" :alt="contact.name" />
        <span>{{ contact.contact }}</span>
      </div>
      <div
        class="social linkedin"
        v-for="item in social[0].linkedin"
        :key="item"
      >
        <router-link :to="{ name: 'Linkedin' }">
          <img :src="item.image" :alt="item.name" />
        </router-link>
      </div>
      <div class="social github" v-for="item in social[0].github" :key="item">
        <router-link :to="{ name: 'Github' }">
          <img :src="item.image" :alt="item.name" />
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
  props: {
    contacts: {
      type: Array,
    },
    social: {
      type: Array,
    },
  },
};
</script>

<style>
</style>