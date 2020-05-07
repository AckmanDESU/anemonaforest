<template>
  <div>
    <div class="latest-posts-heading container">
      <span class="label">Latest and greatest</span>
    </div>
    <div class="latest-posts">
      <div class="container">
        <g-link
          :to="item.node.path"
          class="blog"
          v-for="item in posts"
          :key="item.node.id"
        >
          <h3 class="blog-title">{{ item.node.title }}</h3>
        </g-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.latest-posts-heading {
  margin-top: 6rem;
  margin-bottom: 1rem;
  font-size: 0.6rem;
  font-weight: 400;
  text-transform: uppercase;
}
.latest-posts {
  max-width: 100%;
  margin: 0 2rem;
  border: 1px solid var(--color-base-1);
}
.latest-posts > .container {
  display: flex;
  flex-wrap: wrap;
}
.blog {
  flex: 0 0 100%;
  display: block;
  padding: 2rem;
  transition: background 0.25s ease;
  text-decoration: none;
  border-bottom: 1px solid var(--color-base-1);
}

.blog:last-of-type {
  border-bottom: 0;
}

.blog:hover {
  background: var(--color-base-1);
}

.blog-title {
  font-size: 1rem;
  line-height: 1.35;
}

@media (min-width: 580px) {
  .blog {
    flex: 0 0 50%;
  }
  .blog:nth-child(1) {
    border-right: 1px solid var(--color-base-1);
    border-bottom: 1px solid var(--color-base-1);
  }

  .blog:nth-child(2) {
    border-bottom: 1px solid var(--color-base-1);
  }

  .blog:nth-child(3) {
    border-right: 1px solid var(--color-base-1);
    border-bottom: 0;
  }
}

@media (min-width: 920px) {
  .blog {
    flex: 0 0 25%;
  }
  .blog:nth-child(1) {
    border: 0;
    border-right: 1px solid var(--color-base-1);
  }

  .blog:nth-child(2) {
    border: 0;
    border-right: 1px solid var(--color-base-1);
  }

  .blog:nth-child(3) {
    border: 0;
    border-right: 1px solid var(--color-base-1);
  }
  .latest-posts {
    margin: 0;
    border-left: 0;
    border-right: 0;
    border-top: 1px solid var(--color-base-1);
    border-bottom: 1px solid var(--color-base-1);
  }
}
</style>
