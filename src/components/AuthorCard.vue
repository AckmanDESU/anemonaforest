<template>
  <div class="about-author flex">
    <div class="avatar-wrap">
      <a
        href="/author/harini/"
        title="Harini Banerjee"
      ><img
          class="lazy avatar"
          data-src="/content/images/size/w150/2020/04/dan-ROJFuWCsfmA-unsplash.jpg"
          alt="Harini Banerjee"
          data-ll-status="observed"
        ></a>
    </div>
    <div class="author-info">
      <h3 class="name h5">Written by <a href="/author/harini/">{{ $static.author.edges[0].node.name }}</a></h3>
      <div class="bio">
        Harini Banerjee is award winning young blogger and content marketer. She also sings some time. Frequent traveler, cricket fan and technology enthusiast.
      </div>
    </div>
  </div>
</template>

<static-query>
	query {
        metadata {
            siteName
        }
        author: allAuthor {
          edges {
            node {
              name
            }
          }
        }
    }
</static-query>

<script>
export default {
  props: ['showTitle'],
}
</script>

<style lang="scss">
.about-author {
    padding: 1.5rem;
    margin-bottom: 1rem;
    border-radius: 3px;
    background-color: var(--light-bg-color);
    text-align: center;

    .avatar-wrap {
        width: 100px;
        height: 100px;
        line-height: 0;
        border-radius: 3px;
        overflow: hidden;
        margin: 0 auto;

        .avatar {
            width: 100%;
            height: 100%;
            object-fit: cover;

            &.no-image {
                background-color: var(--body-bg);
                color: var(--text-color-light);
            }
        }
    }

    .name {
        a {
            color: var(--text-color-dark);
            border-bottom: 1px solid transparent;
            &:hover {
                border-color: var(--theme-color);
            }
        }
    }
    .bio {
        font-size: 0.875rem;
    }
}
</style>
