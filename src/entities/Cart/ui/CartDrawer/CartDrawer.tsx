import { Drawer } from 'shared/ui/Drawer';
import PlusIcon from 'shared/assets/icons/plus.svg';
import MinusIcon from 'shared/assets/icons/minus.svg';
import ArrowRight from 'shared/assets/icons/arrow-right.svg';
import CloseIcon from 'shared/assets/icons/close.svg';
import { Button, ButtonColor, ButtonVariant } from 'shared/ui/Button';
import cls from './CartDrawer.module.scss';
import { CartSchema } from '../../model/types/cart';
import { useAppDispatch } from '../../../../shared/lib/hooks/useAppaDispatch/useAppDispatch';
import { cartActions } from '../../model/slice/cartSlice';

export interface CartDrawerProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
    cart?: CartSchema;
}

export const CartDrawer = (props: CartDrawerProps) => {
    const { className, isOpen, onClose, cart } = props;
    const dispatch = useAppDispatch();

    const removeItemFromCart = (id: string) => {
        dispatch(cartActions.removeItem(id));
    };
    const increaseItemQuantity = (id: string) => {
        dispatch(cartActions.increaseQuantity(id));
    };
    const decreaseItemQuantity = (id: string) => {
        dispatch(cartActions.decreaseQuantity(id));
    };
    if (cart.items.length <= 0) {
        return (
            <Drawer isOpen={isOpen} onClose={onClose} className={cls.CartEmpty}>
                <img
                    src="https://dodopizza-a.akamaihd.net/site-static/dist/121df529925b0f43cc73.svg"
                    alt=""
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
                    <div className={cls.Item} key={item.id}>
                        <Button
                            onClick={() => removeItemFromCart(item.id)}
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
                                <span>
                                    {Object.values(item.options.small).join(
                                        ' ',
                                    )}
                                </span>
                            </div>
                        </div>
                        <div className={cls.ItemQuantity}>
                            <div className={cls.SummaryPrice}>
                                {item.quantity * item.options.small.price} ₽
                            </div>
                            <div className={cls.BtnGroup}>
                                <Button
                                    variant={ButtonVariant.CLEAR}
                                    onClick={() =>
                                        decreaseItemQuantity(item.id)
                                    }
                                >
                                    <MinusIcon width={20} />
                                </Button>
                                {item.quantity}
                                <Button
                                    variant={ButtonVariant.CLEAR}
                                    onClick={() =>
                                        increaseItemQuantity(item.id)
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
                <Button
                    color={ButtonColor.SECONDARY}
                    variant={ButtonVariant.OUTLINED}
                >
                    К оформлению заказа
                    <ArrowRight width={24} />
                </Button>
            </div>
            <div />
        </Drawer>
    );
};
