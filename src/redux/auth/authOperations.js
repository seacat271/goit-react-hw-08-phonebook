import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { signupUser, loginUser, logoutUser, refreshUser } from "utils/customApi";

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
export const refresh = createAsyncThunk('auth/refresh', async (_, thunkApi) => {
const persistedToken = thunkApi.getState().auth.token;
if(persistedToken === null) return thunkApi.rejectWithValue();
token.set(persistedToken);
try {
    const {data} = await refreshUser();
    return data
} catch (error) {
    
}

})