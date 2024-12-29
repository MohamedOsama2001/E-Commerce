import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Footer, Nav } from "../components";
import Marquee from "react-fast-marquee";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchproduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        const productData = response.data;
        setProduct(productData);
        //fetch related products
        const relatedResponse = await axios.get(
          `https://fakestoreapi.com/products/category/${productData.category}`
        );
        const relatedData = relatedResponse.data.filter(
          (item) => item.id !== productData.id
        );
        setRelatedProducts(relatedData);
      } catch (error) {
        console.log("Error product fetching", error);
      }
    };
    fetchproduct();
  }, [id]);
  const productdetails = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <>
      <Nav />
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src={product.image}
              alt="Product"
              className="img-fluid rounded"
              style={{ height: 400 }}
            />
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold">{product.title}</h2>
            <div className="d-flex align-items-center mb-3">
              <span className="me-2 text-muted fs-5">
                {product.rating?.rate}
              </span>
              <span className="text-dark fs-5">
                <i className="fas fa-star"></i>
              </span>
            </div>
            <div className="text-dark fw-bold fs-4 mb-3">${product.price}</div>
            <p className="text-muted">{product.description}</p>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-dark">Add to Cart</button>
              <button className="btn btn-dark">Go to Cart</button>
            </div>
          </div>
        </div>
      </div>
      {/*  releated products*/}
      <div className="container my-5">
        <h2>You may also Like</h2>
        <Marquee
          gradient={false}
          speed={40}
          loop={0}
          pauseOnHover={true}
          style={{ display: "flex", overflow: "hidden" }}
          className="my-5"
        >
          {relatedProducts.map((item, index) => (
            <div
              className="card py-3"
              style={{
                width: "400px",
                marginRight: "10px",
                flexShrink: 0,
              }}
              key={index}
            >
              <img
                src={item.image}
                className="card-img-top"
                alt={item.title}
                style={{ height: "150px", objectFit: "contain" }}
              />
              <div className="card-body text-center">
                <h6 className="card-title text-truncate">{item.title}</h6>
                <p className="card-text fw-bold">${item.price}</p>
                <div className="d-flex justify-content-center gap-2 mt-3">
                  <button
                    className="btn btn-dark btn-sm"
                    onClick={() => productdetails(item.id)}
                  >
                    Buy Now
                  </button>
                  <button className="btn btn-outline-dark btn-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      <Footer />
    </>
  );
}

export default Product;
