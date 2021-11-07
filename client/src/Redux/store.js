import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Auth/reducer";
import { appReducer } from "./App/recuder";

const rootReducer = combineReducers({ auth: authReducer, app: appReducer });

// export const store = createStore(rootReducer, compose(applyMiddleware(thunk), window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()))

// ! Blow code also work in phone And Above code works only pc

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);
// console.log('store:', store)
