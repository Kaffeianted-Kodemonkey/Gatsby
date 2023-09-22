import * as React from 'react'
import Reviewlayout from '../components/reviewlayout'
import Seo from '../components/seo'

const Review = () => {
  return (
    <Reviewlayout pageTitle="Super Cool Blog Posts">
      <p>My customer reviews will go here (eventually).</p>
    </Reviewlayout>
  )
}

export const Head = () => <Seo title="Super Cool Reveiws" />

export default Review
