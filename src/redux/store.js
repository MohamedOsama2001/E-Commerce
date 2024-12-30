import { createStore } from 'redux';
import rootReducer from './reducer';


const cartProducts = localStorage.getItem("cart");
const initialState = cartProducts ? { cart: { items: JSON.parse(cartProducts) } } : { cart: { items: [] } };
const store = createStore(rootReducer,initialState);

export default store;
