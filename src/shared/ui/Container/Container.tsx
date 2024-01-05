import classNames from 'classnames';
import { ReactNode } from 'react';
import cls from './Container.module.scss';

export interface ContainerProps {
    className?: string;
    children: ReactNode;
}

export const Container = (props: ContainerProps) => {
    const { className, children } = props;
    return (
        <div className={classNames(cls.Container, [className])}>{children}</div>
    );
};
