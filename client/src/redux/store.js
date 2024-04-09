import {  combineReducers, configureStore } from "@reduxjs/toolkit";
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { useReducer } from "react";

const rootReducer = combineReducers({
    user: useReducer

})

const persistConfig = ({
    key: 1,
    storage,
    version:1
})

const persistedReducer = persistReducer(rootReducer, persistConfig)

export const store = configureStore({
    reducer: persistedReducer,
    middleware:(getDefaultmiddleware) =>
    getDefaultmiddleware({serialization: true})

})
export const persist = persistStore(store)