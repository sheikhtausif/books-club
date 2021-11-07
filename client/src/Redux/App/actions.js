import {
    ADD_BOOK_REQUEST,
    ADD_BOOK_SUCCESS,
    ADD_BOOK_FAILURE,
    GET_ALL_BOOKS_REQUEST,
    GET_ALL_BOOKS_SUCCESS,
    GET_ALL_BOOKS_FAILURE,
    GET_BOOK_REQUEST,
    GET_BOOK_SUCCESS,
    GET_BOOK_FAILURE,
    ORDER_BOOK_REQUEST,
    ORDER_BOOK_SUCCESS,
    ORDER_BOOK_FAILURE,
} from "./actionType";
import axios from "axios";

// action creators

export const getAllBooksRequest = () => ({
    type: GET_ALL_BOOKS_REQUEST,
});
export const getAllBooksSuccess = (payload) => ({
    type: GET_ALL_BOOKS_SUCCESS,
    payload: payload,
});
export const getAllBooksFailure = (errorMessage) => ({
    type: GET_ALL_BOOKS_FAILURE,
    payload: errorMessage,
});

export const getAllBooks = (payload) => async (dispatch) => {
    console.log('payload:', payload)
    dispatch(getAllBooksRequest());
    try {
        // if (payload.language) {
        //     const { data } = await axios.get(`http://localhost:5000/api/v1/products?&search=${payload.language}`);
        //     console.log('data:', data)
        //     dispatch(getAllBooksSuccess(data));
        //     return
        // }
        if (payload) {
            const { data } = await axios.get(`http://localhost:5000/api/v1/products?category=${payload.category}&search=${payload.title}`);
            console.log('data:', data)
            dispatch(getAllBooksSuccess(data));
            return
        }
        else {
            const { data } = await axios.get(`http://localhost:5000/api/v1/products`);
            console.log('data:', data)
            dispatch(getAllBooksSuccess(data));
        }
    } catch (error) {
        dispatch(getAllBooksFailure(error));
    }
};

export const getBookRequest = () => ({
    type: GET_BOOK_REQUEST,
});
export const getBookSuccess = (payload) => ({
    type: GET_BOOK_SUCCESS,
    payload: payload,
});
export const getBookFailure = (errorMessage) => ({
    type: GET_BOOK_FAILURE,
    payload: errorMessage,
});

export const getBook = (payload) => async (dispatch) => {
    dispatch(getBookRequest());
    try {
        const { data } = await axios.get(
            `http://localhost:5000/api/v1/products/${payload}`
        );
        dispatch(getBookSuccess(data));
    } catch (error) {
        dispatch(getBookFailure(error));
    }
};

export const addBookRequest = () => ({
    type: ADD_BOOK_REQUEST,
});
export const addBookSuccess = (payload) => ({
    type: ADD_BOOK_SUCCESS,
    payload: payload,
});
export const addBookFailure = (err) => ({
    type: ADD_BOOK_FAILURE,
    payload: err,
});

export const addBook = (data, files) => async (dispatch) => {
    console.log(data, files)
    dispatch(addBookRequest());
    try {
        const formData = new FormData();
        formData.append('data', JSON.stringify(data));
        if (files) {
            Object.values(files[0]).map((file) => formData.append('images', file));
        }
        const resp = await axios.post(
            `http://localhost:5000/api/v1/products`,
            formData
        );
        console.log('resp:', resp)
        dispatch(addBookSuccess(resp.data));
    } catch (error) {
        dispatch(addBookFailure(error));
    }
};

export const orderBookRequest = () => ({
    type: ORDER_BOOK_REQUEST,
});
export const orderBookSuccess = (payload) => ({
    type: ORDER_BOOK_SUCCESS,
    payload: payload,
});
export const orderBookFailure = (errorMessage) => ({
    type: ORDER_BOOK_FAILURE,
    payload: errorMessage,
});

export const orderBook = (payload) => async (dispatch) => {
    dispatch(orderBookRequest());
    try {
        const { data } = await axios.post(
            `https://vaibhav-api-data.herokuapp.com/todo`,
            payload
        );
        dispatch(orderBookSuccess(data));
    } catch (error) {
        dispatch(orderBookFailure(error));
    }
};
