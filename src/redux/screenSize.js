import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    screenWidth: typeof window === 'object' ? window.innerWidth : null,
    screenHeight: typeof window === 'object' ? window.innerHeight : null,
};

export const screenSize = createSlice({
    name: 'screenSize',
    initialState,
    reducers: {
        getSize(state, action) {
            return Object.assign({}, state, {
                screenWidth: action.screenWidth,
                screenHeight: action.screenHeight,
            });
        },
    },
});

export const { getSize } = screenSize.actions;
export default screenSize.reducer;
