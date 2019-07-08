import {
  FETCH_SUCCESS,
  SET_FETCH_STATUS,
  SEARCH_REJECTED,
  CLEAR_RESULTS,
  ADD_ITEM_CART
} from "./constants";
import axios from "axios";


export const getProducts = () => {
  console.log("helloo")
  return dispatch => {
    return fetch('data.json')
      .then(res => res.json())
      .then(res => {
        dispatch(setProductList(res.menu));
      })
      .catch(error => {
        dispatch(setError(error));
      });
  };
};

export const addItemToCart  = (item) => {
  return {
    type: ADD_ITEM_CART,
    payload: item
  };
}

function setProductList(data) {
  return {
    type: FETCH_SUCCESS,
    payload: {
      data,
      message: data && data.length > 0 ? "" : "no_records_found"
    }
  };
}

function setError(err) {
  return {
    type: SEARCH_REJECTED,
    payload: err
  };
}

function setFetchStatus() {
  return {
    type: SET_FETCH_STATUS
  };
}

function clearResults() {
  return {
    type: CLEAR_RESULTS
  };
}
