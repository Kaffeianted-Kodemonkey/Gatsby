import * as React from 'react'
import { graphql } from 'gatsby'
import Reviewlayout from '../../components/reviewlayout'
import Seo from '../../components/seo'

const ReviewPost = ({ data, children }) => {
  return (
    <Reviewlayout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Reviewlayout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default ReviewPost
