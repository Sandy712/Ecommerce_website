import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
 

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid"  >
          <a className="navbar-brand" style={{ marginLeft:10}} href="/">
            shopsyha
          </a>

          <form className="d-flex " role="search"  >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{borderRadius:20}}
            />
            <button className="button" type="submit" >
              <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
            </button>
          </form>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mx-4" 
            
            >
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/shop">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#box">
                  Exclusive
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/cart">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link active dropdown-toggle lg"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon icon={faUser} size="lg" />
                </a>
                <ul className="dropdown-menu" style={{ left: "-70px" }}>
                  <li>
                    <a className="dropdown-item" href="/">
                      Sing-in/Sign-up
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Details
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">Something</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
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
        </div>
      </nav>
       
    </>
  );
}
