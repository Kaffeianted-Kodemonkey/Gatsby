import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "nav-link active" } : {className: "nav-link"}
}

const ExactNavLink = props => (
  <Link getProps={isActive} {...props} />
)

const Leftnav = () => {
  return (
    <ul className="nav flex-column">
      <li className="nav-item"><ExactNavLink className="nav-link" aria-current="page" href="#">Active</ExactNavLink></li>
      <li className="nav-item"><ExactNavLink className="nav-link" href="#/.">Link</ExactNavLink></li>
      <li className="nav-item"><ExactNavLink className="nav-link" href="#/..">Link</ExactNavLink></li>
    </ul>
  )
}

Leftnav.propTypes = {
  siteTitle: PropTypes.string,
}

Leftnav.defaultProps = {
  siteTitle: ``,
}

export default Leftnav
