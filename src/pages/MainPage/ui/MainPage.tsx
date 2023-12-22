import classNames from 'classnames';
import { memo } from 'react';
import { PizzaList } from 'entities/Pizza';
import cls from './MainPage.module.scss';

export interface MainPageProps {
    className?: string;
}

const MainPage = (props: MainPageProps) => {
    const { className } = props;

    return (
        <main className={classNames(cls.MainPage, [className])}>
            <PizzaList />
        </main>
    );
};

export default memo(MainPage);
