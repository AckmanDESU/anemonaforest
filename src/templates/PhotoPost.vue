<template>
  <Layout>
    <div class="photo">

      <div class="container">

        <div class="photo-header">
          <h1
            class="photo-title"
            v-html="$page.post.title"
          />
          <div class="photo-info">

            <!-- <div class="tags-container">
              <div class="tags">
                <span class="label">Etiquetas</span>
                <span
                  class="tag"
                  v-for="(tag, index) in $page.post.tags"
                  :key="index"
                  v-text="tag"
                />
              </div>
            </div> -->

            <div class="year-container">
              <span class="label">Year</span>
              <div v-html="$page.post.date" />
            </div>
          </div>
        </div>

        <g-image
          :src="$page.post.image"
          :alt="$page.post.title"
        />

        <div
          v-html="$page.post.content"
          class="content"
        />

      </div>

    </div>
  </Layout>
</template>

<page-query>
query PhotoPost ($path: String!) {
  post: photoPost (path: $path) {
    title
    date (format: "YYYY")
    image
    content
    project_bg_color
    project_fg_color
  }
}
</page-query>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.post.title,
      bodyAttrs: {
        style: `background-color: ${this.$page.post.project_bg_color ? this.$page.post.project_bg_color : 'var(--color-base)'}; color: ${this.$page.post.project_fg_color ? this.$page.post.project_fg_color : 'var(--color-contrast)'}`
      }
    }
  }
}
</script>

<style scoped>
.photo-header {
  padding: 20vh 0 4rem 0;
}
.photo-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.photo-info {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.photo-info > div {
  margin-right: 4rem;
}
.photo-info > div:last-of-type {
  margin: 0;
}
.tag:after {
  content: ", ";
}
.tag:last-of-type:after {
  content: "";
}
</style>
