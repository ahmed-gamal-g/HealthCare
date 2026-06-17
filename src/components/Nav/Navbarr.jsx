import React from "react";
import "./Navbarr.css";
import Logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <a className="navbar-brand" href="/#">
            <img src={Logo} alt="sss" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mt-0 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={'/'}>
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/#">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      Our Team
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      FAQ's
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      Booking
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      Error 404
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      Login / Register
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/#">
                      Service
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      Service Details
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Blog
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/#">
                      Blogs
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      Blogs Details
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/About'}>
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="num-nav" role="search">
              <a href="/">
                <span><FontAwesomeIcon icon={faPhone}/></span>
                (+10) 999 888 777
              </a>
              <button className="btn-nav" type="submit">
                Contact Us
                <span> <FontAwesomeIcon icon={faChevronRight} /> </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
