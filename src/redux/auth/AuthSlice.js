import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    use: {
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
        
    }
})