import { StateSchema } from 'app/providers/StoreProvider';

export const getMainPagePizzas = (state: StateSchema) => state.mainPage.pizzas;
export const getMainPageIsLoading = (state: StateSchema) =>
    state.mainPage.isLoading || false;
