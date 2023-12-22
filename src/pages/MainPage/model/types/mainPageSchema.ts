import { Pizza } from 'entities/Pizza/model/types/pizza';

export interface MainPageSchema {
    isLoading?: boolean;
    pizzas: Pizza[];
}
