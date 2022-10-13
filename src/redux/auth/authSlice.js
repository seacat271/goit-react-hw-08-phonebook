import { createSlice } from "@reduxjs/toolkit"
import { register, login, logout, refresh } from "./authOperations"

const initialState ={
    user: {
        name: null,
        email: null,
    },
    token: null, 
    isLoggedIn: false,
    isLoading: false,
    error: null,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
    [register.pending] (state) {
            return state
    },
    [register.fulfilled] (state, action) {
            return {...state, ...action.payload, isLoggedIn: true}
    },
    [register.rejected] (state) {
        return state
    },
    [login.pending] (state) {
        return state
    },
    [login.fulfilled] (state, action) {
        return {...state, ...action.payload, isLoggedIn: true}
    },
    [login.rejected] (state) {
        return state
    },
    [logout.pending] (state) {
        return state
    },
    [logout.fulfilled] (state) {
        return {...state, ...initialState}
    },
    [logout.rejected] (state) {
        return state
    },
    [refresh.pending] (state) {
        return {...state}
    },
    [refresh.fulfilled] (state, action) {
        return {...state, user: {...action.payload}, isLoggedIn: true,}
    },
    [refresh.rejected] (state) {
        return {...state}
    },

}})