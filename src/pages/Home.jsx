import React from "react";
import Nav from "../components/Nav";
import Main from "../components/Main";
import { Footer, Products } from "../components";

function Home() {
  return (
    <>
      <Nav />
      <Main/>
      <Products/>
      <Footer/>
    </>
  );
}

export default Home;
