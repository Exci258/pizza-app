import classNames from 'classnames';
import cls from './ErrorFallback.module.scss';
import { Button, ButtonColor, ButtonVariant } from '../../../shared/ui/Button';

interface ErrorFallbackProps {
    className?: string;
}

export const ErrorFallback = (props: ErrorFallbackProps) => {
    const { className } = props;

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(cls.ErrorFallback, [className])}>
            <h1>Произошла ошибка!</h1>
            <Button
                color={ButtonColor.SUCCESS}
                variant={ButtonVariant.OUTLINED}
                onClick={reloadPage}
            >
                Обновить страницу
            </Button>
        </div>
    );
};
