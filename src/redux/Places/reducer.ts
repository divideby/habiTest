import { Action, handleActions } from "redux-actions";

import {
  FETCH_PLACES,
  FETCH_PLACES_ERROR,
  FETCH_PLACES_SUCCESS
} from "./actionTypes";
import { PlaceEntity, State } from "./models";

const initialState: State = {
  error: {},
  list: [],
  loading: false
};

const reducer = handleActions<State, PlaceEntity[]>(
  {
    [FETCH_PLACES]: (state: State): State => {
      return {
        ...state,
        loading: true
      };
    },
    [FETCH_PLACES_ERROR]: (state: State, action: Action<any>): State => {
      return {
        ...state,
        error: action.payload.error
      };
    },
    [FETCH_PLACES_SUCCESS]: (state: State, action: Action<PlaceEntity[]>): State => {
      const places: PlaceEntity[] = action.payload ? action.payload : [];
      return {
        ...state,
        list: places
      };
    }
  },
  initialState
);

export default reducer;
