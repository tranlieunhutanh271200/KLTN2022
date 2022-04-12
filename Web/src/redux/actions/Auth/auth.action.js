export const AUTH_ACTION = {
    LOGIN: 'login',
    REGISTER: 'register',
    FORGOT_PASSWORD: 'forgot-password'
}
export const AuthAction = {
    login: dispatch => {
        return dispatch({action: AUTH_ACTION.LOGIN, data: {cc: 'ccc'}})
    }
}