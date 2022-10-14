import { createSlice } from "@reduxjs/toolkit"
import { register, login, logout, refresh } from "./authOperations"

const initialState ={
    isLoading: false,
    error: null,
    user: {
        name: null,
        email: null,
    },
    token: null, 
    isLoggedIn: false,
    
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
    [register.pending] (state) {
            return {...state, isLoading: true, error: null,}
    },
    [register.fulfilled] (state, action) {
            return {...state, ...action.payload, isLoggedIn: true, isLoading: false,}
    },
    [register.rejected] (state, action) {
        return {...state, isLoading: false, error: action.payload}
    },
    [login.pending] (state) {
        return {...state, isLoading: true, error: null,}
    },
    [login.fulfilled] (state, action) {
        return {...state, ...action.payload, isLoggedIn: true, isLoading: false,}
    },
    [login.rejected] (state, action) {
        return {...state, isLoading: false, error: action.payload}
    },
    [logout.pending] (state) {
        return {...state, isLoading: true, error: null,}
    },
    [logout.fulfilled] (state) {
        return {...state, ...initialState}
    },
    [logout.rejected] (state, action) {
        return {...state, isLoading: false, error: action.payload}
    },
    [refresh.pending] (state) {
        return {...state, isLoading: true, error: null,}
    },
    [refresh.fulfilled] (state, action) {
        return {...state, user: {...action.payload}, isLoggedIn: true, isLoading: false,}
    },
    [refresh.rejected] (state, action) {
        return {...state, isLoading: false, error: action.payload}
    },

}})