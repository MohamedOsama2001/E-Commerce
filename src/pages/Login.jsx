import React from "react";
import { Link } from "react-router-dom";
import { Footer, Nav } from "../components";

function Login() {
  return (
    <>
      <Nav />
      <div className="login-container container my-5">
        <h2 className="text-center mb-4">Login</h2>
        <hr />
        <div className="row my-5 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div className="mb-3">
                <label for="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div className="mb-3">
                <span>
                  New Here?{" "}
                  <Link to="/register" className="text-primary">
                    Register
                  </Link>
                </span>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-dark">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Login;
