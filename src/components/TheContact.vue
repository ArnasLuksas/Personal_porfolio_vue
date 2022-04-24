<template>
  <section class="contacts">
    <h2>Contacts</h2>
    <div class="contactsContainer">
      <div class="contact" v-for="contact in contacts" :key="contact.name">
        <img :src="contact.image" :alt="contact.name" />
        <span>{{ contact.contact }}</span>
      </div>
      <div class="social" v-for="item in social" :key="item">
        <AppLink :to="item.contact">
          <img :src="item.image" :alt="item.name" />
        </AppLink>
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