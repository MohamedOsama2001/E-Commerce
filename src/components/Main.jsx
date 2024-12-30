import React from "react";

function Main() {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img className="card-img img-fluid" src="./assets/main.jpg" alt="Card" />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container my-5">
              <h5 className="card-title fs-1 text fw-lighter">
                Welcome to our store
              </h5>
              <p className="card-text fs-5 d-none d-sm-block">
                Welcome to our store! Discover a wide range of high-quality
                products at competitive prices, all in one place. Enjoy a
                seamless shopping experience with fast delivery and exclusive
                deals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
