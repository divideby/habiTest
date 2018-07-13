import { all, fork } from "redux-saga/effects";

import TripsSagas from "./Trips/sagas";

export default function* rootSaga() {
  const sagas = [...TripsSagas];
  yield all(sagas.map(saga => fork(saga)));
}
