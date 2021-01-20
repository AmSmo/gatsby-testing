import React from "react"
<<<<<<< HEAD
import Img from "gatsby-image"
=======
import { graphql } from "gatsby"
import Img from "gatsby-image"

>>>>>>> upstream/06_04b
import Layout from "../components/layout"
import SEO from "../components/seo"
import RobotImage from "../components/robotimage"
import style from "./events.module.css"

<<<<<<< HEAD
const AboutPage = ({data}) => {
  console.log(data)
=======
const AboutPage = ({ data }) => {
>>>>>>> upstream/06_04b
  return (
    <Layout>
      <SEO
        title="About this site"
        description="Information about the site."
        image="/logo.png"
        pathname="/"
        // Boolean indicating whether this is an article:
        // article
      />
<<<<<<< HEAD
      <section>
        <Img fluid={data.headerImage.childImageSharp.fluid}
          alt="Robots"
        />
        <h1>About this site</h1>
=======
      <section className={style.wrapper}>
        <Img fluid={data.headerImage.childImageSharp.fluid} alt="Robots" />
        <h1 className={style.heading}>About this site</h1>
>>>>>>> upstream/06_04b
        <RobotImage
          src={"/images/bubbles-callout.png"}
          alt={"Bubbles the Robot"}
        />
        <RobotImage src={"/images/dolly-callout.png"} alt={"Dolly the Robot"} />
        <RobotImage
          src={"/images/eileen-callout.png"}
          alt={"Eileen the Robot"}
        />
        <div>
          <p>This is the first page I've created using Gatsby!</p>
          <p>
            It was originally based on the Index page, but now it's totally
            unique!
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage
<<<<<<< HEAD
export const query = graphql`
  {
    headerImage: file(
      relativePath: { eq: "robots-androids-and-cyborgs-oh-my-1184x360.jpg"}
      ) {
        childImageSharp{
          fluid(maxWidth:1184){
            ...GatsbyImageSharpFluid
          }
        }
      }
    
  }
`
=======

export const query = graphql`
  {
    headerImage: file(
      relativePath: { eq: "robots-androids-and-cyborgs-oh-my-1184x360.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1184) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
>>>>>>> upstream/06_04b
