import classNames from 'classnames';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import cls from './Button.module.scss';

export enum ButtonColor {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    SUCCESS = 'success',
    ERROR = 'error',
}
export enum ButtonVariant {
    CONTAINED = 'contained',
    OUTLINED = 'outlined',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: ReactNode;
    color?: ButtonColor;
    disabled?: boolean;
    variant?: ButtonVariant;
}
export type Mods = Record<string, boolean | string | undefined>;

export const Button = (props: ButtonProps) => {
    const {
        className,
        children,
        color = ButtonColor.PRIMARY,
        disabled,
        variant = ButtonVariant.CONTAINED,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls[color]]: true,
        [cls[variant]]: true,
        [cls.disabled]: disabled,
    };

    return (
        <button
            className={classNames(cls.Button, mods, [className])}
            disabled={disabled}
            type="button"
            {...otherProps}
        >
            {children}
        </button>
    );
};
