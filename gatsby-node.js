const path = require(`path`)
const slugify = require("slugify")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/job-post.js`)
  const tagsTemplate = path.resolve(`src/templates/tag.js`)

  const result = await graphql(`
    {
      jobs: allMarkdownRemark(
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
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  // handle Errors
  if (result.errors) {
    return Promise.reject(result.errors)
  }

  // Create Jobs
  const edges = result.data.jobs.edges

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

  // Create Cities.
  const tagEdges = result.data.tagsGroup.group

  const tags = tagEdges.forEach(tag => {
    createPage({
      path: "/tags/" + slugify(tag.fieldValue.toLowerCase()),
      component: tagsTemplate,
      context: {
        tag: tag.fieldValue
      }
    })
  })
}
