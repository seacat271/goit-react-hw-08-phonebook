import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { signupUser, loginUser, logoutUser } from "utils/customApi";

export const register = createAsyncThunk("auth/register", async value => {
    try {
        const {data } = await signupUser(value);
        return data
    } catch (error) {
        
    }
})

export const login = createAsyncThunk("auth/login", async value => {
    try {
        const {data } = await loginUser(value);
        return data
    } catch (error) {
        
    }
})

export const logout = createAsyncThunk("auth/logout", async () => {
    try {
        await logoutUser();
    } catch (error) {
        
    }
})