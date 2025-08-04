import { createSlice } from "@reduxjs/toolkit";

const SortSlice = createSlice(
    {
        name: 'sort',
        initialState: {},
        reducers: {
            changeSort: (state, action) => {
                state = action.payload;
                console.log("SortSlice", state);
                return state;
            },
            resetSort: (state) => {
                state = {};
                return state;
            }
        }
    });
export const { changeSort, resetSort } = SortSlice.actions;
export default SortSlice.reducer;