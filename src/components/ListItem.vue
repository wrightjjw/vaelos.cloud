<template>
  <div class="mdc-card list-card">
    <div class="mdc-card__content">
      <div class="card-title">{{name}}</div>
      <hr>
      <div class="card-content">
        Altitude: {{alt}}
      </div>
    </div>
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

<style lang="sass">
@use "@material/card"
@include card.core-styles

.list-card
  width: 30vw
  margin: auto
  margin-bottom: 10px
  text-align: left
  padding: 5px 10px

.card-title
  font-size: x-large
  font-weight: bold

</style>