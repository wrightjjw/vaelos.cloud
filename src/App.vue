<template>
  <List />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import List from './views/List.vue';

export default defineComponent({
  name: 'App',
  components: {
    List,
  },
  data() {
    return [
        {
          name: "Derakia",
          alt: 300,
          rate: 5,
          rising: true,
        },
        {
          name: "Lupland",
          alt: 500,
          rate: 7,
          rising: false,
        },
      ]
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
