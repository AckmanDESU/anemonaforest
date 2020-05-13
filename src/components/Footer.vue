<template>
  <footer class="footer">
    <div class="container">
      <span v-html="settings.footer" />
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      settings: require("../../data/config.json")
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  font-size: 0.8rem;
  padding-top: 6rem;

  > div {
    background: var(--bg-content-color);
    border-radius: 10px 10px 0 0;
    line-height: 2;
  }
}
</style>
