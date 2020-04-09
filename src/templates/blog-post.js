import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

export default function Template({ data, pageContext }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className=" w-full md:w-4/5 mx-auto bg-gray-100 mt-10 p-4 md:p-8 rounded-lg">
        <div className="relative">
          <h1 className="mb-0">{frontmatter.title}</h1>
          <h4 className="font-display text-secondary mb-2 mt-4">
            posted on {frontmatter.postedAt}
          </h4>
          <div className="w-16 md:w-32 h-auto absolute top-0 right-0 mr-2 mt-4 md:m-0">
            <Img fluid={frontmatter.image.childImageSharp.fluid} alt="logo" />
          </div>
        </div>
        <span
          className="inline-block bg-teal-300 mb-16"
          style={{ height: `1px`, width: `80%` }}
        ></span>
        <div
          className="w-full md:w-2/3"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        postedAt(formatString: "MMMM DD, YYYY")
        closingAt(formatString: "MMMM DD, YYYY")
        title
        organization
        city
        image {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
