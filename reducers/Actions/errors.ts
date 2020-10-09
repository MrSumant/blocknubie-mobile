export const UNKNOWN = Symbol();
export const USER_NOT_CONFIRMED = Symbol();
export const USER_NOT_FOUND = Symbol();
export const INVALID_PASSWORD = Symbol();
export const UNKNOWN_AUTHENTICATION_ERROR = Symbol();
export const USER_ALREADY_EXISTS = Symbol();
export const INVALID_EMAIL = Symbol();
export const NO_USERNAME_PROVIDED = Symbol();
export const NOT_AUTHORIZED_EXCEPTION = Symbol();
export const CODE_MISMATCH_EXCEPTION = Symbol();
export const EXPIRED_CODE_EXCEPTION = Symbol();
export const LIMIT_EXCEEDED_EXCEPTION = Symbol();

export const messages = {
    [USER_NOT_CONFIRMED]: "This account has not been confirmed yet",
    [USER_NOT_FOUND]: "User account could not be found",
    [INVALID_PASSWORD]:
        "Invalid password - Must contain an uppercase letter, lowercase letter, symbol and be at least 8 in length",
    [UNKNOWN_AUTHENTICATION_ERROR]:
        "An unexpected authentication error occured",
    [UNKNOWN]: "An unexpected error occured",
    [USER_ALREADY_EXISTS]: "An account with this email is already registered",
    [INVALID_EMAIL]: "Invalid email format",
    [NO_USERNAME_PROVIDED]: "Please provide a valid email",
    [NOT_AUTHORIZED_EXCEPTION]: "Incorrect username or password, try again",
    [CODE_MISMATCH_EXCEPTION]: "Incorrect confirmation code entered",
    [EXPIRED_CODE_EXCEPTION]: "Code expired, request a new code",
    [LIMIT_EXCEEDED_EXCEPTION]: "Attempts limit exceeded, try again later"
};

export function convertError(error: { message: any; }) {
    let errorId;

    switch (error.message) {
        default:
            errorId = UNKNOWN;
            break;
    }

    return {
        id: errorId,
        src: error
    };
}
