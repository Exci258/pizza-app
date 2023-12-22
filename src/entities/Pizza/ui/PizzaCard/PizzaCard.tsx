import classNames from 'classnames';
import { Button, ButtonColor, ButtonVariant } from 'shared/ui/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppaDispatch/useAppDispatch';
import { memo, useState } from 'react';
import { Modal } from 'shared/ui/Modal';
import CloseIcon from 'shared/assets/icons/close.svg';
import cls from './PizzaCard.module.scss';
import { Pizza } from '../../model/types/pizzas';
import { cartActions } from '../../../Cart';

export interface PizzaCardProps {
    className?: string;
    pizza: Pizza;
}

export const PizzaCard = memo((props: PizzaCardProps) => {
    const { className, pizza } = props;
    const dispatch = useAppDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const addItemToCart = () => {
        dispatch(cartActions.addItem({ ...pizza, quantity: 0 }));
        closeModal();
    };

    return (
        <article className={classNames(cls.PizzaCard, [className])}>
            <main className={cls.Main} onClick={openModal}>
                <img
                    src={pizza.imageUrl}
                    alt={pizza.name}
                    title={pizza.name}
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
                    onClick={openModal}
                    variant={ButtonVariant.OUTLINED}
                    color={ButtonColor.SECONDARY}
                    className={cls.Btn}
                >
                    Выбрать
                </Button>
            </footer>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div className={cls.PizzaCardDetails}>
                    <Button
                        onClick={closeModal}
                        variant={ButtonVariant.CLEAR}
                        className={cls.CloseBtn}
                    >
                        <CloseIcon />
                    </Button>
                    <img src={pizza.imageUrl} alt={pizza.name} />
                    <div className={cls.PizzaCardParams}>
                        <h2 className={cls.Title}>{pizza.name}</h2>
                        <div className={cls.Ingredients}>
                            {pizza.ingredients.join(', ')}
                        </div>
                        <Button
                            variant={ButtonVariant.OUTLINED}
                            color={ButtonColor.SECONDARY}
                            onClick={addItemToCart}
                        >
                            Добавить в корзину за {pizza.options.small.price} ₽
                        </Button>
                    </div>
                </div>
            </Modal>
        </article>
    );
});
