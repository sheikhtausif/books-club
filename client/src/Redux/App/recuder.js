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

const initialState = {
    isLoading: false,
    isError: false,
    allBooks: [],
    book: {},
    orderBook: {},
};

export const appReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        //get all books
        case GET_ALL_BOOKS_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case GET_ALL_BOOKS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                allBooks: payload.data,
            };
        case GET_ALL_BOOKS_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };

        //get single books
        case GET_BOOK_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case GET_BOOK_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                book: payload,
            };
        case GET_BOOK_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        // add books

        case ADD_BOOK_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case ADD_BOOK_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                allBooks: [...state.allBooks, payload],
            };
        case ADD_BOOK_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };

        // order book
        case ORDER_BOOK_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case ORDER_BOOK_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                orderBook: payload,
            };
        case ORDER_BOOK_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };

        default:
            return state;
    }
};
