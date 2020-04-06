import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Marker from "../svg/marker.svg"

const PostLink = ({ post: { excerpt, frontmatter } }) => (
  <Link
    to={frontmatter.path}
    className="post-link flex flex-row mt-3xl no-underline hover:no-underline hover:bg-gray-200 flex-wrap md:flex-no-wrap md:mt-5xl bg-white"
  >
    <div className="flex flex-col inline-block md:w-2/3 mt-10 md:ml-10 md:mt-auto">
    
      <h3 className="mt-2 text-blue-600 font-semibold">{frontmatter.title}</h3>
      <div className="my-3 pb-1 border-b">
        <div className="flex items-center"> 
        <Marker className="h-4 text-green-400 mr-2" />
        <span className="mr-2">{frontmatter.organization}</span> -  
        <span  className="ml-2">{frontmatter.city}</span> 
       <span className="ml-8 font-light text-gray-500  px-3 rounded-full">posted: {frontmatter.postedAt}</span>
       <span className="ml-8 font-light text-gray-500 px-3 rounded-full">expires: {frontmatter.closingAt}</span>
        </div>
      </div>
      <span className="inline-block w-5xl h-xxxs bg-primary mb-lg"></span>
      <p className="leading-relaxed">{excerpt}</p>
    </div>
    <div className="relative  w-24 h-12 ml-auto mr-2 mt-2">
      <Img
        fluid={frontmatter.image.childImageSharp.fluid}
        alt="logo"
        className='absolute h-full w-full object-cover'
        />                   
    </div>
  </Link>
)
export default PostLink
