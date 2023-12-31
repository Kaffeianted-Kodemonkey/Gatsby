import * as React from "react"
//mport { Link } from "gatsby"

import Layout from "../components/layout"
import {Seo} from "../components/seo"

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
  </Layout>
)

export default SecondPage

export const Head = () => (
    <Seo title="Page two" />
)
