import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"
import Footer from "./footer"
import Header from "./header"
import Leftnav from"./leftnav"
import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="container-fluid p-0">
      <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
  
      <div className="b-example-divider"></div>

      <main>
        <section className="py-5 container-fluid">
          <div className="row py-lg-5">
            <div className="col-lg-2 col-md-8 mx-auto">
              <Leftnav siteTitle={data.site.siteMetadata?.title || `Title`} />
            </div>
            <div className="col-lg-6 col-md-8 mx-auto">
              <p>{children}</p>
            </div>
          </div>
        </section>

      </main>

      <div className="b-example-divider"></div>

      <Footer siteTitle={data.site.siteMetadata?.title || `Title`} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
