import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"
import Leftnav from"./leftnav"
import Footer from "./footer"
import "./layout.scss"

const Reveiwlayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title,
          subtitle
        }
      }
    }
  `)

  return (
    <div className="container-fluid p-0 d-flex flex-column h-100">
      <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />

      <div className="b-example-divider"></div>

      <main>
        <section className="py-5 container-fluid">
          <div className="row py-lg-5">
            <div className="col-lg-2 col-md-2 mx-auto">
              <Leftnav />
            </div>
            <div className="col-lg-8 col-md-8 mx-auto">
              {children}
            </div>
          </div>
        </section>

      </main>

      <div className="b-example-divider"></div>

      <Footer siteTitle={data.site.siteMetadata?.title || `Title`} />
    </div>
  )
}

Reveiwlayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Reveiwlayout
