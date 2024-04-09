import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    loading: false,
    error: false
}

const userSlice = createSlice({
    user:'user',
    initialState,
    reducers: {
        signInStart : (state) => {
            state.loading = true,
            state.error = null
        },
        signInSuccess : (state, action) => {
            state.currentUser = action.payload,
            state.loading = false,
            state.error = null
        },
        signInFailure : (state, action) => {
            state.error = action.payload,
            state.loading = false
        },
        updateStart : (state) => {
            state.loading = true,
            state.error = null
        },
        updateSuccess : (state, action) => {
            state.currentUser = action.payload,
            state.loading = false,
            state.error = null
        },
        updateFailure : (state, action) => {
            state.error = action.payload,
            state.loading = false
        },
        deleteStart : (state) => {
            state.loading = true,
            state.error = null
        },
        deleteSuccess : (state, action) => {
            state.currentUser = action.payload,
            state.loading = false,
            state.error = null
        },
        deleteFailure : (state, action) => {
            state.error = action.payload,
            state.loading = false
        },

        signOutSuccess : (state, action) => {
            state.currentUser= action.payload,
            state.error= null,
            state.loading = false
        }
    }
})
export const {
    signInFailure,
    signInStart,
    signInSuccess,
    updateFailure,
    updateStart,
    updateSuccess,
    signOutSuccess,
    deleteFailure,
    deleteStart,
    deleteSuccess} = userSlice.actions

export default userSlice.reducer;