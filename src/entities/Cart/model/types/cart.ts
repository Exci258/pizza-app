import { Pizza } from 'entities/Pizza';

export type sizeType = 'small' | 'medium' | 'large';

export interface PizzaCart extends Pizza {
    size: sizeType;
    quantity: number;
}

export interface CartSchema {
    items: PizzaCart[];
    totalItems: number;
    totalPrice: number;
}
