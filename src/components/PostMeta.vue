<template>
  <div class="post-meta">
    <!-- <span class="primary-tag"><a href="/tag/nature/">Nature</a></span> -->
    <span class="post-meta__date">{{ post.date }}</span>
    <span class="post-meta__read-time">{{ post.timeToRead }} min read</span>
  </div>
</template>

<script>
export default {
  props: ['post'],
}
</script>

<style lang="scss">
.post-meta {
    font-size: 0.8em;
    opacity: 0.8;

    &__info {
        text-transform: uppercase;
        font-size: 0.875rem;
        color: var(--text-color-light);
        margin-bottom: 1rem;

        // a {
        //   color: var(--text-color-light);
        //   border-bottom: 1px solid transparent;
        //   &:hover {
        //     // color: var(--theme-color);
        //     border-color: var(--theme-color);
        //   }
        // }

        // .featured-label {
        //   background-color: var(--text-color-normal);
        //   color: var(--body-bg);
        //   padding: 1px 6px;
        //   border-radius: 3px;
        //   font-size: 0.75rem;
        //   &:after {
        //     content: none;
        //   }
        // }

        // .visibility {
        //   border: 1px solid var(--border-color);
        //   padding: 1px 6px;
        //   border-radius: 3px;
        //   font-size: 0.75rem;
        //   &::after {
        //     content: none;
        //   }
        // }
    }

    &__date,
    &__read-time {
        margin-right: 6px;
        margin-bottom: 8px;
        display: inline-flex;

        &:after {
            content: '/';
            margin-left: 8px;
        }

        &:last-child {
            &:after {
                content: none;
            }
        }
    }
}
</style>
