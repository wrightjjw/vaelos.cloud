<template>
    <ListItem v-for="i in islands" :key="i.name" v-bind="i" />
</template>

<script lang="ts">
import ListItem from '../components/ListItem.vue';
import {emptyIsland} from '../types/Island';
export default {
  components: {
    ListItem,
  },
  props: {
    islands: {required: true, type: [emptyIsland]},  //TODO: Create island type
  }
}
</script>

<style>

</style>