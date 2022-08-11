import { configureStore } from "@reduxjs/toolkit";
import { postSlice } from "./postsSlice";

export const store = configureStore({
    reducer: {
        posts: postSlice.reducer
    },
});
