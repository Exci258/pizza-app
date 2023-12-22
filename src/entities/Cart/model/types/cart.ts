import { Pizza } from '../../../Pizza';

export interface PizzaCart extends Pizza {
    quantity: number;
}

export interface CartSchema {
    items: PizzaCart[];
    totalItems: number;
    totalPrice: number;
}
