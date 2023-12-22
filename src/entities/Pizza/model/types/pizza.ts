export interface PizzaSize {
    title: string;
    size: number;
    weight: number;
    price: number;
}

export interface Pizza {
    id: string;
    name: string;
    imageUrl: string;
    ingredients: string[];
    doughType: string;
    options: {
        small: PizzaSize;
        medium: PizzaSize;
        large: PizzaSize;
    };
}
