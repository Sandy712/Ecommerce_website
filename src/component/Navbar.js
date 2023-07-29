import React,{useContext, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { DataContainer } from "../App";
import { Link } from "react-router-dom";
import './style/style.scss';
import logo from '../Images/logoicon.png';

 

export default function Navbar() {
  const {CartItems,setCartItems}=useContext(DataContainer);

  useEffect(()=> {
    if(CartItems.length ===0) {
      const storedCart = localStorage.getItem("cartItem");
      setCartItems(JSON.parse(storedCart));
    }
  },)



  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid"  >
          <Link className="navbar-brand" style={{ marginLeft:10}} to="/">
            <img className="logo" src={logo} alt="loading..." />
          </Link>

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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mx-4">
              <li className="nav-item">
                <Link className="nav-link active element" aria-current="page" to="/"
                style={{fontWeight:'bold'  , borderRadius:9 , background:'#fff', boxShadow:'3px 5px 10px gray'}}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active element" to="/shop" style={{fontWeight:'bold' , borderRadius:9 , background:'#fff', boxShadow:'3px 5px 10px gray'}}>
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active element" to="#box" style={{fontWeight:'bold' , borderRadius:9 , background:'#fff', boxShadow:'3px 5px 10px gray'}}>
                  Exclusive
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active element" to="#box" style={{fontWeight:'bold' , borderRadius:9 , background:'#fff', boxShadow:'3px 5px 10px gray'}}>
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/cart" data-num={CartItems.length}>
                  <FontAwesomeIcon icon={faShoppingCart} />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="#box">
                <FontAwesomeIcon icon={faUser} size="lg" />
                </Link>
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
