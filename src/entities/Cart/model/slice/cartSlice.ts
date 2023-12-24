import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartSchema, PizzaCart, sizeType } from '../types/cart';
import { doughType } from '../../../Pizza/model/types/pizzas';

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
            const { id, size, doughType } = action.payload;
            const existingPizzaIndex = state.items.findIndex(
                (pizza) =>
                    pizza.id === id &&
                    pizza.size === size &&
                    pizza.doughType === doughType,
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
                    total + pizza.quantity * pizza.options[pizza.size].price,
                0,
            );
        },
        removeItem(
            state,
            action: PayloadAction<{
                id: string;
                size: sizeType;
                doughType: doughType;
            }>,
        ) {
            const { id, size, doughType } = action.payload;
            state.items = state.items.filter(
                (pizza) =>
                    !(
                        pizza.id === id &&
                        pizza.size === size &&
                        pizza.doughType === doughType
                    ),
            );
            state.totalItems = state.items.reduce(
                (total, pizza) => total + pizza.quantity,
                0,
            );
            state.totalPrice = state.items.reduce(
                (total, pizza) =>
                    total + pizza.quantity * pizza.options[pizza.size].price,
                0,
            );
        },
        increaseQuantity(
            state,
            action: PayloadAction<{
                id: string;
                size: sizeType;
                doughType: doughType;
            }>,
        ) {
            const { id, size, doughType } = action.payload;
            const existingPizzaIndex = state.items.findIndex(
                (pizza) =>
                    pizza.id === id &&
                    pizza.size === size &&
                    pizza.doughType === doughType,
            );

            if (existingPizzaIndex !== -1) {
                state.items[existingPizzaIndex].quantity += 1;
                state.totalItems = state.items.reduce(
                    (total, pizza) => total + pizza.quantity,
                    0,
                );
                state.totalPrice = state.items.reduce(
                    (total, pizza) =>
                        total +
                        pizza.quantity * pizza.options[pizza.size].price,
                    0,
                );
            }
        },
        decreaseQuantity(
            state,
            action: PayloadAction<{
                id: string;
                size: sizeType;
                doughType: doughType;
            }>,
        ) {
            const { id, size, doughType } = action.payload;
            const existingPizzaIndex = state.items.findIndex(
                (pizza) =>
                    pizza.id === id &&
                    pizza.size === size &&
                    pizza.doughType === doughType,
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
                        total +
                        pizza.quantity * pizza.options[pizza.size].price,
                    0,
                );
            }
        },
    },
});

export const { reducer: cartReducer, actions: cartActions } = cartSlice;
