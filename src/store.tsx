import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/UserSlice"; // Adjust the import path as necessary
import profileReducer from "./slices/ProfileSlice";
import FilterReducer from "./slices/FilterTalent";
export default configureStore({
    reducer: {
        user: userReducer,
        profile: profileReducer,
        filter: FilterReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Disable serializable check if needed
        }),
})
