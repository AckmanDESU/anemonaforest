<template>
  <!-- <Layout :show-logo="false"> -->
  <Layout>
    <!-- Author intro -->
    <!-- <Author :show-title="true" /> -->

    <!-- List posts -->
    <main class="main">
      <Hero />
      <PostList :posts="$page.posts.edges" />
    </main>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allPost (perPage: 10) {
    edges {
      node {
        id
        path
        timeToRead
        title
        date(format: "D. MMMM YYYY")
        summary
        content
      }
    }
  }
}
</page-query>

<script>
import Author from '@/components/Author.vue'
import Hero from "@/components/Hero"
import PostList from "@/components/PostList"

export default {
  components: {
    Author,
    Hero,
    PostList
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style lang="scss" scoped>
.main {
  padding: 1.5vw 15px 0;
}
</style>