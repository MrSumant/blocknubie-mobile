import { all, call } from "redux-saga/effects";
import API from "../Services/Api";
import { authSagas } from "./authSaga";
import { symptomsSagas } from "./symptomsSaga";

const api = API.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([call(authSagas), call(symptomsSagas)]);
}
