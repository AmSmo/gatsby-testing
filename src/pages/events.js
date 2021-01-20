import React from "react"
import Img from 'gatsby-image'
import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./events.module.css"

const IndexPage = ({data}) => {
  console.log(data)
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
        <Img fluid={data.headerImage.childImageSharp.fluid}
          alt="Printer"
        />
        {console.log(data)}
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
    </Layout>
  )
}

export default IndexPage


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
    ) {
      nodes {
        id
        name
        start
        end
        location
        url
      }
    }
      
    
      }
`