import { Action, handleActions } from "redux-actions";

import {
  FETCH_TRIPS,
  FETCH_TRIPS_ERROR,
  FETCH_TRIPS_SUCCESS
} from "./actionTypes";
import { TripEntity, TripsState } from "./models";

const initialState: TripsState = {
  error: {},
  list: [],
  loading: false
};

const reducer = handleActions<TripsState, TripEntity[] | object>(
  {
    [FETCH_TRIPS]: (state: TripsState): TripsState => {
      return {
        ...state,
        loading: true
      };
    },
    [FETCH_TRIPS_ERROR]: (
      state: TripsState,
      action: Action<object>
    ): TripsState => {
      const { payload = {} } = action;
      return {
        ...state,
        error: payload
      };
    },
    [FETCH_TRIPS_SUCCESS]: (
      state: TripsState,
      action: Action<TripEntity[]>
    ): TripsState => {
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
