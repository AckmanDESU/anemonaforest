<template>
  <div class="posts">
    <PostCard
      v-for="edge in $page.posts.edges"
      :key="edge.node.id"
      :post="edge.node"
    />
  </div>
</template>

<script>
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    PostCard,
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
