import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    userAuthStatus : false,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,

    reducers: {
        authStatus : (state, action) =>{
            state.userAuthStatus = action.payload;
        },

    }
})

// / Action creators are generated for each case reducer function
export const { authStatus} = authSlice.actions;

export default authSlice.reducer;