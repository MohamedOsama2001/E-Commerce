import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Products() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const navigate=useNavigate()
  //fetch categories
  useEffect(() => {
    const fetchcategories = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        const categoriesData = response.data;
        setCategories(categoriesData);
      } catch (error) {
        console.log("Error fetching categories:", error);
      }
    };
    fetchcategories();
  }, []);
  //fetch products
  useEffect(() => {
    const fetchproducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products/");
        const productsData = response.data;
        setProducts(productsData);
        setAllProducts(productsData);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };
    fetchproducts();
  },[]);
  // products filter
  const filterproducts = (category) => {
    if (category === "all") {
      setProducts(allProducts);
    } else {
      const newProducts = allProducts.filter(
        (pro) => pro.category === category
      );
      setProducts(newProducts);
    }
  };
  const productdetails=(id)=>{
    navigate(`/product/${id}`)
  }
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
                    <h5 className="card-title">{pro.title.slice(0, 12)}...</h5>
                    <p className="card-text text-muted">
                      {pro.description.slice(0, 90)}
                      <span className="text-primary">...more</span>
                    </p>
                    <hr />
                    <h6 className="text-dark fw-bold">${pro.price}</h6>
                    <hr />
                    <div className="d-flex justify-content-center gap-2 mt-3">
                      <button className="btn btn-dark btn-sm" onClick={()=>productdetails(pro.id)}>Buy Now</button>
                      <button className="btn btn-outline-dark btn-sm">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
