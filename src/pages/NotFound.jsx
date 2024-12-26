import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "../components";

function NotFound() {
  return (
    <>
    <Nav/>
      <div className="conatiner py-3 my-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center py-5">
              <h4 className="display-5 p-3">404: Page Not Found</h4>
              <Link to="/" className="btn btn-outline-dark mx-4">
               <i className="fa fa-arrow-left"></i> Go Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
