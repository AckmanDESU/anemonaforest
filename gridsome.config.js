// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
  siteName: "Blog Personal",
  siteUrl: `https://anemona.netlify.app`,
  host: "0.0.0.0",
  titleTemplate: "%s - NWA",
  siteDescription: "Vamos a morir todos",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data/content/posts/**/*.md",
        typeName: "BlogPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data/content/photos/**/*.md",
        typeName: "PhotoPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    }
  ],
  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs"]
    }
  }
};
