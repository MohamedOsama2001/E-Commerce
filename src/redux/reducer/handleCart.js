import {
  ADD_TO_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  REMOVE_FROM_CART,
  CLEAR_CART,
} from "../action";

const initialState = {
  items: JSON.parse(localStorage.getItem("cart")) || [],
};
const handleCart = (state = initialState, action) => {
  let updatedItems;
  switch (action.type) {
    case ADD_TO_CART: {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        updatedItems = state.items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        updatedItems = [...state.items, { ...item, quantity: 1 }];
      }
      localStorage.setItem("cart", JSON.stringify(updatedItems));

      return {
        ...state,
        items: updatedItems,
      };
    }

    case INCREMENT_QUANTITY:
      updatedItems = state.items.map((i) =>
        i.id === action.payload ? { ...i, quantity: i.quantity + 1 } : i
      );
      localStorage.setItem("cart", JSON.stringify(updatedItems));
      return {
        ...state,
        items: updatedItems,
      };

    case DECREMENT_QUANTITY:
      updatedItems = state.items.map((i) =>
        i.id === action.payload && i.quantity > 1
          ? { ...i, quantity: i.quantity - 1 }
          : i
      );
      localStorage.setItem("cart", JSON.stringify(updatedItems));
      return {
        ...state,
        items: updatedItems,
      };

    case REMOVE_FROM_CART:
      updatedItems = state.items.filter((item) => item.id !== action.payload);

      localStorage.setItem("cart", JSON.stringify(updatedItems));

      return {
        ...state,
        items: updatedItems,
      };
    case CLEAR_CART:
      localStorage.removeItem("cart");
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }
};

export default handleCart;
