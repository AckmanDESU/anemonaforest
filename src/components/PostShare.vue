<template>
  <div class="share-wrap">
    <ul class="share-links text-center">
      <!-- facebook -->
      <li>
        <a
          class="facebook"
          :href="`https://www.facebook.com/sharer/sharer.php?u=${$static.data.siteUrl}${post.path}`"
          onclick="window.open(this.href, 'facebook-share','width=580,height=296');return false;"
          title="Share on Facebook"
        ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
          </svg></a>
      </li>
      <!-- twitter -->
      <li>
        <a
          class="twitter"
          :href="`https://twitter.com/share?text=${post.title}&url=${$static.data.siteUrl}${post.path}`"
          onclick="window.open(this.href, 'twitter-share', 'width=580,height=296');return false;"
          title="Share on Twitter"
        ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
          </svg></a>
      </li>
      <!-- pinterest -->
      <li>
        <a
          class="pinterest"
          :href="`http://pinterest.com/pin/create/button/?url=${$static.data.siteUrl}${post.path}&description=${post.title}`"
          onclick="window.open(this.href, 'linkedin-share', 'width=580,height=296');return false;"
          title="Share on Pinterest"
        ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg></a>
      </li>
      <li>
        <a
          class="link js-copy-link"
          href="#"
          onclick="return false;"
          :data-clipboard-text="$static.data.siteUrl + post.path"
          title="Copy the permalink"
          rel="noopener"
        ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"></path>
          </svg></a>
      </li>
    </ul>
    <div class="js-notification-copy-link text-center" style="display: none"><span>¡El link ha sido copiado al portapapeles!</span></div>
  </div>
</template>

<script>
export default {
  props: ['post'],
}
</script>

<static-query>
query {
  data: metadata {
    siteUrl
  }
}
</static-query>

<style lang="scss">
.share-wrap {
    margin: 3rem 0 1.5rem;

    .share-links {
        padding: 0;
        margin: 0;
        list-style: none;

        li {
            display: inline;
            margin: 0 0.75rem;

            a {
                color: var(--text-color-light);

                &:hover {
                    color: var(--theme-color);
                }

                svg {
                    width: 18px;
                    height: 18px;
                    fill: #0008;
                }
            }
        }
    }

    .js-notification-copy-link {
        transition: opacity 0.2s;
        opacity: 0;
        margin-top: 1.5rem;

        span {
            background: var(--theme-color);
            text-transform: uppercase;
            color: var(--white);
            padding: 2px 8px;
            border-radius: 3px;
            font-size: 0.875rem;
        }

        &.visible {
            opacity: 1;
        }
    }
}
</style>
