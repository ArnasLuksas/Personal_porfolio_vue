<template>
  <TheContact :contacts="contacts" :social="social" />
</template>

<script>
import sourceData from "../assets/data.json";
import TheContact from "../components/TheContact.vue";

export default {
  name: "Contacts",
  components: {
    TheContact,
  },
  data() {
    return {
      contacts: sourceData.contacts,
      social: sourceData.social,
    };
  },
};
</script>

<style>
</style>