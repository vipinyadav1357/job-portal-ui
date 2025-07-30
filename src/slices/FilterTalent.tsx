import { createSlice } from "@reduxjs/toolkit";

const FilterTalent = createSlice(
    {
        name: 'filterTalent',
        initialState: {},
        reducers: {
            changeFilterTalent: (state, action) => {
                state = { ...state, ...action.payload }
                return state;
            },
            resetFilterTalent: (state) => {
                state = {};
                return state;
            }
        }
    });
export const { changeFilterTalent, resetFilterTalent } = FilterTalent.actions;
export default FilterTalent.reducer;