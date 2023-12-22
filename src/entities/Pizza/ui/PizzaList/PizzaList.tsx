import classNames from 'classnames';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import cls from './PizzaList.module.scss';
import { PizzaCard } from '../PizzaCard/PizzaCard';
import { getPizzaData, getPizzaIsLoading } from '../../model/selectors/pizza';
import { Skeleton } from '../../../../shared/ui/Skeleton';

export interface PizzaListProps {
    className?: string;
}

export const PizzaList = memo((props: PizzaListProps) => {
    const { className } = props;
    const pizzas = useSelector(getPizzaData);
    const isLoading = useSelector(getPizzaIsLoading);
    if (isLoading) {
        return (
            <div className={classNames(cls.PizzaList, [className])}>
                <h2 className={cls.Title}>Пиццы</h2>
                <section className={cls.PizzaListItems}>
                    {new Array(12).fill(0).map((item) => (
                        <Skeleton
                            width={292}
                            height={450}
                            key={Math.random()}
                        />
                    ))}
                </section>
            </div>
        );
    }
    return (
        <div className={classNames(cls.PizzaList, [className])}>
            <h2 className={cls.Title}>Пиццы</h2>
            <section className={cls.PizzaListItems}>
                {pizzas.map((item) => (
                    <PizzaCard pizza={item} key={item.id} />
                ))}
            </section>
        </div>
    );
});
