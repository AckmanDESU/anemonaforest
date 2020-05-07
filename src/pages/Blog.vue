<template>
  <Layout>

    <div class="container">
      <div class="blog-hero">
        <h1 class="blog-header">
          Mis pensamientos...
        </h1>
      </div>
    </div>

    <g-link
      :to="item.node.path"
      v-for="item in $page.posts.edges"
      :key="item.node.id"
      class="blog-post"
    >
      <div class="container post">
        <h2 class="post-title">{{ item.node.title }}</h2>
        <p class="post-summary">{{ item.node.summary }}</p>
      </div>
    </g-link>

  </Layout>
</template>

<page-query>
query Post {
	posts: allBlogPost {
    edges {
      node {
        id
        path
        title
        summary
      }
    }
  }
}
</page-query>

<script>
export default {
}
</script>

<style scoped>
.container.blog {
  max-width: 720px;
}
.blog-hero {
  padding: 4rem 0;
  text-align: center;
  color: var(--color-base-1);
}
.blog-header {
  font-size: 3rem;
  font-weight: 700;
  padding: 0;
  margin: 0;
}
.blog-post {
  display: block;
  padding: 2rem 0;
  text-decoration: none;
  transition: background 0.5s ease;
}
.blog-post > * {
  transition: transform 0.5s ease;
}
.blog-post:hover {
  background-color: var(--color-base-1);
}
.blog-post:hover > * {
  transform: translateX(4rem);
}
.blog-post h1,
.blog-post h2 {
  margin: 0;
  padding: 0;
}
.post-title {
  font-size: 2rem;
  color: var(--color-contrast);
}
.post-summary {
  color: var(--color-contrast-1);
}

@media (min-width: 560px) {
  .blog-post {
    padding: 3rem 0;
  }
}

@media (min-width: 860px) {
  .blog-post {
    padding: 5rem 0;
  }
}
</style>
