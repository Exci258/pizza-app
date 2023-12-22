import classNames from 'classnames';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppaDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { PizzaList } from 'entities/Pizza/ui/PizzaList/PizzaList';
import cls from './MainPage.module.scss';
import { fetchPizzasList } from '../model/services/fetchPizzasList/fetchPizzasList';
import { getMainPagePizzas } from '../model/selectors/mainPageSelectors';

export interface MainPageProps {
    className?: string;
}

const MainPage = (props: MainPageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const pizzas = useSelector(getMainPagePizzas);

    useEffect(() => {
        dispatch(fetchPizzasList());
    }, []);

    return (
        <div className={classNames(cls.MainPage, [className])}>
            <PizzaList pizzas={pizzas} />
        </div>
    );
};

export default MainPage;
