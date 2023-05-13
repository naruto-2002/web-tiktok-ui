import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Hedaer.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import {
    BoardIcon,
    CoinIcon,
    InboxIcon,
    LanguageIcon,
    MessageIcon,
    MoonIcon,
    QuestionIcon,
    SettingIcon,
    SingInIcon,
    UserIcon,
} from '~/components/Icons';
import Search from '../Search';
import { Link } from 'react-router-dom';
import routesConfig from '~/config/routes';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        title: 'English',
        icon: <LanguageIcon />,
        children: {
            title: 'Languge',
            data: [
                {
                    code: 'eng',
                    title: 'English',
                },
                {
                    code: 'vie',
                    title: 'Tiếng Việt',
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

const userMenu = [
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
    ...MENU_ITEMS,
    {
        title: 'Log out',
        icon: <SingInIcon />,
        to: '/foryou',
        separate: true,
    },
];

function Header() {
    const currentUser = true;

    let menu = MENU_ITEMS;

    if (currentUser) {
        menu = userMenu;
    }

    function handleMenuChange(menuItem) {
        console.log(menuItem);
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link className={cx('logo')} to={routesConfig.home}>
                    <img src={images.logo.default} alt="Tiktok" />
                </Link>

                <Search />

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Button text medium leftIcon={<FontAwesomeIcon icon={faPlus} />} className={cx('upload')}>
                                Upload
                            </Button>
                            <Tippy content="Messages" placement="bottom">
                                <button className={cx('action__btn-message')}>
                                    <MessageIcon className={cx('icon-message')} />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom">
                                <button className={cx('action__btn-inbox')}>
                                    <InboxIcon className={cx('icon-inbox')} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text medium leftIcon={<FontAwesomeIcon icon={faPlus} />} className={cx('upload')}>
                                Upload
                            </Button>
                            <Button primary medium>
                                Log in
                            </Button>
                        </>
                    )}

                    <Menu items={menu} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://printgo.vn/uploads/media/814080/anh-lisa-13_1668828972.jpg"
                                alt="Lisa"
                                fallback="https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon className={cx('more-btn-icon')} icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;
