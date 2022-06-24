import { createSlice } from '@reduxjs/toolkit';
import { customCardData } from '../data';

const initialState = { customCardData };
export const like = createSlice({
    name: 'like',
    initialState,
    reducers: {
        likeAction(state, action) {
            const { id } = action.payload;
            state.customCardData.find((c) => c.id === id).like++;
        },
        unLikeAction(state, action) {
            const { id } = action.payload;
            state.customCardData.find((c) => c.id === id).like--;
        },
    },
});

export const { likeAction, unLikeAction } = like.actions;
export default like.reducer;
