//Will import all actions types in this file and create a single reducer instance.
import * as errors from "./Actions/errors";

import AuthActions from "./Actions/authActions";
import SymptomActions from "./Actions/symptomsActions";

const initialState = {
    currentUser: null,
    error: "",
    caseConfirmDetailsAccessed: false,
    anchorEl: null,
    symptomEnterted: false,
};

const combinedReducer = (state = initialState, action: { type: any; payload: { email: any; eventValue: any; }; error: { id: typeof errors.USER_NOT_CONFIRMED; }; }) => {
    switch (action.type) {
        case AuthActions.SIGN_IN_REQUEST:
            return {
                ...state,
                currentUser: null,
                authenticated: false,
                signingIn: true,
                email: action.payload.email
            };

        case AuthActions.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                authenticated: true,
                signingIn: false,
                signInError: null
            };

        case AuthActions.SIGN_IN_FAILURE:
            return {
                ...state,
                currentUser: null,
                authenticated: false,
                signingIn: false,
                signInError: action.error,
                userUnconfirmed: action.error.id === errors.USER_NOT_CONFIRMED
            };

        case AuthActions.REGISTER_REQUEST:
            return {
                ...state,
                registering: true,
                registered: false,
                registrationError: null,
                userConfirmed: false
            };

        case AuthActions.REGISTER_SUCCESS:
            return {
                ...state,
                registering: false,
                registered: true,
                registrationError: null,
                userConfirmed: false,
                email: action.payload.email,
            };

        case AuthActions.REGISTER_FAILURE:
            return {
                ...state,
                registering: false,
                registered: false,
                registrationError: action.payload,
                userConfirmed: false
            };

        case AuthActions.GET_USER_DATA_REQUEST:
            return {
                ...state,
                gettingUserData: true
            }

        case AuthActions.GET_USER_DATA_SUCCESS:
            return {
                ...state,
                gettingUserData: false,
                userDataAvailable: true,
                fullUserDetail: action.payload
            }

        case AuthActions.FORGOT_PASSWORD_REQUEST:
            return {
                ...state,
                passwordresetting: true,
                passwordreset: false,
                passwordresetError: null,
                userConfirmed: false
            };

        case AuthActions.FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                passwordresetting: false,
                passwordreset: true,
                passwordresetError: null,
                userConfirmed: false,
                email: action.payload.email
            };

        case AuthActions.FORGOT_PASSWORD_ERROR:
            return {
                ...state,
                passwordresetting: false,
                passwordreset: false,
                passwordresetError: action.error,
                userConfirmed: false,
                email: action.payload.email
            };
        case AuthActions.CONFIRM_FORGOT_PASSWORD_REQUEST:
            return {
                ...state,
                confirmingNewPassword: true,
                newPasswordConfirmed: false,
                errorNewPassword: false
            };

        case AuthActions.CONFIRM_FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                confirmingNewPassword: false,
                newPasswordConfirmed: true,
                authenticated: false,
                errorNewPassword: false,
                email: action.payload.email
            };

        case AuthActions.CONFIRM_FORGOT_PASSWORD_FAILURE:
            return {
                ...state,
                confirmingNewPassword: false,
                newPasswordConfirmed: false,
                authenticated: false,
                errorNewPassword: action.error
            };

        case AuthActions.CONFIRM_SIGNUP_REQUEST:
            return {
                ...state,
                confirmingSignup: true,
                confirmationError: null,
                signupConfirmed: false
            };

        case AuthActions.CONFIRM_SIGNUP_SUCCESS:
            return {
                ...state,
                confirmingSignup: false,
                confirmationError: null,
                signupConfirmed: true,
                authenticated: false,
                email: action.payload.email
            };

        case AuthActions.CONFIRM_SIGNUP_FAILURE:
            return {
                ...state,
                confirmingSignup: false,
                confirmationError: action.error,
                authenticated: false,
                signupConfirmed: false
            };

        case AuthActions.RESEND_CODE_REQUEST:
            return {
                ...state,
                resendingCode: true,
                codeResent: false,
                resendCodeError: null
            };

        case AuthActions.RESEND_CODE_SUCCESS:
            return {
                ...state,
                resendingCode: false,
                codeResent: true,
                resendCodeError: null
            };

        case AuthActions.RESEND_CODE_FAILURE:
            return {
                ...state,
                resendingCode: false,
                codeResent: false,
                resendCodeError: action.error
            };

        case AuthActions.WELCOME_START_REQUEST:
            return {
                ...state,
                welcomed: true
            };

        case AuthActions.MENU_OPEN_REQUEST:
            return {
                ...state,
                anchorEl: action.payload.eventValue
            };

        case AuthActions.MENU_CLOSE_REQUEST:
            return {
                ...state,
                anchorEl: null,
                viewSettingOpened: false
            };

        case AuthActions.SAVE_SETTINGS:
            return {
                ...state,
                viewSettingOpened: false
            }

        case AuthActions.OPEN_HEALTH_RECORD:
            return {
                ...state,
                healthRecordOpened: true,
                anchorEl: null
            };

        case AuthActions.VIEW_HEALTH_HISTORY:
            return {
                ...state,
                viewHealthHistoryOpened: true,
                anchorEl: null
            };

        case AuthActions.VIEW_FAMILY_MEMBERS:
            return {
                ...state,
                viewFamilyMembersOpened: true,
                anchorEl: null
            };

        case AuthActions.VIEW_SETTING:
            return {
                ...state,
                viewSettingOpened: true
            };

        case AuthActions.VIEW_ACCOUNT:
            return {
                ...state,
                viewAccountOpened: true,
                anchorEl: null
            };

        case AuthActions.CASE_CONFIRM_CLICKED:
            return {
                ...state,
                caseConfirmDetailsAccessed: false,
                confirmClicked: true,
                anchorEl: null
            };

        case AuthActions.CASE_CONFIRMED:
            return {
                ...state,
                caseConfirmDetailsAccessed: true,
                confirmClicked: false,
                anchorEl: null
            };

        case SymptomActions.GET_SYMPTOMS_REQUEST:
            return {
                ...state,
                retrievingSymptoms: true,
                symptomsRetrieved: false,
                retrievingSymptomsError: false
            }

        case SymptomActions.GET_SYMPTOMS_SUCCESS:
            return {
                ...state,
                retrievingSymptoms: false,
                symptomsRetrieved: true,
                retrievingSymptomsError: false,
                symptomList: action.payload
            };
        case SymptomActions.GET_SYMPTOMS_FAILURE:
            return {
                ...state,
                retrievingSymptoms: false,
                symptomsRetrieved: false,
                retrievingSymptomsError: action.payload
            };

        case SymptomActions.SAVE_SYMPTOM_SEVERITY_REQUEST:
            return {
                ...state,
                savingSymptomSeverity: true,
                savedSymptomSeverity: false,
                saveSymptomSeverityError: false
            };

        case SymptomActions.SAVE_SYMPTOM_SEVERITY_SUCCESS:
            return {
                ...state,
                savingSymptomSeverity: false,
                savedSymptomSeverity: true,
                saveSymptomSeverityError: false,
                savedSymptomSeverityDetails: action.payload
            };

        case SymptomActions.SAVE_SYMPTOM_SEVERITY_FAILURE:
            return {
                ...state,
                savingSymptomSeverity: false,
                savedSymptomSeverity: false,
                saveSymptomSeverityError: action.payload
            }

        default:
            return state;
    }
};

export default combinedReducer;
