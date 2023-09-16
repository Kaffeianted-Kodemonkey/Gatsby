import * as React from "react"
//import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { Seo } from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
    <h1>Customer Reviews</h1>
      <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}><Link to={node.relativePath}>{node.name}</Link></li>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "review"}}) {
      nodes {
        name
        relativePath
      }
    }
  }
`
export const Head = ({ data }) => <Seo />
export default IndexPage
