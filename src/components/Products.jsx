import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../redux/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Products() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        const categoriesData = response.data;
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);
  //fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products/");
        const productsData = response.data;
        setProducts(productsData);
        setAllProducts(productsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);
  // products filter
  const filterproducts = useCallback(
    (category) => {
      if (category === "all") {
        setProducts(allProducts);
      } else {
        setProducts(allProducts.filter((pro) => pro.category === category));
      }
    },
    [allProducts]
  );
  //add to cart
  const handleAddToCart = useCallback(
    (product) => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) {
        toast.error("You must logged in first!");
      } else {
        dispatch(addToCart(product));
        toast.success("Added to Cart");
      }
    },
    [dispatch]
  );
  const productdetails = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center py-4">Latest Products</h1>
        <hr />
        <div className="cat-buttons d-flex flex-wrap gap-3 justify-content-center my-5">
          <button
            className="btn btn-outline-dark"
            onClick={() => filterproducts("all")}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className="btn btn-outline-dark text-capitalize"
              onClick={() => filterproducts(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        {loading ? (
          <div className="text-center py-5">...loading</div>
        ) : (
          <div className="products">
            <div className="row">
              {products.map((pro) => (
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={pro.id}>
                  <div className="card h-100 p-3">
                    <img
                      className="card-img-top"
                      src={pro.image}
                      alt="Product"
                      height={300}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">
                        {pro.title.slice(0, 12)}...
                      </h5>
                      <p className="card-text text-muted">
                        {pro.description.slice(0, 90)}
                        <Link
                          className="text-primary text-decoration-none"
                          to={`/product/${pro.id}`}
                        >
                          ...more
                        </Link>
                      </p>
                      <hr />
                      <h6 className="text-dark fw-bold">${pro.price}</h6>
                      <hr />
                      <div className="d-flex justify-content-center gap-2 mt-3">
                        <button
                          className="btn btn-dark btn-sm"
                          onClick={() => productdetails(pro.id)}
                        >
                          Buy Now
                        </button>
                        <button
                          className="btn btn-outline-dark btn-sm"
                          onClick={() => handleAddToCart(pro)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </>
  );
}

export default Products;
