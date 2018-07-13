import { combineReducers } from "redux";
import tripsReducer from "./Trips/reducer";

export default combineReducers({
  trips: tripsReducer
});
