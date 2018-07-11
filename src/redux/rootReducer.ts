import { combineReducers } from "redux";
import placesReducer from "./Places/reducer";

export const state = combineReducers({
  places: placesReducer
});
