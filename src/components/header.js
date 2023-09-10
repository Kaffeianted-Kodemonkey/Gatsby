import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"


const Header = ({}) => {
  return (
    <section className="py-5 container-fluid bg-dark text-white">
      <div className="container col-xxl-8 px-0 py-0">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-1">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src="https://getbootstrap.com/docs/5.0/examples/heroes/bootstrap-themes.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">Reviews</h1>
            <p className="lead">See what our customers are saying about us and read testimonials from frist hand accounts.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
