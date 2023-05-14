import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import images from '~/assets/images';

import {
    BoardIcon,
    CoinIcon,
    LanguageIcon,
    MoonIcon,
    QuestionIcon,
    SettingIcon,
    SingInIcon,
    UserIcon,
} from '~/components/Icons';
import Search from './Search';
import { Link } from 'react-router-dom';
import routesConfig from '~/config/routes';
import Action from './Action';

const cx = classNames.bind(styles);

const CLIENT_MENU = [
    {
        title: 'English',
        icon: <LanguageIcon />,
        children: {
            title: 'Language',
            data: [
                {
                    code: 'eng',
                    title: 'English',
                    active: true,
                },
                {
                    code: 'vie',
                    title: 'Tiếng Việt',
                    active: false,
                },
            ],
        },
    },
    {
        title: 'Feedbalck and help',
        icon: <QuestionIcon />,
        to: '/feedbalck',
    },
    {
        title: 'Keyboard shortcuts',
        icon: <BoardIcon />,
    },
    {
        title: 'Dark mode',
        icon: <MoonIcon />,
    },
];

const USER_MENU = [
    {
        title: 'View profile',
        icon: <UserIcon />,
        to: '/lisa*@*^.^*@*',
    },
    {
        title: 'Get Coins',
        icon: <CoinIcon />,
        to: '/coin',
    },
    {
        title: 'Settings',
        icon: <SettingIcon />,
        to: '/setting',
    },
    ...CLIENT_MENU,
    {
        title: 'Log out',
        icon: <SingInIcon />,
        to: '/foryou',
        separate: true,
    },
];

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link className={cx('logo')} to={routesConfig.home}>
                    <img src={images.logo.default} alt="Tiktok" />
                </Link>
                <Search />
                <Action clientMenu={CLIENT_MENU} userMenu={USER_MENU} />
            </div>
        </div>
    );
}

export default Header;
