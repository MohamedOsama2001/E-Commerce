import React from "react";
import { Footer, Nav } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/action";
function Checkout() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems
    ? cartItems.reduce((total, item) => total + item.quantity, 0)
    : 0;
  const totalAmount = cartItems
    ? cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    : 0;

   const handleOrderNow = (e)=>{
    e.preventDefault()
    alert('Order Placed Successfully!')
    dispatch(clearCart())
    navigate('/cart')
    
   }
  return (
    <>
      <Nav />
      <div className="container my-5">
        <h2 className="text-cenetr">Checkout</h2>
        <hr/>
        <div className="row my-5">
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-header">
                <h5 className="mb-0">Billing Address</h5>
              </div>
              <form onSubmit={handleOrderNow}>
                <div className="card-body">
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label for="firstName" className="form-label">
                        First name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder=""
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label for="lastName" className="form-label">
                        Last name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        placeholder=""
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label for="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label for="address" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="1234 Main St"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label for="address2" className="form-label">
                      Address 2 (Optional)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address2"
                      placeholder="Apartment or suite"
                    />
                  </div>

                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <label for="country" className="form-label">
                        Country
                      </label>
                      <input id="country" className="form-control" />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label for="state" className="form-label">
                        State
                      </label>
                      <input id="state" className="form-control" />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label for="zip" className="form-label">
                        Zip
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="zip"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label for="cardName" className="form-label">
                      Name on card
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cardName"
                      placeholder="Full name as displayed on card"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label for="cardNumber" className="form-label">
                      Credit card number
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="cardNumber"
                      required
                    />
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label for="expiration" className="form-label">
                        Expiration
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="expiration"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label for="cvv" className="form-label">
                        CVV
                      </label>
                      <input type="text" className="form-control" id="cvv" required />
                    </div>
                  </div>
                  <button className="btn btn-primary w-100" type="submit">
                    Order Now
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card">
              <div class="card-header">
                <h5 class="mb-0">Order Summary</h5>
              </div>
              <div class="card-body">
                <ul class="list-unstyled mb-4">
                  <li class="d-flex justify-content-between">
                    <span>Products ({totalItems})</span>
                    <span>${totalAmount.toFixed(2)}</span>
                  </li>
                  <li class="d-flex justify-content-between">
                    <span>Shipping</span>
                    <span>$30</span>
                  </li>
                  <li class="d-flex justify-content-between fw-bold border-top pt-2">
                    <span>Total amount</span>
                    <span>${(totalAmount + 30).toFixed(2)}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
