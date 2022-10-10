import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { signupUser, loginUser, logoutUser } from "utils/customApi";

const token = {
    set (token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset () {
        axios.defaults.headers.common.Authorization = ``
    }
}

export const register = createAsyncThunk("auth/register", async value => {
    try {
        const {data } = await signupUser(value);
        token.set(data.token)
        return data
    } catch (error) {
        
    }
})

export const login = createAsyncThunk("auth/login", async value => {
    try {
        const {data } = await loginUser(value);
        token.set(data.token)
        return data
    } catch (error) {
        
    }
})

export const logout = createAsyncThunk("auth/logout", async () => {
    try {
        await logoutUser();
        token.unset()
    } catch (error) {
        
    }
})