<script setup lang="ts">
const props = defineProps({
  color: {
    type: String,
    required: true
  }
})

const style = {
  '--color': props.color
}
</script>

<template>
  <div class="divider" v-bind:style="style">
    <div class="divider-item"></div>
    <div class="divider-icon">
      <i class="fas fa-star"></i>
    </div>
    <div class="divider-item"></div>
  </div>
</template>

<style lang="scss" scoped>
.divider {
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .divider-item {
    background-color: var(--color);
    width: 100%;
    max-width: 7rem;
    height: 0.25rem;
    border-radius: 1rem;
  }

  .divider-icon {
    color: var(--color);
    font-size: 2rem;
    margin: 0 1rem;
  }
}
</style>