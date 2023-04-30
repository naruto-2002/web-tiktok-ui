import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faEllipsisVertical,
    faKeyboard,
    faLanguage,
    faMagnifyingGlass,
    faMoon,
    faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import styles from './Hedaer.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccoutItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        title: 'English',
        icon: <FontAwesomeIcon icon={faLanguage} />,
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
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        to: '/feedbalck',
    },
    {
        title: 'Keyboard shortcuts',
        icon: <FontAwesomeIcon icon={faKeyboard} />,
    },
    {
        title: 'Dark mode',
        icon: <FontAwesomeIcon icon={faMoon} />,
    },
];

function Header() {
    const [visible, setVisible] = useState([]);

    const search = useRef();
    const searchBtn = useRef();

    useEffect(() => {
        setTimeout(() => {
            setVisible([]);
        }, 0);
    }, []);

    const handleFocusSearch = (e) => {
        search.current.classList.add(cx('border'));
    };

    const handleBlurSearch = (e) => {
        search.current.classList.remove(cx('border'));
    };

    const handleFocusSearchBtn = (e) => {
        e.stopPropagation();
    };

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo.default} alt="Tiktok" />
                <Tippy
                    interactive
                    visible={visible.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Account</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')} ref={search} onFocus={handleFocusSearch} onBlur={handleBlurSearch}>
                        <input placeholder="Search" spellCheck={false} />

                        <button className={cx('clear')}>
                            <FontAwesomeIcon className={cx('clear-icon')} icon={faCircleXmark} />
                        </button>

                        {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

                        <button className={cx('search-btn')} ref={searchBtn} onFocus={handleFocusSearchBtn}>
                            <FontAwesomeIcon className={cx('search-btn-icon')} icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <Button text medium leftIcon={<FontAwesomeIcon icon={faPlus} />} className={cx('upload')}>
                        Upload
                    </Button>
                    <Button primary medium>
                        Log in
                    </Button>
                    <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon className={cx('more-btn-icon')} icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;
