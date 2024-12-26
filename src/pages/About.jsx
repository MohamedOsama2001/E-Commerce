import React from "react";
import { Footer, Nav } from "../components";

function About() {
  return (
    <>
      <Nav />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          officiis tempora atque quis aperiam odit error? Quis minus ullam,
          incidunt saepe eveniet expedita modi esse voluptatem explicabo ab
          perspiciatis error possimus! Libero, ipsa amet omnis nihil ipsam
          facilis eum adipisci, sapiente voluptatem iste illum inventore
          reiciendis? Temporibus debitis rem non est molestias quidem iure unde
          voluptates magni, perspiciatis quisquam. Minima eum dolores quibusdam
          consectetur a, unde vitae consequuntur, repudiandae aliquam est
          provident magnam et, distinctio ratione asperiores placeat atque sunt
          ducimus fuga ipsum aspernatur obcaecati! Officiis quibusdam est, quam
          alias, error ex reiciendis repellendus enim facere saepe recusandae
          rem soluta vero debitis cum nemo ducimus eveniet, voluptatum similique
          totam doloribus. Fugit quod quasi rerum ad blanditiis eum quidem,
          itaque laudantium amet recusandae distinctio harum ut excepturi
          aliquid facilis porro libero est nostrum expedita, fuga dolore minus!
          Dolor tempora vitae beatae quia at necessitatibus fugit fuga veniam
          molestias ab, eum nisi vel, quod voluptate. Ipsum et eligendi sit modi
          nostrum ipsa rem sunt cupiditate laborum maxime, consequatur optio
          amet earum quas nam. Mollitia aperiam, temporibus laborum distinctio,
          excepturi delectus magnam accusamus quibusdam expedita voluptates quae
          nisi ipsam, corrupti culpa ab reprehenderit ea qui hic provident
          aliquam eligendi laboriosam. Aspernatur, nesciunt voluptates.
        </p>
        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
            <div className="col-md-3 col-sm-6 mb-3 px-3">
                <div className="card h-100">
                    <img className="card-img-top img-fluid" src="./assets/men.png" alt="Men's Clothing"/>
                    <div className="card-body">
                        <h5 className="card-title text-center">Men's Clothing</h5>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-3 px-3">
                <div className="card h-100">
                    <img className="card-img-top img-fluid" src="./assets/women.jpg" alt="Women's Clothing"/>
                    <div className="card-body">
                        <h5 className="card-title text-center">WoMen's Clothing</h5>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-3 px-3">
                <div className="card h-100">
                    <img className="card-img-top img-fluid" src="./assets/jewelery.jpg" alt="Jewelery"/>
                    <div className="card-body">
                        <h5 className="card-title text-center">Jewelery</h5>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-3 px-3">
                <div className="card h-100">
                    <img className="card-img-top img-fluid" src="./assets/Electronics.jpg" alt="Electronics"/>
                    <div className="card-body">
                        <h5 className="card-title text-center">Electronics</h5>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default About;
