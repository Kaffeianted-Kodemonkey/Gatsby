import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "nav-link active" } : {className: "nav-link"}
}

const ExactNavLink = props => (
  <Link getProps={isActive} {...props} />
)

const Footer = () => {
  return (
    <section className="bg-dark pt-3" id="footer">

      <footer className="container-fluid pt-5 pb-4 px-2  bg-danger text-white footer">
        <p className="text-center">&#169; 2023 || <Link to="kaffeinatedkodemonkey.com">Kaffeinated Kodemonkey</Link></p>
        </footer>
    </section>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
