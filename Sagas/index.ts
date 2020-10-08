import { takeLatest, all } from "redux-saga/effects";
import API from "../Services/Api";

const api = API.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([]);
}
