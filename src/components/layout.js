/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

// Styles
import "../styles/reset.css"
import "../styles/accessibility.css"
import "../styles/global.module.css"
import "../fonts/fonts.css"
import style from "./layout.module.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
<<<<<<< HEAD
          menulinks {
            link
            title
        }
=======
          menuLinks {
            name
            link
          }
>>>>>>> upstream/06_04b
        }
      }
    }
  `)

  return (
    <>
      <a className="skip-link screen-reader-text" href="#primary">
        Skip to the content
      </a>
      <Header
        siteTitle={data.site.siteMetadata.title}
        siteDescription={data.site.siteMetadata.description}
<<<<<<< HEAD
        menulinks={data.site.siteMetadata.menulinks}
=======
        menuLinks={data.site.siteMetadata.menuLinks}
>>>>>>> upstream/06_04b
      />
      <main id="primary" className={style.site_main}>
        {children}
      </main>
      <Footer siteTitle={data.site.siteMetadata.title} />
    </>
  )
}

export default Layout
