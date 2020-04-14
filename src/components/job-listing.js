import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Marker from "../svg/marker.svg"

import slugify from "slugify"

const PostLink = ({ post: { excerpt, frontmatter } }) => {
  const image = frontmatter?.image?.childImageSharp?.fluid

  const slug = slugify(frontmatter.title.toLowerCase())

  return (
    <Link to={`/jobs/${slug}`} className="no-underline hover:no-underline">
      <div className="mx-4 my-6">
        <div>
          <div className="flex flex-1   relative justify-start items-center mb-4">
            <div className="h-16 w-24">
              {image && <Img fluid={image} alt="logo" />}
            </div>
            <div className="flex flex-1  flex-col  pl-4  justify-start items-baseline">
              <div className="text-teal-500 pb-2 text-m leading-tight font-semibold">
                {frontmatter.title}
              </div>
              <div className="flex flex-1   flex-col sm:flex-row mb-4 md:mb-0">
                <Marker className="hidden sm:block h-5 mr-3 text-green-300" />
                <span className="">{frontmatter.organization}</span>
                <span className="sm:ml-12">{frontmatter.city}</span>
                <span className="absolute right-0 -mr-3 sm:mr-0 font-semibold text-s text-white  bg-green-600 px-2 rounded-full">
                  New
                </span>
              </div>
            </div>
          </div>

          <p>{excerpt}</p>
          <div className="flex flex-col md:flex-row">
            <span className="font-light  md:bg-gray-100 px-3 py-1 rounded-full text-gray-600 mb-2 ">
              posted: {frontmatter.postedAt}
            </span>
            <span className="font-light md:bg-gray-100 px-3 py-1 rounded-full text-gray-600 mb-2 md:ml-12">
              closing: {frontmatter.closingAt}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default PostLink
