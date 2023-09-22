import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Reviewlayout from '../../components/reviewlayout'
import Seo from '../../components/seo'

const ReviewPage = ({ data }) => {
  return (
    <Reviewlayout pageTitle="My Blog Posts">
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2><Link to={`/review/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link></h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))
      }
    </Reviewlayout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          slug
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default ReviewPage
