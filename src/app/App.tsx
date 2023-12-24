import { useCallback, useEffect, useState } from 'react';
import { fetchPizzasList } from 'entities/Pizza';
import { useAppDispatch } from 'shared/lib/hooks/useAppaDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { cartActions, CartDrawer, getCart } from 'entities/Cart';
import { Navbar } from 'widgets/Navbar';
import { AppRouter } from './providers/AppRouter';

function App() {
    const dispatch = useAppDispatch();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const cart = useSelector(getCart);

    useEffect(() => {
        dispatch(fetchPizzasList());
        dispatch(cartActions.initCart());
    }, [dispatch]);

    const onOpenDrawer = useCallback(() => {
        setIsDrawerOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsDrawerOpen(false);
    }, []);

    return (
        <div className="app">
            <Navbar onOpenDrawer={onOpenDrawer} cart={cart} />
            <AppRouter />
            <CartDrawer
                isOpen={isDrawerOpen}
                onClose={onCloseDrawer}
                cart={cart}
            />
        </div>
    );
}

export default App;
