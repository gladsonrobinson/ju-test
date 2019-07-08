import {
  FETCH_SUCCESS,
  SET_FETCH_STATUS,
  ADD_ITEM_CART,
} from "./constants";

let initialState = {
  productList: [],
  cart:[],
  errorMessage: "",
  fetchStatus: false
};

const products = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        fetchStatus: false,
        productList: action.payload.data,
        errorMessage: action.payload.message
      };
    case ADD_ITEM_CART: 
      return {...state, 
        cart: [...state.cart, action.payload]
      }
    case SET_FETCH_STATUS:
      return { ...state, fetchStatus: true, errorMessage: "" };
    default:
      return state;
  }
};

export default products;
