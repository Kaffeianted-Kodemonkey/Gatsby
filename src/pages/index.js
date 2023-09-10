import * as React from "react"
import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import { Seo } from "../components/seo"

const IndexPage = () => (
  <Layout>
    <p>List customer reviews </p>
  </Layout>
)

export default IndexPage

export const Head = () => (
    <Seo />
)
