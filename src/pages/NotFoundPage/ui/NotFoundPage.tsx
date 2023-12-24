import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { RoutePath } from 'app/providers/AppRouter';
import { Button, ButtonColor, ButtonVariant } from 'shared/ui/Button';
import cls from './NotFoundPage.module.scss';

export interface NotFoundPageProps {
    className?: string;
}

const NotFoundPage = (props: NotFoundPageProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.NotFoundPage, [className])}>
            <div className={cls.NotFound}>
                <h2>404</h2>
                <h1>Мы не нашли эту страницу</h1>
                <Link to={RoutePath.main}>
                    <Button
                        variant={ButtonVariant.OUTLINED}
                        color={ButtonColor.SECONDARY}
                    >
                        На главную
                    </Button>
                </Link>
            </div>
            <img
                src="https://dodopizzadev-a.akamaihd.net/site-static-pages-dev/errors/pizza-box-with-shadow-1.0.jpg"
                alt=""
            />
        </div>
    );
};

export default NotFoundPage;
