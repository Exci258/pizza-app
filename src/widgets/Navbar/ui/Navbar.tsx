import classNames from 'classnames';
import { Button, ButtonColor } from 'shared/ui/Button';
import { CartSchema } from 'entities/Cart';
import { Link } from 'react-router-dom';
import { RoutePath } from 'app/providers/AppRouter';
import LogoIcon from 'shared/assets/icons/logo.svg';
import { memo } from 'react';
import cls from './Navbar.module.scss';

export interface NavbarProps {
    className?: string;
    cart: CartSchema;
    onOpenDrawer: () => void;
}

export const Navbar = memo((props: NavbarProps) => {
    const { className, cart, onOpenDrawer } = props;

    return (
        <header className={classNames(cls.Navbar, [className])}>
            <Link to={RoutePath.main}>
                <LogoIcon width={250} />
            </Link>
            <Button
                onClick={onOpenDrawer}
                color={ButtonColor.SECONDARY}
                className={cls.Cart}
            >
                {`Корзина ${cart.totalItems > 0 ? `(${cart.totalItems})` : ''}`}
            </Button>
        </header>
    );
});
