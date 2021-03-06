import PropTypes from "prop-types"
import React from "react"

const Body = ({ children }) => (
  <main className="w-full md:w-4/5 mx-auto px-4 ">{children}</main>
)

Body.propTypes = {
  children: PropTypes.node.isRequired
}

export default Body
