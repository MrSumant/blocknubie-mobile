import { Auth } from "aws-amplify";
import { all, call, put, takeLatest } from "redux-saga/effects";
import SymptomActions, {
  getSymptomsFailure,
  getSymptomsSuccess,
  saveSymptomsSeverityFailure,
  saveSymptomsSeveritySuccess,
} from "../reducers/Actions/symptomsActions";

async function getSymptomsWithApi(symptomText: any) {
  try {
    const symptom = { sym: symptomText };
    const init = {
      headers: {
        Authorization: `${(await Auth.currentSession())
          .getIdToken()
          .getJwtToken()}`,
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify(symptom),
    };
    console.log("Calling API");
    let response = await fetch(
      "http://ec2-34-240-230-10.eu-west-1.compute.amazonaws.com:80/nlp",
      init
    );
    response = await response.json();
    return response;
  } catch (err) {
    console.log(err.stack);
    console.log("error with Get API");
  }
}

async function saveSymptomsSeverityWithApi(
  symptomSeverity: { payload: any; _id: any },
  _id: any
) {
  try {
    const symptomSeverityInput = {
      symptoms: symptomSeverity.payload,
      userId: symptomSeverity._id,
    };
    const init = {
      headers: {
        Authorization: `${(await Auth.currentSession())
          .getIdToken()
          .getJwtToken()}`,
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify(symptomSeverityInput),
    };
    console.log("Calling API");
    let response = await fetch(`${process.env.REACT_APP_URL}/case/`, init);
    response = await response.json();
    return response;
  } catch (err) {
    console.log(err.stack);
    console.log("error with Get API");
  }
}

export function* getSymptoms({ payload: { symptomText } }) {
  try {
    debugger;
    const { result, message } = yield call(getSymptomsWithApi, symptomText);

    if (result) {
      console.log(result);
      yield put(getSymptomsSuccess(result));
    } else {
      yield put(getSymptomsFailure(message));
    }
  } catch (message) {
    console.log(message);
    yield put(getSymptomsFailure(message));
  }
}

function setLocalSymptomSeverityData(result: any) {
  localStorage.setItem("symptomResult", JSON.stringify(result));
}

export function* saveSymptomsSeverity(symptomSeverity: any, _id: any) {
  try {
    const { result, message } = yield call(
      saveSymptomsSeverityWithApi,
      symptomSeverity,
      _id
    );

    if (result) {
      console.log(result);
      setLocalSymptomSeverityData(result);
      yield put(saveSymptomsSeveritySuccess(result));
    } else {
      yield put(saveSymptomsSeverityFailure(message));
    }
  } catch (message) {
    console.log(message);
    yield put(saveSymptomsSeverityFailure(message));
  }
}

export function* symptomsSagas() {
  yield all([
    yield takeLatest(SymptomActions.GET_SYMPTOMS_REQUEST, getSymptoms),
    yield takeLatest(
      SymptomActions.SAVE_SYMPTOM_SEVERITY_REQUEST,
      saveSymptomsSeverity
    ),
  ]);
}
