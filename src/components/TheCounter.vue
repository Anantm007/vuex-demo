<template>
  <div>
    <h3>{{ finalCounter }}</h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('counter', ['finalCounter'])
    // counter() {
    //   return this.$store.getters.normalizedCounter;
    // }
  }
};
</script>

<style></style>
