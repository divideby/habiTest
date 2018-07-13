import { Action, handleActions } from "redux-actions";

import {
  FETCH_TRIPS,
  FETCH_TRIPS_ERROR,
  FETCH_TRIPS_SUCCESS
} from "./actionTypes";
import { State, TripEntity } from "./models";

const initialState: State = {
  error: {},
  list: [],
  loading: false
};

const reducer = handleActions<State, TripEntity[] | object>(
  {
    [FETCH_TRIPS]: (state: State): State => {
      return {
        ...state,
        loading: true
      };
    },
    [FETCH_TRIPS_ERROR]: (state: State, action: Action<object>): State => {
      const { payload = {} } = action;
      return {
        ...state,
        error: payload
      };
    },
    [FETCH_TRIPS_SUCCESS]: (
      state: State,
      action: Action<TripEntity[]>
    ): State => {
      const { payload = [] } = action;
      return {
        ...state,
        list: payload,
        loading: false
      };
    }
  },
  initialState
);

export default reducer;
