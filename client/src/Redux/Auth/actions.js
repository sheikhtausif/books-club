import {
    LOGIN_REQUEST,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    LOGOUT_SUCCESS
} from "./actionType";
import axios from 'axios'
import swal from 'sweetalert';
// import { Redirect } from 'react-router-dom'


export const loginRequest = () => ({
    type: LOGIN_REQUEST,
});
export const loginSuccess = (payload) => ({
    type: LOGIN_SUCCESS,
    payload: payload,
});
export const loginFailure = (errorMessage) => ({
    type: LOGIN_FAILURE,
    payload: errorMessage,
});

export const login = payload => async dispatch => {
    console.log('payload:', payload)
    dispatch(loginRequest())
    try {
        const { data } = await axios.post(`http://localhost:5000/api/v1/auth/authenticate`, payload)
        console.log('data:', data)
        if (data.success) {
            // swal({
            //     title: `${data.message}`,
            //     icon: "success",
            //     button: "Okay",
            // });
            dispatch(loginSuccess(data))
        }
        else {
            swal({
                title: `${data.message}`,
                icon: "info",
                button: "Okay",
            });
        }

    }
    catch (err) {
        dispatch(loginFailure(err))
    }
}

export const signUpRequest = () => ({
    type: SIGNUP_REQUEST,
});
export const signUpSuccess = (payload) => ({
    type: SIGNUP_SUCCESS,
    payload: payload,
});
export const signUpFailure = (errorMessage) => ({
    type: SIGNUP_FAILURE,
    payload: errorMessage,
});

export const signup = payload => async dispatch => {
    console.log('payload:', payload)
    dispatch(signUpRequest())
    try {
        const { data } = await axios.post(`http://localhost:5000/api/v1/auth/register`, payload)
        console.log('data:', data)
        if (data.token) {
            swal({
                title: `${data.message}`,
                icon: "success",
                button: "Okay",
            });
        }
        else {
            swal({
                title: `${data.message}`,
                icon: "info",
                button: "Okay",
            });
        }
        dispatch(signUpSuccess(data.token))
    }
    catch (err) {
        console.log('err:', err.message)
        swal({
            title: "Please enter valid details!",
            icon: "info",
            button: "Okay",
        });
        dispatch(signUpFailure(err))
    }
}

const logoutSuccess = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}

export const logout = () => (dispatch) => {
    dispatch(logoutSuccess())
}
