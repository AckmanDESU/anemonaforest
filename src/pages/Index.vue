<template>
  <Layout>
    <div class="container">
      <Hero />
      <PhotosGrid :photos="$page.photos.edges" />
    </div>
    <LatestPosts :posts="$page.posts.edges" />
  </Layout>
</template>

<page-query>
query Posts {
	photos: allPhotoPost {
    edges {
      node {
        id
        path
        title
        thumbnail
        date (format: "D. MMMM YYYY")
      }
    }
  },
  posts: allBlogPost (perPage: 4) {
    edges {
      node {
        id
        path
        title
      }
    }
  }
}
</page-query>

<script>
import Hero from "@/components/Hero"
import PhotosGrid from "@/components/PhotosGrid"
import LatestPosts from "@/components/LatestPosts"

export default {
  components: {
    Hero,
    PhotosGrid,
    LatestPosts
  }
}
</script>
