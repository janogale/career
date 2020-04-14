/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const slugify = require("slugify")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/job-post.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            frontmatter {
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const edges = result.data.allMarkdownRemark.edges

    const jobs = edges.forEach(({ node }, index) => {
      // getting pagination links
      const prev = edges[index - 1]
        ? slugify(edges[index - 1].node.frontmatter.title.toLowerCase())
        : null

      const next = edges[index + 1]
        ? slugify(edges[index + 1].node.frontmatter.title.toLowerCase())
        : null

      createPage({
        path: "/jobs/" + slugify(node.frontmatter.title.toLowerCase()),
        component: blogPostTemplate,
        context: {
          prev,
          next,
          slug: slugify(node.frontmatter.title.toLowerCase()),
          id: node.id
        } // additional data can be passed via context
      })
    })

    return jobs
  })
}
