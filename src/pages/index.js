import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./index.module.css"
import styled from 'styled-components'
const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="The home page"
        description="You can customize the SEO text here."
        image="/logo.png"
        pathname="/"
        // Boolean indicating whether this is an article:
        // article
      />
      <section className={style.wrapper}>

        <h1 className={style.heading}>This is the new title for the page.</h1>
        <CentralWrap>
          <p>This file, index.js, functions as the homepage for the site.</p>
          <p>
            It can be populated with pure HTML like this, and extended using all
            available Gatsby and React components.
          </p>
        </CentralWrap>
      </section>
    </Layout>
  )
}

export default IndexPage

const CentralWrap = styled.div`
border-radius: 1rem;
padding: 5px;
background: whitesmoke ;
box-shadow: 0.5rem 0.5rem 3rem hsla(0, 0%, 100%, .2), -0.5rem -0.5rem 3rem black  
`