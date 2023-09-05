import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Kodemonkey, A Digital A11y Provder"
        src="../images/KKM-Logo.png"
      />
    </Layout>
  )
}

export const Head = () => <title>About</title>

export default AboutPage
