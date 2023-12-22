import { createSlice } from '@reduxjs/toolkit';
import { fetchPizzasList } from '../services/fetchPizzasList/fetchPizzasList';
import { MainPageSchema } from '../types/mainPageSchema';

const initialState: MainPageSchema = {
    pizzas: [],
    isLoading: false,
};

const mainPageSlice = createSlice({
    name: 'mainPageSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPizzasList.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchPizzasList.fulfilled, (state, action) => {
                state.pizzas = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchPizzasList.rejected, (state, action) => {
                state.isLoading = false;
            });
    },
});

export const { reducer: mainPageReducer, actions: mainPageActions } =
    mainPageSlice;
