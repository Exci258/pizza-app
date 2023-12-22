import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from 'entities/Cart';
import { pizzasReducer } from 'entities/Pizza';

export function createReduxStore() {
    const rootReducers = {
        pizzas: pizzasReducer,
        cart: cartReducer,
    };

    return configureStore({
        reducer: rootReducers,
        devTools: true,
    });
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
