import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import styles from './Hedaer.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { Wrapper as PopingWrapper } from '~/components/Popping';
import AccountItem from '~/components/AccoutItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

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

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo.default} alt="Tiktok" />
                <Tippy
                    interactive
                    visible={visible.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopingWrapper>
                                <h4 className={cx('search-title')}>Account</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopingWrapper>
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
                    <Button text medium leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Upload
                    </Button>
                    <Button primary medium>
                        Log in
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Header;
