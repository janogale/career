import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import JobListing from "../components/job-listing"

function Index({ data }) {
  const {
    allMarkdownRemark: { edges }
  } = data

  const posts = edges
    .filter(
      edge =>
        !!edge.node.frontmatter.date && edge.node.frontmatter.draft === false
    )
    .map(edge => (
      <div
        key={edge.node.id}
        className="mt-4 bg-white hover:bg-gray-100 border rounded-lg shadow hover:shadow-lg"
      >
        <JobListing post={edge.node} />
      </div>
    ))

  return (
    <Layout>
      <SEO title="Home" />
      {/* <Hero
        text="Find Jobs in the Somali Region and Horn of Africa"
        image={<HeroImg />}
        cta={{ to: "/contact-us", text: "Find Jobs" }}
      /> */}
      <div className="w-full sm:w-4/6 mx-auto">
        <h2 className="mt-6 text-center">New jobs</h2>
        {posts}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___postedAt] }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            organization
            city
            closingAt(formatString: "DD-MMMM-YYYY", locale: "en-GB")
            postedAt(formatString: "DD-MMMM-YYYY", locale: "en-GB")
            date(formatString: "DD-MMMM-YYYY", locale: "en-GB")
            draft
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
    }
  }
`

export default Index
