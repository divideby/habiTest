import { createAction } from "redux-actions";

import {
  FETCH_TRIPS,
  FETCH_TRIPS_ERROR,
  FETCH_TRIPS_SUCCESS
} from "./actionTypes";
import { TripEntity } from "./models";

export const fetchTrips = createAction(FETCH_TRIPS);
export const fetchTripsError = createAction(
  FETCH_TRIPS_ERROR,
  ({ error }: { error: any }) => error
);
export const fetchPlacesSuccess = createAction(
  FETCH_TRIPS_SUCCESS,
  (trips: TripEntity[]) => trips
);
