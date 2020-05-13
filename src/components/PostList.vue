<template>
  <div class="post-list">
    <Post
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />
  </div>
</template>

<script>
import Post from '~/components/Post'

export default {
  components: {
    Post,
  },
  props: ['posts'],
}
</script>

<style lang="scss">
.post-list {
  max-width: 700px;
  margin: 1rem auto;
}

@media (min-width: 558px) {
  .post-list {
    margin: 3rem auto;
  }
}
</style>
