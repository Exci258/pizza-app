import classNames from 'classnames';
import { Button, ButtonColor, ButtonVariant } from 'shared/ui/Button';
import { Skeleton } from 'shared/ui/Skeleton';
import cls from './PizzaCard.module.scss';
import { Pizza } from '../../model/types/pizza';

export interface PizzaCardProps {
    className?: string;
    pizza: Pizza;
    isLoading?: boolean;
}

export const PizzaCard = (props: PizzaCardProps) => {
    const { className, pizza, isLoading } = props;

    if (isLoading) {
        return (
            <article className={classNames(cls.PizzaCard, [className])}>
                <main className={cls.Main}>
                    <Skeleton height={292} />
                    <div className={cls.Title}>
                        <Skeleton width={150} height={25} />
                    </div>
                    <div className={cls.Ingredients}>
                        <Skeleton height={50} />
                    </div>
                </main>
                <footer className={cls.Footer}>
                    <div className={cls.Price}>
                        <Skeleton width={150} height={35} />
                    </div>
                    <Button
                        variant={ButtonVariant.OUTLINED}
                        color={ButtonColor.SECONDARY}
                        className={cls.Btn}
                    >
                        Выбрать
                    </Button>
                </footer>
            </article>
        );
    }

    return (
        <article className={classNames(cls.PizzaCard, [className])}>
            <main className={cls.Main}>
                <img
                    src={pizza.imageUrl}
                    alt={pizza.name}
                    className={cls.Img}
                />
                <div className={cls.Title}>{pizza.name}</div>
                <div className={cls.Ingredients}>
                    {pizza.ingredients.join(', ')}
                </div>
            </main>
            <footer className={cls.Footer}>
                <div className={cls.Price}>
                    от {pizza.options.small.price} ₽
                </div>
                <Button
                    variant={ButtonVariant.OUTLINED}
                    color={ButtonColor.SECONDARY}
                    className={cls.Btn}
                >
                    Выбрать
                </Button>
            </footer>
        </article>
    );
};
