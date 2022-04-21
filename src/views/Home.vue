<template>
  <Developer :developer="developer" />
</template>

<script>
import userData from "../assets/data.json";

import Developer from "../components/TheDeveloper.vue";

export default {
  name: " Home",
  components: {
    Developer,
  },
  data() {
    return {
      developer: userData.developer,
    };
  },
};
</script>






