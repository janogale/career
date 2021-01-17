import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Marker from "../svg/marker.svg"
import BackArrow from "../svg/back-arrow.svg"
import NextArrow from "../svg/next-arrow.svg"

import Layout from "../components/layout"

export default function Template({ data, pageContext }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const image = frontmatter?.image?.childImageSharp?.fluid
  const { prev, next } = pageContext
  return (
    <Layout>
      <div className=" w-full md:w-4/6 mx-auto bg-gray-100 px-3 sm:px-0 py-10 mt-10  md:p-8 rounded-lg">
        <Link
          to="/"
          className="flex items-center text-gray-500 bg-gray-200 hover:no-underline w-32 rounded-lg px-3"
        >
          <BackArrow className="h-8 mr-3 text-gray-500" /> Go back
        </Link>
        <div className="relative flex justify-start mt-16 sm-items-center">
          <div className="w-16 sm:w-32 mt-3 md:mt-0">
            {image && <Img fluid={image} alt="logo" />}
          </div>
          <div className="flex flex-1 flex-col pl-4  justify-start items-baseline">
            <div className="text-teal-500 pb-2 text-xl leading-tight font-semibold">
              {frontmatter.title}
            </div>
            <div className="flex flex-col sm:flex-row mb-4 md:mb-0 text-tertiary">
              <Marker className="hidden sm:block h-5 mr-3 text-green-300" />
              <span className="font-bold">{frontmatter.organization}</span>
              <span className="sm:ml-12">{frontmatter.city}</span>
            </div>
            <div className="flex flex-col md:flex-row mt-8">
              <span className="font-light  text-teal-500 bg-gray-200 px-3 py-1 rounded-full  mb-2 ">
                posted: {frontmatter.postedAt}
              </span>
              <span className="font-light text-tertiary bg-gray-200 px-3 py-1 rounded-full  mb-2 md:ml-12">
                closing: {frontmatter.closingAt}
              </span>
              <span className="absolute right-0 mr-2 font-semibold text-white  bg-green-600 px-3 rounded-full">
                New
              </span>
              {/* <span className="absolute right-0 mr-12 font-light font-semibold text-tertiary bg-red-200 px-3 py-1  rounded-full">
                expired
              </span> */}
            </div>
          </div>
        </div>
        <span
          className="inline-block bg-gray-300 mb-12"
          style={{ height: `1px`, width: `80%` }}
        ></span>
        <div
          className="w-full md:w-2/3"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <span
          className="inline-block bg-gray-300 mt-16 mx-auto"
          style={{ height: `1px`, width: `80%` }}
        ></span>
        <div className="flex justify-between">
          {prev && (
            <Link
              to={`/jobs/${prev}/`}
              className="flex mt-16 items-center text-gray-500 bg-gray-200 hover:no-underline hover:bg-gray-300 w-32 rounded-lg px-3"
            >
              <BackArrow className="h-8 mr-2 text-gray-500" /> Prev
            </Link>
          )}
          {next && (
            <Link
              to={`/jobs/${next}/`}
              className="flex mt-16 items-center text-gray-500 bg-gray-200 hover:no-underline hover:bg-gray-300 w-32 rounded-lg px-3"
            >
              Next <NextArrow className="h-8 ml-2 text-gray-500" />
            </Link>
          )}
        </div>
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
