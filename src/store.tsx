import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/UserSlice"; // Adjust the import path as necessary
import profileReducer from "./slices/ProfileSlice";
export default configureStore({
    reducer: {
        user: userReducer,
        profile: profileReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Disable serializable check if needed
        }),
})
