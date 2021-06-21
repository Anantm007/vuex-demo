<template>
  <button @click="increment">Add</button>
  <button @click="increase({ value: 11 })">Add 11</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions('counter', ['increment', 'increase'])

    // addOne() {
    //   this.$store.dispatch('increment');
    // }
  }
};
</script>
