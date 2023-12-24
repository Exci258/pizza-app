export type {
    Pizza,
    PizzaSize,
    PizzasSchema,
    doughType,
} from './model/types/pizzas';
export { PizzaCard } from './ui/PizzaCard/PizzaCard';
export { PizzaList } from './ui/PizzaList/PizzaList';
export { pizzasReducer, pizzasActions } from './model/slice/pizzasSlice';
export { fetchPizzasList } from './model/services/fetchPizzasList/fetchPizzasList';
