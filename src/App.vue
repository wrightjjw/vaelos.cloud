<template>
  <List v-bind:islands="this.islands" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Island from './types/Island';
import List from './views/List.vue';

export default defineComponent({
  name: 'App',
  components: {
    List,
  },
  data() {
    return {
      islands: [
        {
          name: "Derakia",
          alt: 300,
          rate: 5,
          rise: true,
          max: 100000,
          min: 0,
        } as Island,
        {
          name: "Lupland",
          alt: 500,
          rate: 7,
          rise: false,
          max: 100000,
          min: 0,
        } as Island,
      ],
    };
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
