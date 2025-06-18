import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/UserSlice"; // Adjust the import path as necessary
export default configureStore({
    reducer: {
        user: userReducer,
        // Add other slices here as needed
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Disable serializable check if needed
        }),
})
