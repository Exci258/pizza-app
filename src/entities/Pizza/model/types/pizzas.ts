export type doughType = 'Традиционное' | 'Тонкое';

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
    doughType: doughType;
    options: {
        small: PizzaSize;
        medium: PizzaSize;
        large: PizzaSize;
    };
}

export interface PizzasSchema {
    isLoading?: boolean;
    data: Pizza[];
}
