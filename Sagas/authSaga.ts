import {
    signInSuccess,
    signInFailure,
    registerSuccess,
    registerFailure,
    confirmSignupSuccess,
    confirmSignupFailure,
    resendCodeSuccess,
    resendCodeFailure,
    forgotPasswordRequest,
    forgotpasswordSuccess,
    forgotpasswordFailure,
    confirmForgotPasswordSuccess,
    confirmForgotPasswordFailure,
    confirmForgotPasswordRequest,
    getUserDataRequest,
    getUserDataSuccess,
    getUserDataFailure,
} from "../reducers/Actions/authActions";
import AuthActions from "../reducers/Actions/authActions";
import { call, takeLatest, all, put } from "redux-saga/effects";
import { API, Auth, Amplify } from "aws-amplify";

function confirmForgotPasswordWithApi(email: any, confirmationCode: any, new_password: any) {
    return Auth.forgotPasswordSubmit(email, confirmationCode, new_password)
        .then((response: any) => ({ response }))
        .catch((err: any) => ({ err }))
}

function forgotPasswordWithApi(email: any) {
    return Auth.forgotPassword(email)
        .then((response: any) => ({ response }))
        .catch((err: any) => ({ err }))
}

async function registerWithApi(email: any, password: any, fullName: any) {
    try {
        const init = {
            headers: {
                "Content-Type": "application/json"
            }, method: 'POST', body: JSON.stringify({ "email": email, "password": password, "fullName": fullName })
        }
        console.log("Calling API");
        let response = await fetch(`${process.env.REACT_APP_URL}/user/`, init)
        response = await response.json();
        return response;
        //console.log("reponse", response.data);
        //yield put(todoViewSuccessful(response));
    } catch (err) {
        //yield call(endFetchFun(error.message));
        console.log(err.stack);
        console.log("error with Get API");
    }
}

async function getUserWithAPI(email: { payload: string | number | boolean; }) {
    try {
        const init = {
            headers: {
                Authorization: `${(await Auth.currentSession())
                    .getIdToken()
                    .getJwtToken()}`, "Content-Type": "application/json"
            }, method: 'GET'
        }
        console.log("Calling API");
        let response = await fetch(`${process.env.REACT_APP_URL}/user/email?address=${encodeURIComponent(email.payload)}`, init)
        response = await response.json();
        return response;
        //console.log("reponse", response.data);
        //yield put(todoViewSuccessful(response));
    } catch (err) {
        //yield call(endFetchFun(error.message));
        console.log(err.stack);
        console.log("error with Get API");
    }
}


function signInWithApi(email: any, password: any) {
    return Auth.signIn(email, password)
        .then((response: any) => ({ response }))
        .catch((err: any) => ({ err }));
}

function confirmWithApi(email: any, confirmationCode: any) {
    return Auth.confirmSignUp(email, confirmationCode)
        .then((response: any) => ({ response }))
        .catch((err: any) => ({ err }));
}

function resendCodeWithApi(email: any) {
    return Auth.resendSignUp(email)
        .then((response: any) => ({ response }))
        .catch((err: any) => ({ err }));
}

async function setTokenSession(email: string) {
    sessionStorage.setItem("token", (await Auth.currentSession())
        .getIdToken()
        .getJwtToken())

    sessionStorage.setItem("email", email)
}

export function* signIn({ payload: { email, password } }) {
    try {
        const { response, err } = yield call(signInWithApi, email, password);

        if (response) {
            yield call (setTokenSession, email);
            yield put(signInSuccess(response));
        } else {
            yield put(signInFailure(err));
        }
    } catch (err) {
        yield put(signInFailure(err));
    }
}

export function* register({ payload: { email, password, fullName } }) {
    try {
        const { result, message } = yield call(registerWithApi, email, password, fullName);

        if (result) {
            yield put(registerSuccess(result));
        } else {
            yield put(registerFailure(message));
        }
    } catch (message) {
        yield put(registerFailure(message));
    }
}

export function* confirmSignup({ payload: { email, confirmationCode } }) {
    try {
        const { response, err } = yield call(
            confirmWithApi,
            email,
            confirmationCode
        );

        if (response) {
            yield put(confirmSignupSuccess(response));
        } else {
            yield put(confirmSignupFailure(err));
        }
    } catch (err) {
        yield put(confirmSignupFailure(err));
    }
}

export function* resendCode({ payload: { email } }) {
    try {
        const { response, err } = yield call(resendCodeWithApi, email);
        if (response) {
            yield put(resendCodeSuccess(response));
        } else {
            yield put(resendCodeFailure(err));
        }
    } catch (err) {
        yield put(resendCodeFailure(err));
    }
}

export function* confirmCaseAccess() {
    yield put({ caseAPICalled: true });
    // setTimeout(() => {
    //     yield put({ caseAPICalled: false, name: "kathal" })
    // }, 5000);
}

export function* forgotPassword({ payload: { email } }) {
    try {
        const { response, err } = yield call(forgotPasswordWithApi, email);

        if (response) {
            console.log(response);
            yield put(forgotpasswordSuccess(email));
        } else {
            yield put(forgotpasswordFailure(err));
        }
    } catch (err) {
        yield put(forgotpasswordFailure(err));
    }
}

export function* confirmForgotPassword({ payload: { email, confirmationCode, new_password } }) {
    try {
        const { response, err } = yield call(confirmForgotPasswordWithApi, email, confirmationCode, new_password);

        if (!err) {
            console.log(response);
            yield put(confirmForgotPasswordSuccess(email));
        } else {
            yield put(confirmForgotPasswordFailure(err));
        }
    } catch (err) {
        yield put(confirmForgotPasswordFailure(err));
    }
}

export function* getUserData(email: any) {
    try {
        const { result, message } = yield call(getUserWithAPI, email);

        if (result) {
            yield put(getUserDataSuccess(result));
        }
        else {
            yield put(getUserDataFailure(message));
        }
    } catch (message) {
        yield put(getUserDataFailure(message));
    }
}

export function* authSagas() {
    yield all([
        yield takeLatest(AuthActions.SIGN_IN_REQUEST, signIn),
        yield takeLatest(AuthActions.REGISTER_REQUEST, register),
        yield takeLatest(AuthActions.CONFIRM_SIGNUP_REQUEST, confirmSignup),
        yield takeLatest(AuthActions.RESEND_CODE_REQUEST, resendCode),
        yield takeLatest(AuthActions.FORGOT_PASSWORD_REQUEST, forgotPassword),
        yield takeLatest(AuthActions.CONFIRM_FORGOT_PASSWORD_REQUEST, confirmForgotPassword),
        yield takeLatest(AuthActions.GET_USER_DATA_REQUEST, getUserData),
    ]);
}
