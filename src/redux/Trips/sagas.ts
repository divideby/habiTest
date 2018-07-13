import * as Papa from "papaparse";
import { call, put, takeLatest } from "redux-saga/effects";

import { convertToCamelCase } from "../../utils";
import { fetchPlacesSuccess } from "./actions";
import { FETCH_TRIPS } from "./actionTypes";
import { TripEntity } from "./models";

function* fetchPlacesHandler() {
  const parse = () =>
    new Promise((resolve, reject) =>
      Papa.parse("/201801_citibikejc_tripdata.csv", {
        complete: resolve,
        download: true,
        dynamicTyping: true,
        error: reject,
        header: true
      })
    );
  const parseResult = yield call(parse);
  const first50: TripEntity[] = parseResult.data
    .slice(0, 50)
    .map((place: any) => convertToCamelCase<TripEntity>(place));
  yield put(fetchPlacesSuccess(first50));
}

function* fetchPlacesWatcher() {
  yield takeLatest(FETCH_TRIPS, fetchPlacesHandler);
}

export default [fetchPlacesWatcher];
