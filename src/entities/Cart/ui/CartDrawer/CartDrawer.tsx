import { Drawer } from 'shared/ui/Drawer';
import PlusIcon from 'shared/assets/icons/plus.svg';
import MinusIcon from 'shared/assets/icons/minus.svg';
import ArrowRight from 'shared/assets/icons/arrow-right.svg';
import CloseIcon from 'shared/assets/icons/close.svg';
import { Button, ButtonColor, ButtonVariant } from 'shared/ui/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppaDispatch/useAppDispatch';
import cls from './CartDrawer.module.scss';
import { CartSchema, sizeType } from '../../model/types/cart';
import { cartActions } from '../../model/slice/cartSlice';
import { doughType } from '../../../Pizza/model/types/pizzas';

export interface CartDrawerProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
    cart: CartSchema;
}

export const CartDrawer = (props: CartDrawerProps) => {
    const { className, isOpen, onClose, cart } = props;
    const dispatch = useAppDispatch();

    const removeItemFromCart = (
        id: string,
        size: sizeType,
        doughType: doughType,
    ) => {
        dispatch(cartActions.removeItem({ id, size, doughType }));
    };
    const increaseItemQuantity = (
        id: string,
        size: sizeType,
        doughType: doughType,
    ) => {
        dispatch(cartActions.increaseQuantity({ id, size, doughType }));
    };
    const decreaseItemQuantity = (
        id: string,
        size: sizeType,
        doughType: doughType,
    ) => {
        dispatch(cartActions.decreaseQuantity({ id, size, doughType }));
    };
    if (cart.items.length <= 0) {
        return (
            <Drawer isOpen={isOpen} onClose={onClose} className={cls.CartEmpty}>
                <img
                    src="https://dodopizza-a.akamaihd.net/site-static/dist/121df529925b0f43cc73.svg"
                    alt="Пустая корзина"
                    title="Пустая корзина"
                />
                <h2 className={cls.Title}>Ваша корзина пуста</h2>
                <div />
            </Drawer>
        );
    }
    return (
        <Drawer isOpen={isOpen} onClose={onClose} className={cls.Cart}>
            <h2 className={cls.Title}>Корзина</h2>
            <div className={cls.Items}>
                {cart.items.map((item) => (
                    <div
                        className={cls.Item}
                        key={item.id + item.size + item.doughType}
                    >
                        <Button
                            onClick={() =>
                                removeItemFromCart(
                                    item.id,
                                    item.size,
                                    item.doughType,
                                )
                            }
                            variant={ButtonVariant.CLEAR}
                            className={cls.RemoveBtn}
                        >
                            <CloseIcon width={20} />
                        </Button>
                        <div className={cls.Info}>
                            <img
                                src={item.imageUrl}
                                alt={item.name}
                                className={cls.Img}
                            />
                            <div>
                                <h3>{item.name}</h3>
                                <span className={cls.ItemOptions}>
                                    {`
                                    ${item.options[item.size].title}
                                    ${item.options[item.size].size} см,
                                    ${item.doughType} тесто
                                    `}
                                </span>
                            </div>
                        </div>
                        <div className={cls.ItemQuantity}>
                            <div className={cls.SummaryPrice}>
                                {`${
                                    item.options[item.size].price *
                                    item.quantity
                                } ₽`}
                            </div>
                            <div className={cls.BtnGroup}>
                                <Button
                                    variant={ButtonVariant.CLEAR}
                                    onClick={() =>
                                        decreaseItemQuantity(
                                            item.id,
                                            item.size,
                                            item.doughType,
                                        )
                                    }
                                >
                                    <MinusIcon width={20} />
                                </Button>
                                {item.quantity}
                                <Button
                                    variant={ButtonVariant.CLEAR}
                                    onClick={() =>
                                        increaseItemQuantity(
                                            item.id,
                                            item.size,
                                            item.doughType,
                                        )
                                    }
                                >
                                    <PlusIcon width={20} />
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={cls.Checkout}>
                <h3>{`Товаров в корзине: ${cart.totalItems}`}</h3>
                <h3>{`Сумма заказа: ${cart.totalPrice} ₽`}</h3>
                <Button color={ButtonColor.SECONDARY}>
                    К оформлению заказа
                    <ArrowRight width={24} />
                </Button>
            </div>
            <div />
        </Drawer>
    );
};
