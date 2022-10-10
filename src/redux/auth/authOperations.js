import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk("auth/register", async value => {
    try {
        const {data } = await axios.post("/users/signup", value);
        return data
    } catch (error) {
        
    }
})

export const login = createAsyncThunk("auth/login", async value => {
    try {
        const {data } = await axios.post("/users/login", value);
        return data
    } catch (error) {
        
    }
})

export const logout = createAsyncThunk("auth/logout", async () => {
    try {
        await axios.post("/users/logout")
    } catch (error) {
        
    }
})