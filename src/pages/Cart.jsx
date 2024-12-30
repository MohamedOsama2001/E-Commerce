import React from "react";
import { Footer, Nav } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { decrementQuantity, incrementQuantity, removeFromCart } from "../redux/action";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cart() {
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems?cartItems.reduce((total, item) => total + item.quantity, 0): 0;
  const totalAmount = cartItems
    ? cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    : 0;
  const handleIncrement=(id)=>{
    dispatch(incrementQuantity(id))
  } 
  const handleDecrement=(id)=>{
    dispatch(decrementQuantity(id))
  } 
  const handleRemove= (id)=>{
    if(window.confirm('Delete this product?')){
      dispatch(removeFromCart(id))
    }
  }
  const handleCheckout= ()=>{
    cartItems.length===0?toast.error('Cart is Empty!'):navigate('/checkout')
  }
  return (
    <>
      <Nav />
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8 mb-4">
            <div className="card mb-3">
              <div className="card-header">
                <h5 className="mb-0">Items List</h5>
              </div>
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div
                    className="card-body d-flex align-items-center"
                    key={item.index}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="img-fluid me-3"
                      style={{ maxHeight: "80px" }}
                    />
                    <div className="flex-grow-1">
                      <h6 className="mb-1">{item.title}</h6>
                      <p className="mb-0">
                        {item.quantity} x ${item.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="d-flex align-items-center">
                      {item.quantity===1?(
                        <button
                        className="btn btn-outline-dark btn-sm"
                        onClick={() => handleRemove(item.id)}
                      >
                        <i class="fas fa-trash-alt"></i>
                      </button>
                      ):(<button
                        className="btn btn-outline-dark btn-sm"
                        onClick={() => handleDecrement(item.id)}
                      >
                        <i className="fas fa-minus"></i>
                      </button>)}
                      <span className="mx-3">{item.quantity}</span>
                      <button
                        className="btn btn-outline-dark btn-sm"
                        onClick={() => handleIncrement(item.id)}
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center my-4 fs-3">Your cart is empty.</p>
              )}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0">Order Summary</h5>
              </div>
              <div className="card-body">
                <ul className="list-unstyled mb-4">
                  <li className="d-flex justify-content-between">
                    <span>Products ({totalItems})</span>
                    <span>${totalAmount.toFixed(2)}</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <span>Shipping</span>
                    <span>$30.00</span>
                  </li>
                  <li className="d-flex justify-content-between fw-bold border-top pt-2">
                    <span>Total amount</span>
                    <span>${(totalAmount + 30).toFixed(2)}</span>
                  </li>
                </ul>
                <button className="btn btn-dark w-100" onClick={handleCheckout}>Go to checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer/>
    </>
  );
}

export default Cart;
