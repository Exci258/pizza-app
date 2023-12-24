import classNames from 'classnames';
import { Button, ButtonColor, ButtonVariant } from 'shared/ui/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppaDispatch/useAppDispatch';
import { ChangeEvent, memo, useState } from 'react';
import { Modal } from 'shared/ui/Modal';
import CloseIcon from 'shared/assets/icons/close.svg';
import { cartActions, sizeType } from 'entities/Cart';
import cls from './PizzaCard.module.scss';
import { doughType, Pizza, PizzaSize } from '../../model/types/pizzas';

export interface PizzaCardProps {
    className?: string;
    pizza: Pizza;
}

export const PizzaCard = memo((props: PizzaCardProps) => {
    const { className, pizza } = props;
    const dispatch = useAppDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedSize, setSelectedSize] = useState<sizeType>('small');
    const [selectedDough, setSelectedDough] =
        useState<doughType>('Традиционное');
    const [selectedOption, setSelectedOption] = useState<PizzaSize>(
        pizza.options.small,
    );

    const handleSizeChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newSize: sizeType = e.target.value as sizeType;
        setSelectedSize(newSize);
        setSelectedOption(pizza.options[newSize]);
    };

    const handleDoughChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newDough: doughType = e.target.value as doughType;
        setSelectedDough(newDough);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const addItemToCart = () => {
        const selectedSizeOption = {
            [selectedSize]: selectedOption,
        } as { [key in 'small' | 'medium' | 'large']: PizzaSize };
        dispatch(
            cartActions.addItem({
                ...pizza,
                doughType: selectedDough,
                size: selectedSize,
                options: selectedSizeOption,
                quantity: 0,
            }),
        );
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
                        <span className={cls.PizzaOptions}>
                            {`${pizza.options[selectedSize].size} см,
                            ${selectedDough} тесто, 
                            ${pizza.options[selectedSize].weight} г`}
                        </span>
                        <span className={cls.Ingredients}>
                            {pizza.ingredients.join(', ')}
                        </span>
                        <div className={cls.SizeOptions}>
                            <label
                                className={classNames({
                                    [cls.InputChecked]:
                                        selectedSize === 'small',
                                })}
                            >
                                <input
                                    type="radio"
                                    value="small"
                                    checked={selectedSize === 'small'}
                                    onChange={handleSizeChange}
                                />
                                {pizza.options.small.title}
                            </label>
                            <label
                                className={classNames({
                                    [cls.InputChecked]:
                                        selectedSize === 'medium',
                                })}
                            >
                                <input
                                    type="radio"
                                    value="medium"
                                    checked={selectedSize === 'medium'}
                                    onChange={handleSizeChange}
                                />
                                {pizza.options.medium.title}
                            </label>
                            <label
                                className={classNames({
                                    [cls.InputChecked]:
                                        selectedSize === 'large',
                                })}
                            >
                                <input
                                    type="radio"
                                    value="large"
                                    checked={selectedSize === 'large'}
                                    onChange={handleSizeChange}
                                />
                                {pizza.options.large.title}
                            </label>
                        </div>
                        <div className={cls.doughOptions}>
                            <label
                                className={classNames({
                                    [cls.InputChecked]:
                                        selectedDough === 'Традиционное',
                                })}
                            >
                                <input
                                    type="radio"
                                    value="Традиционное"
                                    checked={selectedDough === 'Традиционное'}
                                    onChange={handleDoughChange}
                                />
                                Традиционное
                            </label>
                            <label
                                className={classNames({
                                    [cls.InputChecked]:
                                        selectedDough === 'Тонкое',
                                })}
                            >
                                <input
                                    type="radio"
                                    value="Тонкое"
                                    checked={selectedDough === 'Тонкое'}
                                    onChange={handleDoughChange}
                                />
                                Тонкое
                            </label>
                        </div>
                        <Button
                            color={ButtonColor.SECONDARY}
                            onClick={addItemToCart}
                        >
                            {`Добавить в корзину за 
                            ${pizza.options[selectedSize].price} ₽`}
                        </Button>
                    </div>
                </div>
            </Modal>
        </article>
    );
});
