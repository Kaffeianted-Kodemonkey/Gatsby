import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>I am going to be a pro at Gatsby.</p>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage
