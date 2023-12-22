import classNames from 'classnames';
import cls from './NotFoundPage.module.scss';

export interface NotFoundPageProps {
    className?: string;
}

const NotFoundPage = (props: NotFoundPageProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.NotFoundPage, [className])}>
            NotFoundPage
        </div>
    );
};

export default NotFoundPage;
