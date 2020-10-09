import * as errors from "./errors";

const AuthActions = {
    SAVE_SETTINGS: "SAVE_SETTINGS",
    CASE_CONFIRM_CLICKED: "CASE_CONFIRM_CLICKED",
    CASE_CONFIRMED: "CASE_CONFIRMED",
    GET_USER_DATA_REQUEST: "GET_USER_DATA_REQUEST",
    GET_USER_DATA_SUCCESS: "GET_USER_DATA_SUCCESS",
    GET_USER_DATA_FAILURE: "GET_USER_DATA_FAILURE",
    VIEW_ACCOUNT: "VIEW_ACCOUNT",
    VIEW_SETTING: "VIEW_SETTING",
    VIEW_FAMILY_MEMBERS: "VIEW_FAMILY_MEMBERS",
    VIEW_HEALTH_HISTORY: "VIEW_HEALTH_HISTORY",
    OPEN_HEALTH_RECORD: "OPEN_HEALTH_RECORD",
    MENU_OPEN_REQUEST: "MENU_OPEN_REQUEST",
    MENU_CLOSE_REQUEST: "MENU_CLOSE_REQUEST",
    WELCOME_START_REQUEST: "WELCOME_START_REQUEST",
    REGISTER_REQUEST: "REGISTER_REQUEST",
    REGISTER_SUCCESS: "REGISTER_SUCCESS",
    REGISTER_FAILURE: "REGISTER_FAILURE",
    SIGN_IN_REQUEST: "SIGN_IN_REQUEST",
    SIGN_IN_SUCCESS: "SIGN_IN_SUCCESS",
    SIGN_IN_FAILURE: "SIGN_IN_FAILURE",
    CONFIRM_SIGNUP_REQUEST: "CONFIRM_SIGNUP_REQUEST",
    CONFIRM_SIGNUP_SUCCESS: "CONFIRM_SIGNUP_SUCCESS",
    CONFIRM_SIGNUP_FAILURE: "CONFIRM_SIGNUP_FAILURE",
    RESEND_CODE_REQUEST: "RESEND_CODE_REQUEST",
    RESEND_CODE_SUCCESS: "RESEND_CODE_SUCCESS",
    RESEND_CODE_FAILURE: "RESEND_CODE_FAILURE",
    FORGOT_PASSWORD_REQUEST: "FORGOT_PASSWORD_REQUEST",
    FORGOT_PASSWORD_SUCCESS: "FORGOT_PASSWORD_SUCCESS",
    FORGOT_PASSWORD_ERROR: "FORGOT_PASSWORD_ERROR",
    CONFIRM_FORGOT_PASSWORD_REQUEST: "CONFIRM_FORGOT_PASSWORD_REQUEST",
    CONFIRM_FORGOT_PASSWORD_SUCCESS: "CONFIRM_FORGOT_PASSWORD_SUCCESS",
    CONFIRM_FORGOT_PASSWORD_FAILURE: "CONFIRM_FORGOT_PASSWORD_FAILURE"
};

export const signInRequest = ({ email, password }) => ({
    type: AuthActions.SIGN_IN_REQUEST,
    payload: { email, password }
});

export const signInSuccess = (user: any) => ({
    type: AuthActions.SIGN_IN_SUCCESS,
    payload: user
});

export const signInFailure = (error: any) => ({
    type: AuthActions.SIGN_IN_FAILURE,
    error: translateError(error)
});

export const registerRequest = ({ email, password, fullName }) => ({
    type: AuthActions.REGISTER_REQUEST,
    payload: { email, password, fullName }
});

export const registerSuccess = (user: any) => ({
    type: AuthActions.REGISTER_SUCCESS,
    payload: user
});

export const registerFailure = (message: any) => ({
    type: AuthActions.REGISTER_FAILURE,
    payload: message
    //error: translateError(error)
});

export const confirmSignupRequest = ({ email, confirmationCode }) => ({
    type: AuthActions.CONFIRM_SIGNUP_REQUEST,
    payload: { email, confirmationCode }
});

export const confirmSignupSuccess = (email: any) => ({
    type: AuthActions.CONFIRM_SIGNUP_SUCCESS,
    payload: { email }
});

export const confirmSignupFailure = (error: any) => ({
    type: AuthActions.CONFIRM_SIGNUP_FAILURE,
    error: translateError(error)
});

export const resendCodeRequest = ({ email }) => ({
    type: AuthActions.RESEND_CODE_REQUEST,
    payload: { email }
});

export const getUserDataRequest = (email: any) => ({
    type: AuthActions.GET_USER_DATA_REQUEST,
    payload: email
});

export const getUserDataSuccess = (userDetails: any) => ({
    type: AuthActions.GET_USER_DATA_SUCCESS,
    payload: { userDetails }
});

export const getUserDataFailure = (message: any) => ({
    type: AuthActions.GET_USER_DATA_FAILURE,
    payload: { message }
});

export const resendCodeSuccess = (email: any) => ({
    type: AuthActions.RESEND_CODE_SUCCESS,
    payload: { email }
});

export const resendCodeFailure = (error: any) => ({
    type: AuthActions.RESEND_CODE_FAILURE,
    error: translateError(error)
});

export const forgotPasswordRequest = ({ email }) => ({
    type: AuthActions.FORGOT_PASSWORD_REQUEST,
    payload: { email }
});

export const forgotpasswordSuccess = (email: any) => ({
    type: AuthActions.FORGOT_PASSWORD_SUCCESS,
    payload: { email }
});

export const forgotpasswordFailure = (error: any) => ({
    type: AuthActions.FORGOT_PASSWORD_ERROR,
    error: translateError(error)
});

export const confirmForgotPasswordSuccess = (email: any) => ({
    type: AuthActions.CONFIRM_FORGOT_PASSWORD_SUCCESS,
    payload: { email }
});

export const confirmForgotPasswordRequest = ({ email, confirmationCode, new_password }) => ({
    type: AuthActions.CONFIRM_FORGOT_PASSWORD_REQUEST,
    payload: { email, confirmationCode, new_password }
});

export const confirmForgotPasswordFailure = (err: any) => ({
    type: AuthActions.CONFIRM_FORGOT_PASSWORD_FAILURE,
    error: { id: errors.CODE_MISMATCH_EXCEPTION, source: err }
});

export const settingSave = ({ pushNotification, enableDarkmode }) => ({
    type: AuthActions.SAVE_SETTINGS,
    payload: { pushNotification, enableDarkmode }
});

export function translateError(cognitoErr: { code: any; }) {
    let errorId;

    switch (cognitoErr.code) {
        case "UserNotConfirmedException":
            errorId = errors.USER_NOT_CONFIRMED;
            break;
        case "UserNotFoundException":
            errorId = errors.USER_NOT_FOUND;
            break;
        case "InvalidPasswordException":
            errorId = errors.INVALID_PASSWORD;
            break;
        case "UsernameExistsException":
            errorId = errors.USER_ALREADY_EXISTS;
            break;
        case "InvalidParameterException":
            errorId = errors.INVALID_EMAIL;
            break;
        case "NotAuthorizedException":
            errorId = errors.NOT_AUTHORIZED_EXCEPTION;
            break;
        case "CodeMismatchException":
            errorId = errors.CODE_MISMATCH_EXCEPTION;
            break;
        case "ExpiredCodeException":
            errorId = errors.EXPIRED_CODE_EXCEPTION;
            break;
        case "LimitExceededException":
            errorId = errors.LIMIT_EXCEEDED_EXCEPTION;
            break;
        default:
            console.warn({ cognitoErr }, "Unrecognised cognito error");
            errorId = errors.UNKNOWN_AUTHENTICATION_ERROR;
            break;
    }

    return {
        id: errorId,
        source: cognitoErr
    };
}

export const welcomeStartRequest = () => ({
    type: AuthActions.WELCOME_START_REQUEST
});

export const menuOpenRequest = (eventValue: any) => ({
    type: AuthActions.MENU_OPEN_REQUEST,
    payload: { eventValue }
});

export const menuCloseRequest = () => ({
    type: AuthActions.MENU_CLOSE_REQUEST
});

export const healthRecordOpen = () => ({
    type: AuthActions.OPEN_HEALTH_RECORD
});

export const viewHealthHistory = () => ({
    type: AuthActions.VIEW_HEALTH_HISTORY
});

export const viewFamilyMembers = () => ({
    type: AuthActions.VIEW_FAMILY_MEMBERS
});

export const viewSetting = () => ({
    type: AuthActions.VIEW_SETTING
});

export const viewAccount = () => ({
    type: AuthActions.VIEW_ACCOUNT
});

export const caseConfirmRequest = (symptoms: any, details: any, uploads: any) => ({
    type: AuthActions.CASE_CONFIRM_CLICKED,
    payload: { symptoms, details, uploads }
})

export default AuthActions;
