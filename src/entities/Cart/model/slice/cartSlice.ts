import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartSchema, PizzaCart } from '../types/cart';

const initialState: CartSchema = {
    items: [],
    totalItems: 0,
    totalPrice: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<PizzaCart>) {
            const { id } = action.payload;
            const existingPizzaIndex = state.items.findIndex(
                (pizza) => pizza.id === id,
            );
            if (existingPizzaIndex !== -1) {
                state.items[existingPizzaIndex].quantity += 1;
            } else {
                const newPizza: PizzaCart = { ...action.payload, quantity: 1 };
                state.items.push(newPizza);
            }
            state.totalItems = state.items.reduce(
                (total, pizza) => total + pizza.quantity,
                0,
            );
            state.totalPrice = state.items.reduce(
                (total, pizza) =>
                    total + pizza.quantity * pizza.options.small.price,
                0,
            );
        },
        removeItem(state, action: PayloadAction<string>) {
            const pizzaIdToRemove = action.payload;
            const updatedItems = state.items.filter(
                (pizza) => pizza.id !== pizzaIdToRemove,
            );

            state.items = updatedItems;
            state.totalItems = state.items.reduce(
                (total, pizza) => total + pizza.quantity,
                0,
            );
            state.totalPrice = state.items.reduce(
                (total, pizza) =>
                    total + pizza.quantity * pizza.options.small.price,
                0,
            );
        },
        increaseQuantity(state, action: PayloadAction<string>) {
            const pizzaIdToIncrease = action.payload;
            const existingPizzaIndex = state.items.findIndex(
                (pizza) => pizza.id === pizzaIdToIncrease,
            );

            if (existingPizzaIndex !== -1) {
                state.items[existingPizzaIndex].quantity += 1;
                state.totalItems = state.items.reduce(
                    (total, pizza) => total + pizza.quantity,
                    0,
                );
                state.totalPrice = state.items.reduce(
                    (total, pizza) =>
                        total + pizza.quantity * pizza.options.small.price,
                    0,
                );
            }
        },
        decreaseQuantity(state, action: PayloadAction<string>) {
            const pizzaIdToDecrease = action.payload;
            const existingPizzaIndex = state.items.findIndex(
                (pizza) => pizza.id === pizzaIdToDecrease,
            );

            if (existingPizzaIndex !== -1) {
                state.items[existingPizzaIndex].quantity -= 1;

                if (state.items[existingPizzaIndex].quantity === 0) {
                    state.items.splice(existingPizzaIndex, 1);
                }

                state.totalItems = state.items.reduce(
                    (total, pizza) => total + pizza.quantity,
                    0,
                );
                state.totalPrice = state.items.reduce(
                    (total, pizza) =>
                        total + pizza.quantity * pizza.options.small.price,
                    0,
                );
            }
        },
    },
});

export const { reducer: cartReducer, actions: cartActions } = cartSlice;
