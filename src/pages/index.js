import React from "react"
import { graphql, Link } from "gatsby"

import kebabCase from "slugify"

import Layout from "../components/layout"
import SEO from "../components/seo"
import JobListing from "../components/job-listing"

function Index({ data }) {
  const {
    allMarkdownRemark: { edges },
    cities: { group }
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
        <div className=" mb-8">
          <ul className="flex justify-around flex-wrap">
            {group.map(tag => (
              <li
                key={tag.fieldValue}
                className="border-none bg-white	 px-3 py-1 rounded-lg"
              >
                <Link
                  to={`/tags/${kebabCase(tag.fieldValue)}/`}
                  className="no-underline hover:text-gray-700 text-teal-500 "
                >
                  {capitalize(tag.fieldValue)} ({tag.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {posts}
      </div>
    </Layout>
  )
}

// capitalize first letter

function capitalize(str) {
  if (str && typeof str === "string" && str.length > 2) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase()
  }
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
    cities: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

export default Index
