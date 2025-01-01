import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Footer, Nav } from "../components";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToCart } from "../redux/action";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchproduct = async () => {
      setLoading(true);
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
        setLoading(false)
      } catch (error) {
        console.log("Error product fetching", error);
      }
    };
    fetchproduct();
  }, [id]);
  const productdetails = (id) => {
    navigate(`/product/${id}`);
  };
  // add to cart
  const handleAddToCart = (product) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      toast.error("You must logged in first!");
    } else {
      dispatch(addToCart(product));
      toast.success("Added to Cart");
    }
  };
  return (
    <>
      <Nav />
      {loading?(<div className="text-center p-5">...loading</div>):(
        <>
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
              <button
                className="btn btn-outline-dark"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
              <Link className="btn btn-dark" to={"/cart"}>
                Go to Cart
              </Link>
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
                  <button className="btn btn-outline-dark btn-sm" onClick={() => handleAddToCart(item)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
        </>
      )}

      <Footer />
      <ToastContainer/>
    </>
  );
}

export default Product;
