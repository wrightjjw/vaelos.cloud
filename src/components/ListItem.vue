<template>
  <div>
    <h2>Name: {{name}}</h2>
    Altitude: {{alt}}
  </div>
</template>

<script>
export default {
  props: {
    name: {required: true, type: String},
    alt: {required: true, type: Number},
  }
}
</script>

<style>

</style>