import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Action.module.scss';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import { InboxIcon, MessageIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Action({ clientMenu, userMenu }) {
    const currentUser = false;
    let menu = clientMenu;
    if (currentUser) {
        menu = userMenu;
    }

    function handleMenuChange(menuItem) {
        console.log(menuItem);
    }
    return (
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
    );
}

Action.propTypes = {
    clientMenu: PropTypes.array.isRequired,
    userMenu: PropTypes.array.isRequired,
};

export default Action;
