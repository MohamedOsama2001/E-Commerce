import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Footer, Nav } from "../components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email,setEmail]=useState('')
  const [pass,setPass]=useState('')
  const navigate=useNavigate()
  const handleLogin=(e)=>{
    e.preventDefault();
    const user=JSON.parse(localStorage.getItem('user'))
    if(user && user.email===email && user.pass===pass){
      navigate('/')
    }
    else{
      toast.error('Invalid Credentials')
    }
  }
  return (
    <>
      <Nav />
      <div className="login-container container my-5">
        <h2 className="text-center mb-4">Login</h2>
        <hr />
        <div className="row my-5 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label for="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  onChange={(e)=>setEmail(e.target.value)}
                  required
                  
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
                  onChange={(e)=>setPass(e.target.value)}
                  required
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
      <ToastContainer/>
    </>
  );
}

export default Login;
