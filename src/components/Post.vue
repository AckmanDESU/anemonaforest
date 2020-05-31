<template>
  <div class="post">
    <PostMeta :post="post.node" />
    <h2 class="post__title">
      <a
        :href="post.node.path"
        v-html="post.node.title"
      />
    </h2>
    <div class="post__summary">
      <a
        :href="post.node.path"
        v-html="truncate(post.node.content, 80, { byWords: true })"
      />
    </div>
  </div>
</template>

<script>
import truncate from 'truncate-html'
import PostMeta from '~/components/PostMeta'
// import PostTags from '~/components/PostTags'

export default {
  components: {
    PostMeta,
    // PostTags
  },
  methods: {
    truncate,
  },
  props: ['post'],
}
</script>

<style lang="scss">
.post {
    $root: &;

    padding: 1.5rem 0;
    border-bottom: 1px solid var(--border-color);

    &:hover {
        #{$root}-title {
        }
    }

    &__title {
        margin-top: 0rem;
        margin-bottom: 1.5rem;

        a {
            color: var(--text-color-dark);
            border-bottom: 1px solid transparent;

            &:hover {
                // color: var(--theme-color);
                border-color: var(--theme-color);
            }
        }
    }

    &__summary {
        line-height: 1.75;
        max-height: calc(1.75rem * 15);
        word-wrap: break-word;
        overflow-wrap: break-word;

        -webkit-hyphens: auto;
        -moz-hyphens: auto;
        hyphens: auto;
        overflow: hidden;

        a,
        a:hover {
            color: var(--text-color-normal);
        }
    }
}

@media (min-width: 558px) {
    .post {
        padding: 3rem 0;
    }
}
</style>
