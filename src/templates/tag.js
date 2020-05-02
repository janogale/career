import React from "react"

// Components
import { Link, graphql } from "gatsby"

// Layout
import Layout from "../components/layout"

// slugify
import slugify from "slugify"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} Job${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout>
      <div className="flex flex-col items-center">
        <h1 className="text-m font-bold text-gray-600 ">{tagHeader}</h1>
        <ul className="m-0">
          {edges.map(({ node }, index) => {
            const { title } = node.frontmatter
            const slug = slugify(title.toLowerCase())

            return (
              <li key={slug} className="border-none">
                <span className="pr-5 font-semibold text-gray-500"> → </span>
                <Link to={`/jobs/${slug}`} className="text-teal-500">
                  {title}
                </Link>
              </li>
            )
          })}
        </ul>

        <hr className="my-10" />
        <Link to="/" className="text-gray-500">
          All Jobs
        </Link>
      </div>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`
