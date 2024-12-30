import React, { useRef } from "react";
import { Footer, Nav } from "../components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Contact() {
  const name=useRef(null)
  const email=useRef(null)
  const message=useRef(null)
  const handleContact=(e)=>{
    e.preventDefault()
    toast.success('Message sent successfully!')
    name.current.value=''
    email.current.value=''
    message.current.value=''
  }
  return (
    <>
      <Nav />
      <div className="login-container container my-5">
        <h2 className="text-center mb-4">Conatct Us</h2>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleContact}>
              <div className="mb-3">
                <label for="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter Your Name"
                  required
                  ref={name}
                />
              </div>
              <div className="mb-3">
                <label for="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  required
                  ref={email}
                />
              </div>
              <div className="mb-3">
                <label for="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows={5}
                  placeholder="Enter your message"
                  required
                  ref={message}
                ></textarea>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-dark">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer/>
    </>
  );
}

export default Contact;
