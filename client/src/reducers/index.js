import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cardReducer from "./cardReducer";
import labelReducer from "./labelReducer";
import labelFilterReducer from "./labelFilterReducer";

export default combineReducers({
  auth: authReducer,
  cards: cardReducer,
  labels: labelReducer,
  filter: labelFilterReducer,
});
