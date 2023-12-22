import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'shared/api/api';
import { Pizza } from '../../types/pizzas';

export const fetchPizzasList = createAsyncThunk<Pizza[]>(
    'pizzas/fetchPizzasList',
    async (props, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        try {
            const response = await api.get<Pizza[]>('/pizza');
            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
