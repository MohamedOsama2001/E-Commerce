import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
function Nav() {
  const cartItems = useSelector((state) => state.cart.items);
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-body-secondary py-3 sticky-top">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            E-commerce
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="d-flex gap-2">
              <NavLink className="btn btn-outline-dark" to="/login">
                <i class="fas fa-sign-in-alt"></i> Login
              </NavLink>
              <NavLink className="btn btn-outline-dark" to="/register">
                <i class="fas fa-user-plus"></i> Register
              </NavLink>
              {user ? (
                <NavLink className="btn btn-outline-dark" to="/cart">
                  <i class="fas fa-cart-plus"></i> Cart(
                  {cartItems ? cartItems.length : 0})
                </NavLink>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
