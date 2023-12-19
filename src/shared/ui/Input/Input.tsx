import classNames from 'classnames';
import { ChangeEvent, InputHTMLAttributes, useId, useState } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
>;

export interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    label?: string;
    disabled?: boolean;
}

export const Input = (props: InputProps) => {
    const {
        className,
        value,
        onChange,
        label,
        disabled,
        type = 'text',
        ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const inputId = useId();

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={cls.InputWrapper}>
            {label && (
                <label
                    htmlFor={inputId}
                    className={classNames(cls.InputLabel, {
                        [cls.InputLabelFocused]: isFocused,
                        [cls.InputLabelDisabled]: disabled,
                    })}
                >
                    {label}
                </label>
            )}
            <input
                id={inputId}
                type={type}
                value={value}
                onChange={onChangeHandler}
                onFocus={onFocus}
                onBlur={onBlur}
                className={classNames(cls.Input)}
                disabled={disabled}
                {...otherProps}
            />
        </div>
    );
};
