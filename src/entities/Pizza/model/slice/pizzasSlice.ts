import { createSlice } from '@reduxjs/toolkit';
import { fetchPizzasList } from '../services/fetchPizzasList/fetchPizzasList';
import { PizzasSchema } from '../types/pizzas';

const initialState: PizzasSchema = {
    data: [],
    isLoading: false,
};

const pizzasSlice = createSlice({
    name: 'pizzasSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPizzasList.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchPizzasList.fulfilled, (state, action) => {
                state.data = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchPizzasList.rejected, (state, action) => {
                state.isLoading = false;
            });
    },
});

export const { reducer: pizzasReducer, actions: pizzasActions } = pizzasSlice;
