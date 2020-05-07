<template>
  <Layout>
    <div class="post">
      <div class="container post-container">

        <div class="post-header">
          <h1
            v-html="$page.post.title"
            class="post-title"
          />
          <div class="post-meta">
            <div class="post-author">
              <span class="label">Author</span>
              <span
                class="author-name"
                v-text="$page.post.author || 'Soph'"
              />
            </div>
            <div class="post-date">
              <span class="label">Date</span>
              <div v-text="$page.post.date" />
            </div>
            <div class="post-time">
              <span class="label">Time</span>
              <span>{{ $page.post.timeToRead }} min read</span>
            </div>
          </div>
        </div>

        <PostContent :content="$page.post.content" />

      </div>
    </div>
  </Layout>
</template>

<page-query>
query BlogPost ($path: String!) {
  post: blogPost (path: $path) {
    title
    date (format: "D. MMMM YYYY")
    timeToRead
    content
  }
}
</page-query>

<script>
import PostContent from "@/components/PostContent"

export default {
  components: {
    PostContent
  },
  metaInfo () {
    return {
      title: this.$page.post.title
    }
  }
}
</script>

<style scoped>
.post-container {
  max-width: 840px;
}
.post-header {
  padding: 2rem 0 4rem 0;
}
.post-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.post-meta {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.post-meta > div {
  margin-right: 4rem;
}
.post-meta > div:last-of-type {
  margin: 0;
}
</style>
