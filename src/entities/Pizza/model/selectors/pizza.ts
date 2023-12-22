import { StateSchema } from 'app/providers/StoreProvider';

export const getPizzaData = (state: StateSchema) => state.pizzas.data;
export const getPizzaIsLoading = (state: StateSchema) =>
    state.pizzas.isLoading || false;
