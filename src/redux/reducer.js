import { combineReducers } from "redux";
import movies from "../containers/Products/reducers";

const AppReducer = combineReducers({
  movies
});

export default AppReducer;
