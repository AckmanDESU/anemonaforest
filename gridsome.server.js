module.exports = function (api) {
  api.createPages(async ({ graphql, createPage }) => {
    const result = await graphql('query { allPost { edges { node { id title path } } } }')

    result.data.allPost.edges.forEach(({ node }, i, edges) => {
      const prev = edges[i - 1]
      const next = edges[i + 1]

      createPage({
        path: node.path,
        component: './src/templates/PostTemplate.vue',
        queryVariables: {
          id: node.id,
          prevId: prev && prev.node ? prev.node.id : null,
          nextId: next && next.node ? next.node.id : null
        }
      })
    })
  })
}
