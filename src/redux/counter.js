import { createSlice } from '@reduxjs/toolkit';
import { productsData } from '../data';

const initialState = { productsData, total: 0 };

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state, action) {
            const { id } = action.payload;
            state.productsData.find((c) => c.id === id).amount++;
            console.log(
                'id: ',
                state.productsData.find((c) => c.id === id).id,
                'product: ',
                state.productsData.find((c) => c.id === id).amount,
            );
            state.total++;
            console.log('Total product: ', state.total);
        },
    },
});
export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
