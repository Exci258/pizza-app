import { CartSchema } from 'entities/Cart';
import { PizzasSchema } from 'entities/Pizza';

export interface StateSchema {
    pizzas: PizzasSchema;
    cart: CartSchema;
}
