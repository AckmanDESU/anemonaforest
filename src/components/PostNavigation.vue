<template>
  <div class="nav-wrap">
    <g-link class="nav-item nav-item--prev" v-if="prev" :to="prev.path">&larr; Anterior</g-link>
    <g-link class="nav-item nav-item--next" v-if="next" :to="next.path">Siguiente &rarr;</g-link>
  </div>
</template>

<script>
export default {
  props: ['next', 'prev'],
}
</script>

<style lang="scss">
.nav-wrap {
  display: flex;
  font-size: 0.85em;
}

.nav-item {
  padding: 0 1.5em;
  line-height: 2em;
  border: 1px solid currentColor;
  border-radius: 2em;
  opacity: 0.5;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }

  &--prev {
    margin-right: auto;
  }

  &--next {
    margin-left: auto;
  }
}
</style>
