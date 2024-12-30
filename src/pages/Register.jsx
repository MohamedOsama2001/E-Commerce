import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Footer, Nav } from "../components";

function Login() {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [pass,setPass]=useState("")
  const navigate=useNavigate()
  const handleRegister = (e)=>{
    e.preventDefault()
    const user={
      name,email,pass
    }
    localStorage.setItem('user',JSON.stringify(user))
    navigate('/login')
  }
  return (
    <>
      <Nav />
      <div className="login-container container my-5">
        <h2 className="text-center mb-4">Register</h2>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleRegister}>
              <div className="mb-3">
                <label for="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter Your Name"
                  required
                  onChange={(e)=>setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label for="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  required
                  onChange={(e)=>setEmail(e.target.value)}
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
                  required
                  onChange={(e)=>setPass(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <span>
                  Already have an account?{" "}
                  <Link to="/login" className="text-primary">
                    Login
                  </Link>
                </span>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-dark">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
