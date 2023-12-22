import classNames from 'classnames';
import cls from './PizzaList.module.scss';
import { Pizza } from '../../model/types/pizza';
import { PizzaCard } from '../PizzaCard/PizzaCard';

export interface PizzaListProps {
    className?: string;
    pizzas?: Pizza[];
}

export const PizzaList = (props: PizzaListProps) => {
    const { className, pizzas } = props;

    return (
        <div className={classNames(cls.PizzaList, [className])}>
            <h2 className={cls.Title}>Пиццы</h2>
            <div className={cls.PizzaListItems}>
                {pizzas.map((item) => (
                    <PizzaCard pizza={item} key={item.id} />
                ))}
            </div>
        </div>
    );
};
