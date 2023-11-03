<script setup lang="ts">
defineProps({
  name: String
})
</script>
"

<template>
  <svg aria-hidden="true" class="cp-icon">
    <use :href="`#icon-${name}`"></use>
  </svg>
</template>

<style lang="scss" scoped>
.cp-icon {
  width: 1em;
  height: 1em;
}
</style>
