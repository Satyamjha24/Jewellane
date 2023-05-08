import { USER_FAILURE_REQUEST, USER_LOGIN_REQUEST, USER_REGISTER_REQUEST, USER_REQUEST } from "./actionTypes"

const initialState = {
    isLoading: false,
    isError: false,
    token: "",
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_REQUEST:
            return { ...state, isLoading: true }
        case USER_LOGIN_REQUEST:
            return { ...state, isLoading: false, token: payload }
        case USER_REGISTER_REQUEST:
            return { ...state, isLoading: false, }
        case USER_FAILURE_REQUEST:
            return { ...state, isLoading: false, isError: true }
        default:
            return state;
    }

}