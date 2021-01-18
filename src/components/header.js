import { Link } from "gatsby"
import React, { useState } from "react"

import NavLink from "../components/nav-link"
import Logo from "../svg/logo.svg"

const Header = () => {
  const [isExpanded, toggleExpansion] = useState(false)
  const pages = [
    {
      route: `/`,
      text: `Find Jobs`
    },
    {
      route: `/about`,
      text: `About`
    },
    {
      route: `/contact-us`,
      text: `Contact Us`
    }
  ]
  return (
    <header
      className="font-display flex bg-gray-300 shadow-md fixed top-0 right-0 left-0 z-10"
      style={{ minHeight: `70px` }}
    >
      <div className="w-full md:w-2/3 mx-auto p-4 flex flex-wrap items-center justify-between">
        <Link to="/">
          <Logo />
        </Link>
        <Link
          to="/"
          className="text-lg text-green-600	 font-semibold tracking-wide"
        >
          Somcareer Jobs
        </Link>
        <nav className="hidden md:block">
          {pages.map(page => (
            <NavLink key={page.text} to={page.route}>
              {page.text}
            </NavLink>
          ))}
        </nav>
        <button
          className="md:hidden text-teal-500 border-teal-500 border-2 rounded p-2"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          Menu
        </button>
        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:hidden md:flex md:items-center mt-4 w-full md:w-auto border-t-2 border-white`}
        >
          {pages.map(page => (
            <Link
              className="block md:inline-block mt-4 md:mt-0 md:ml-6 no-underline text-teal-500 font-display hover:no-underline"
              activeStyle={{ color: `#EE6C4D` }}
              key={page.text}
              to={page.route}
            >
              {page.text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
