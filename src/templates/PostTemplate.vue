<template>
  <Layout>
    <!-- <Author class="post-author" /> -->
    <div>
      <header class="featured-image-wrap">
        <g-image
          alt="Cover image"
          :src="$page.metadata.cloudinary_url + '/w_1980,h_450/' + $page.post.headerImage"
        />
        <h2 v-text="$page.metadata.cloudinary_url + '/w_1980,h_450/' + $page.post.headerImage" />
      </header>
      <main class="main post-inner-wrap">
        <PostMeta :post="$page.post" />
        <h1
          class="post__title"
          v-html="$page.post.title"
        />
        <h2></h2>
        <div
          class="post__content"
          v-html="$page.post.content"
        />
        <!-- <div class="tag-list">
            <span class="label">Tag:</span>
            <a href="/tag/nature/">Nature</a>
          </div> -->
        <PostShare :post="$page.post" />
        <!-- <AuthorCard /> -->
        <PostNavigation
          :next="$page.next"
          :prev="$page.prev"
        />
      </main>

      <div class="post-comments">
        <!-- Add comment widgets here -->
      </div>
    </div>
  </Layout>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostShare from '~/components/PostShare'
import PostNavigation from '~/components/PostNavigation'
import AuthorCard from '~/components/AuthorCard'
// import Author from '~/components/Author.vue'

export default {
  components: {
    // Author,
    PostMeta,
    PostShare,
    PostNavigation,
    AuthorCard,
    // PostTags
  },
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'summary',
          content: this.$page.post.summary
        }
      ]
    }
  }
}
</script>

<page-query>
query Post ($id: ID!, $prevId: ID, $nextId: ID) {
  post (id: $id) {
    id
    path
    timeToRead
    date (format: "D. MMMM YYYY")
    headerImage
    title
    summary
    content
  }
  prev: post (id: $prevId) {
      id
      path
   }
  next: post (id: $nextId) {
      id
      path
  }

metadata {
    cloudinary_url
}
}
</page-query>

<style lang="scss">
@import '../assets/style/mixins';

.post-title {
    padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
    text-align: center;
}

.post {
    &__header {
        width: calc(100% + var(--space) * 2);
        margin-left: calc(var(--space) * -1);
        margin-top: calc(var(--space) * -1);
        margin-bottom: calc(var(--space) / 2);
        overflow: hidden;
        border-radius: var(--radius) var(--radius) 0 0;

        img {
            width: 100%;
        }

        &:empty {
            display: none;
        }
    }

    &__content {
        h2:first-child {
            margin-top: 0;
        }

        img {
            @include mq(md) {
                width: calc(100% + var(--space) * 2);
                margin-left: calc(var(--space) * -1);
                display: block;
                max-width: none;
            }
        }
    }
}

.post-comments {
    padding: calc(var(--space) / 2);

    &:empty {
        display: none;
    }
}

.post-author {
    margin-top: calc(var(--space) / 2);
}

.single-post-wrap {
    overflow: hidden;

    &.no-image {
        margin-top: 3rem;
    }
}

.featured-image-wrap:not(:empty) {
    height: #{'max(200px, 40vh)'};
    margin-bottom: 2rem;
    background-color: var(--light-bg-color);

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 3px;
    }
}

.post-inner-wrap {
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
}

.post-content {
    font-size: 1rem;

    p {
        margin-bottom: 2rem;
    }

    a {
        // color: var(--text-color-normal);
        border-bottom: 1px solid transparent;

        &:hover {
            // color: var(--theme-color);
            border-color: var(--theme-color);
        }
    }

    img {
        max-width: 100%;
    }
}

.kg-image-card {
    margin: 3rem 0px 3rem 0px;

    img {
        display: block;
        border-radius: 3px;
    }

    figcaption {
        text-align: center;
    }
}

.kg-width-wide,
.kg-width-full {
    img {
        width: 100%;
    }
}

.kg-width-full {
    width: 100vw;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    position: relative;

    img {
        border-radius: 0;
    }
}

.kg-embed-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
}

.kg-gallery-container {
    display: flex;
    flex-direction: column;
}

.kg-gallery-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.kg-gallery-image img {
    display: block;
    margin: 0;
    width: 100%;
    height: 100%;
    border-radius: 3px;
}

.kg-gallery-row:not(:first-of-type) {
    margin: 0.75rem 0 0 0;
}

.kg-gallery-image:not(:first-of-type) {
    margin: 0 0 0 0.75rem;
}

.kg-bookmark-card {
    margin: 2rem 0px;
}

.kg-bookmark-container {
    display: flex;
    flex-wrap: wrap;
    color: var(--text-color-normal);
    text-decoration: none;
    background-color: var(--light-bg-color);
    flex-direction: column-reverse;
    border-bottom: none;

    &:hover {
        .kg-bookmark-title {
            color: var(--theme-color);
        }
    }
}

.kg-bookmark-content {
    flex-basis: 0;
    flex-grow: 999;
    min-width: 50%;
    padding: 24px;
}

.kg-bookmark-title {
    font-size: 1rem;
    color: var(--text-color-dark);
    transition: all 0.3s;
    font-weight: 700;
}

.kg-bookmark-description {
    font-size: 0.875rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.kg-bookmark-description,
.kg-bookmark-metadata {
    margin-top: 16px;
}

.kg-bookmark-metadata {
    display: flex;
    align-items: center;
    font-size: 0.75rem;
}

.kg-bookmark-thumbnail {
    flex-basis: 216px;
    flex-grow: 1;
    position: relative;
    overflow: hidden;
}

.kg-bookmark-thumbnail img {
    position: absolute;
    top: 0;
    left: 0;
    vertical-align: bottom;
    object-fit: cover;
    width: 100%;
    height: 216px;
}

.kg-bookmark-icon {
    width: 20px;
    height: 20px;
    margin-right: 8px;
    vertical-align: bottom;
}

.kg-bookmark-author,
.kg-bookmark-publisher {
    font-size: 0.875rem;
}

.kg-bookmark-author:after {
    content: '•';
    margin: 0 6px;
}

.post-upgrade-cta-box {
    background: var(--light-bg-color);
    padding: 2rem;
    margin-bottom: 3rem;

    .title {
        margin-top: 0;
        margin-bottom: 2rem;
    }

    .sign-in-cta {
        margin-bottom: 0;
    }
}

.excerpt {
    font-size: 1.125rem;
}

.tag-list {
    margin: 3rem 0 4rem;
    color: var(--text-color-light);

    .label {
        color: var(--text-color-normal);
        text-transform: uppercase;
        font-size: 0.875rem;
        margin-right: 4px;
    }

    a {
        color: var(--text-color-light);
        text-transform: uppercase;
        font-size: 0.875rem;
        border-bottom: 1px solid transparent;

        &:hover {
            border-color: var(--theme-color);
        }
    }
}

.prev-nex-wrap {
    margin-top: 3rem;

    .post {
        .featured-image {
            width: 144px;
            height: 144px;
            border-radius: 3px;
            overflow: hidden;
            background-color: var(--light-bg-color);

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .content-wrap {
            flex-basis: 0;
            flex-grow: 999;

            .title {
                margin-top: 1rem;
            }
        }

        a {
            .nav-text {
                font-size: 0.75rem;
                text-transform: uppercase;
                color: var(--text-color-light);
                display: inline-flex;
                margin-top: 1rem;
                border-bottom: 1px solid transparent;
                transition: all 0.3s;
            }

            &:hover {
                .nav-text {
                    border-color: var(--theme-color);
                }
            }
        }
    }

    .prev-post {
        .featured-image {
            margin-right: 24px;
        }
    }

    .next-post {
        a {
            flex-direction: row-reverse;
        }

        .featured-image {
            margin-left: 24px;
        }

        .content-wrap {
            text-align: right;
        }
    }
}

.comment-wrap {
    margin-top: 4rem;
    background-color: var(--light-bg-color);
    padding: 1.5rem;
    border-radius: 3px;
}

.comment-wrap-inner {
    max-width: 700px;
    margin: 0 auto;
}

@media (min-width: 576px) {
    .single-post-wrap {
        .featured-image-wrap {
            height: 300px;
            margin-bottom: 3rem;
        }

        .about-author {
            text-align: inherit;

            .avatar-wrap {
                margin-right: 1.5rem;
            }

            .author-info {
                flex-basis: 0;
                flex-grow: 99;

                .name {
                    margin-top: 0;
                }
            }
        }
    }
}

@media (max-width: 767px) {
    .prev-nex-wrap {
        .prev-post {
            margin-bottom: 2rem;
        }

        .next-post {
            a {
                flex-direction: row;
            }

            .featured-image {
                margin-left: 0;
                margin-right: 24px;
            }

            .content-wrap {
                text-align: left;
            }
        }
    }
}
@media (min-width: 768px) {
    .single-post-wrap {
        .featured-image-wrap {
            height: 400px;
        }

        .post-inner-wrap {
            .post-content {
                .kg-bookmark-container {
                    flex-direction: row;
                }

                .kg-bookmark-thumbnail {
                    flex-basis: 13em;
                    min-height: 144px;
                }
            }
        }
    }
}
@media (min-width: 768px) and (max-width: 1170px) {
    .single-post-wrap {
        .post-inner-wrap {
            .post-content {
                .kg-width-wide {
                    width: calc(100% + (100vw - 100%) / 2);
                    margin-left: calc((100% - 100vw) / 4);
                }
            }
        }
    }
}
@media (min-width: 768px) {
    .comment-wrap-inner {
        margin: 2rem auto;
    }
}
@media (min-width: 1171px) {
    .single-post-wrap {
        .post-inner-wrap {
            .post-content {
                .kg-width-wide {
                    width: 1138px;
                    margin-left: -219px;
                }
            }
        }
    }
}

.main {
    padding: 1.5vw 15px 0;
}
</style>
