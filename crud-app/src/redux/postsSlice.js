import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name: "post",
    initialState: {
        items: [],
    },
    reducers: {
        addPost: (state, action) => {
            console.log(action.payload);
            state.items.push(action.payload);
        },
        deletePosts: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
        },
        updatePost: (state, action) => {
            // debugger
            state.items.map( item => {
                if (item.id === action.payload.id) {
                    item.title = action.payload.title
                    item.desc = action.payload.desc
                }
            } )
        },
    },
});

export const { addPost, deletePosts, updatePost } = postSlice.actions;

export default postSlice.reducer;
