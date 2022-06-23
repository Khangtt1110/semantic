import { createSlice } from '@reduxjs/toolkit';
import { customCardData } from '../data';

const initialState = { customCardData };
export const like = createSlice({
    name: 'like',
    initialState,
    reducers: {
        likeAction(state, action) {
            const { id, e } = action.payload;
            const isActive = e.target.classList[0] === 'active' ? true : false;

            if (isActive) {
                state.customCardData.find((c) => c.id === id).like--;
                return;
            }
            state.customCardData.find((c) => c.id === id).like++;
        },
    },
});

export const { likeAction } = like.actions;
export default like.reducer;
