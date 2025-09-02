import { createSlice } from "@reduxjs/toolkit";
import { getItem, removeItem, setItem } from "../services/LocalStorageService";

const JwtSlice = createSlice({
    name: "token",
    initialState: getItem('token') || "",
    reducers: {
        setToken: (state, action) => {
            setItem('token', action.payload);
            state = action.payload
            return state;
        },
        clearToken: (state) => {
            removeItem('token');
            state = "";
            return state;
        }
    }
});

export const { setToken, clearToken } = JwtSlice.actions;
export default JwtSlice.reducer;
