import React from "react"
<<<<<<< HEAD
import Img from 'gatsby-image'
=======
import { graphql } from "gatsby"
import Img from "gatsby-image"

>>>>>>> upstream/06_04b
import Layout from "../components/layout"
import SEO from "../components/seo"
import Event from "../components/event"
import style from "./events.module.css"

<<<<<<< HEAD
const IndexPage = ({data}) => {
  console.log(data)
=======
const IndexPage = ({ data }) => {
>>>>>>> upstream/06_04b
  return (
    <Layout>
      <SEO
        title="Events"
        description="Come join us at an event in the future!"
        image="/logo.png"
        pathname="/"
        // Boolean indicating whether this is an article:
        // article
      />
      <section className={style.wrapper}>
<<<<<<< HEAD
        <Img fluid={data.headerImage.childImageSharp.fluid}
          alt="Printer"
        />
        {console.log(data)}
=======
        <Img fluid={data.headerImage.childImageSharp.fluid} alt="Robots" />
>>>>>>> upstream/06_04b
        <h1 className={style.heading}>Events</h1>
        <div className={style.events}>
          <div className={style.inEvents}>
          {data.futureEvents.nodes.map(future => {
            return(
              <div>
                
                <p className={style.title}>{future.name}</p>
                <p className={style.location}>{future.location}</p>
                <p className={style.url}>{future.url}</p>
                <p className={style.start}>Start: {future.start}</p>
                <p className={style.end}>End: {future.end}</p>
              </div>
            )
          })}
          </div>
          <div className={style.inEvents}>

            <Img fixed={data.nextToText.childImageSharp.fixed}
              alt="stuff" />
          </div>
          <div className={style.inEvents}>

            <Img fixed={data.nextToText.childImageSharp.fixed}
              alt="stuff" />
          </div>
        </div>
          
      </section>
      <section className={style.events}>
        <div className={style.eventList}>
          <h2 className={style.eventHeading}>Future events</h2>
          <ul className={style.events__list}>
            {data.futureEvents.nodes.map(event => (
              <Event key={event.id} event={event} />
            ))}
          </ul>
        </div>
        <div className={style.eventList}>
          <h2 className={style.eventHeading}>Past events</h2>
          <ul className={style.events__list}>
            {data.pastEvents.nodes.map(event => (
              <Event key={event.id} event={event} />
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

<<<<<<< HEAD

export const query = graphql`
  {
    headerImage: file(
      relativePath: { eq: "getting-creative-with-3-d-printers-1184x360.jpg"}
      ) {
        childImageSharp{
          fluid(maxWidth:1184){
            ...GatsbyImageSharpFluid
          }
        }
      },
      nextToText: file(
        relativePath: {eq: "bubbles-disc.png"}
        ) {
          childImageSharp{
            fixed(width: 200){
              ...GatsbyImageSharpFixed
            }
          }
        },
        futureEvents: allEvent(
          filter: { collection:{ eq: "future" }}
          sort: { fields: start, order: ASC} 
        ){
          nodes {
            id
            name
            start
            end
            location
            url
          }
        },
    pastEvents: allEvent(
      filter: { collection: { eq: "past" } }
      sort: { fields: start, order: ASC }
=======
export const query = graphql`
  {
    headerImage: file(
      relativePath: { eq: "getting-creative-with-3-d-printers-1184x360.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1184) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    futureEvents: allEvent(
      filter: { collection: { eq: "future" } }
      sort: { fields: startDate, order: ASC }
    ) {
      nodes {
        id
        name
        startDate
        endDate
        location
        url
      }
    }
    pastEvents: allEvent(
      filter: { collection: { eq: "past" } }
      sort: { fields: startDate, order: ASC }
>>>>>>> upstream/06_04b
    ) {
      nodes {
        id
        name
<<<<<<< HEAD
        start
        end
=======
        startDate
        endDate
>>>>>>> upstream/06_04b
        location
        url
      }
    }
<<<<<<< HEAD
      
    
      }
`
=======
  }
`
>>>>>>> upstream/06_04b
