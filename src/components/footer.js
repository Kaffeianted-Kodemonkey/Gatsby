import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "nav-link active" } : {className: "nav-link"}
}

const ExactNavLink = props => (
  <Link getProps={isActive} {...props} />
)

const Footer = ({}) => {
  return (
    <section className="py-5 container-fluid bg-danger">
      <footer>
        <p className="text-center">&#169; 2023 || <Link to="kaffeinatedkodemonkey.com/">Kaffeinated Kodemonkey</Link></p>
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
