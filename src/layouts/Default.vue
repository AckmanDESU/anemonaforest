<template>
  <div
    class="layout"
  >
    <!-- :class="{ 'sticky-header': $route.path === '/' }" -->
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default {
  components: {
    Header,
    Footer
  }
}
</script>


<style lang="scss">
* {
  box-sizing: border-box;
}

h1 {
  letter-spacing: -0.01em;
}

.layout {
  padding: 0;
}

.layout.sticky-header {
  padding: 6rem 0 0 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

@media (min-width: 860px) {
  .container {
    padding: 0 6rem;
  }
}

a {
  color: inherit;
}

img {
  max-width: 100%;
}

.label {
  display: block;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Merriweather', serif;
}
</style>
