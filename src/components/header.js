import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
<<<<<<< HEAD
import MenuNav from './menunav'
import style from "./header.module.css"

const Header = ({ siteTitle, menulinks, siteDescription }) => (
=======

import MainNav from "./mainnav"
import style from "./header.module.css"

const Header = ({ siteTitle, siteDescription, menuLinks }) => (
>>>>>>> upstream/06_04b
  <header id="site-header" className={style.masthead} role="banner">
    <div className={style.masthead_info}>
      <Link to="/">
        <img
          src="/logo.svg"
          width="366"
          height="374"
          alt={siteTitle}
          className={style.site_logo}
        />
        <MenuNav menulinks={menulinks} / >
        <div className={style.site_title}>{siteTitle}</div>
        <div className={style.site_description}>{siteDescription}</div>
      </Link>
    </div>
    <MainNav menuLinks={menuLinks} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
}

export default Header
