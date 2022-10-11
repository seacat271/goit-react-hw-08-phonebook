import { createSlice } from "@reduxjs/toolkit"
import { register, login, logout, refresh } from "./authOperations"

const initialState ={
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
    [register.fulfilled] (state, action) {
            return {...state, ...action.payload, isLoggedIn: true}
    },
    [login.fulfilled] (state, action) {
        return {...state, ...action.payload, isLoggedIn: true}
    },
    [logout.fulfilled] (state) {
        return {...state, ...initialState}
    },
    [refresh.fulfilled] (state, action) {
        return {...state, user: {...action.payload}, isLoggedIn: true, isRefreshing: false}
    },

}})