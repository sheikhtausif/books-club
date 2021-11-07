import {
    LOGIN_REQUEST,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    LOGOUT_SUCCESS
} from "./actionType";

import { saveData, loadData } from '../../Utils/localStorage'

const initialState = {
    isAuth: false,
    user: {},
    isError: false,
    isLoading: false,
    token: loadData('token') || "",
    user_id: loadData('user_id') || "",
    user_name: loadData('user_name') || "",
    user_role: loadData('user_role') || "",
};

export const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case LOGIN_SUCCESS:
            saveData('token', payload.token)
            saveData('user_id', payload.user._id)
            saveData('user_name', payload.user.name)
            saveData('user_role', payload.user.role)
            return {
                ...state,
                isLoading: false,
                isError: false,
                isAuth: true,
                user: payload.user,
                token: payload.token,
                user_id: payload.user._id,
                user_name: payload.user.name,
                user_role: payload.user.role
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };

        case SIGNUP_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                token: payload,
            };
        case SIGNUP_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isAuth: false,
                token: null,
                user: {}
            }

        default:
            return state;
    }
};
