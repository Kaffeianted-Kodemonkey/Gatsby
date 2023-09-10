import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "list-group-item active" } : {className: "list-group-item"}
}

const ExactNavLink = props => (
  <Link getProps={isActive} {...props} />
)

const Leftnav = ({}) => {
  return (
    <ul className="list-group">
      <li className="list-group-item"><ExactNavLink to="/">An active item</ExactNavLink></li>
      <li className="list-group-item"><ExactNavLink to="...">A second item</ExactNavLink></li>
      <li className="list-group-item"><ExactNavLink to="....">A third item</ExactNavLink></li>
      <li className="list-group-item"><ExactNavLink to=".....">A fourth item</ExactNavLink></li>
      <li className="list-group-item"><ExactNavLink to="......">And a fifth one</ExactNavLink></li>
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
