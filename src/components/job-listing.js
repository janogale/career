import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Marker from "../svg/marker.svg"
import { Box, Text } from "@chakra-ui/core"

import slugify from "slugify"

const PostLink = ({ post: { excerpt, frontmatter } }) => {
  const image = frontmatter?.image?.childImageSharp?.fluid

  const slug = slugify(frontmatter.title.toLowerCase())

  return (
    <Link
      to={`/jobs/${slug}`}
      className="no-underline hover:no-underline hover:bg-gray-200"
    >
      <Box p={2} display={{ md: "flex" }}>
        <Box flexShrink="0" width={["20%", "10%", "8%"]}>
          {image && <Img fluid={image} alt="logo" />}
        </Box>

        <Box mt={{ base: 4, md: 0 }} ml="4">
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="sm"
            letterSpacing="wide"
            className="text-teal-500"
          >
            {frontmatter.title}
          </Text>
          <div className="flex flex-col md:flex-row md:mb-6">
            <div className="flex mb-4 md:mb-0">
              <Marker className="h-5 mr-3 text-green-300" />
              <span className="">{frontmatter.organization}</span>
              <span className="ml-12">{frontmatter.city}</span>
            </div>
          </div>
          <Text mt={2} color="gray.500">
            {excerpt}
          </Text>
          <div className="flex flex-col md:flex-row">
            <span className="font-light  md:bg-gray-100 px-3 py-1 rounded-full text-gray-600 mb-2 ">
              posted: {frontmatter.postedAt}
            </span>
            <span className="font-light md:bg-gray-100 px-3 py-1 rounded-full text-gray-600 mb-2 md:ml-12">
              closing: {frontmatter.closingAt}
            </span>
          </div>
        </Box>
      </Box>
    </Link>
  )
}
export default PostLink
