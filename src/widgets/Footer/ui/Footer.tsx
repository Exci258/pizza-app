import classNames from 'classnames';
import { Container } from 'shared/ui/Container';
import FooterLogoIcon from 'shared/assets/icons/footer-logo.svg';
import OkIcon from 'shared/assets/icons/ok.svg';
import VkIcon from 'shared/assets/icons/vk.svg';
import YtIcon from 'shared/assets/icons/yt.svg';

import { Link } from 'react-router-dom';
import cls from './Footer.module.scss';

export interface FooterProps {
    className?: string;
}
export const Footer = (props: FooterProps) => {
    const { className } = props;
    return (
        <footer className={classNames(cls.Footer, [className])}>
            <Container className={cls.FooterContainer}>
                <div className={cls.FooterCopyRight}>
                    <FooterLogoIcon width={110} className={cls.FooterIcon} />
                    &nbsp;©&nbsp;2024
                </div>
                <div className={cls.FooterLinks}>
                    <Link to="/">Правовая информация</Link>
                    <Link to="/">Калорийность и состав</Link>
                    <Link to="/">Помощь</Link>
                </div>
                <div className={cls.FooterSocialLinks}>
                    <Link to="/">
                        <OkIcon width={18} />
                    </Link>
                    <Link to="/">
                        <VkIcon width={18} />
                    </Link>
                    <Link to="/">
                        <YtIcon width={18} />
                    </Link>
                </div>
                <div className={cls.FooterOrganization}>
                    © 2024 ООО “Додо Франчайзинг” <br />
                    ОГРН 1131101001844, ИНН 1101140415 167001,
                    <br />
                    Республика Коми, г. Сыктывкар, Октябрьский проспект, д. 16
                </div>
            </Container>
        </footer>
    );
};
