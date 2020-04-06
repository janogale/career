import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <footer
    className="bg-secondary font-body flex mt-20"
    
  >
    <div className="w-4/5 md:w-2/3 mx-auto text-white flex flex-column flex-wrap py-8">
      <span className="w-full text-center text-xl">{siteTitle}</span>
     
     <div className="w-full flex items-center justify-center mt-4">
     <span className="">
      Facebook <a href="https://twitter.com/somcareer">@somcareer</a>
      </span>
      <span className="ml-4">
        Twitter <a href="https://twitter.com/somcareer">@somcareer</a>
      </span>
     </div>
      <span className="w-full text-center text-primary mt-4">
        © {new Date().getFullYear()} {}
        <a className="text-primary" href="https://somcareer.com">
          Somcareer
        </a>
      </span>
      
    </div>
  </footer>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
