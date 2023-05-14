import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './ShowFollow.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function ShowFollow({ children, data }) {
    const handleRender = () => {
        return (
            <PopperWrapper className={cx('wrapper')}>
                <div className={cx('header')}>
                    <Image
                        className={cx('avatar')}
                        src={data.avatar}
                        alt="error"
                        fallback="https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg"
                    ></Image>
                    <Button className={cx('follow-btn')} primary medium>
                        {'Follow'}
                    </Button>
                </div>
                <div className={cx('body')}>
                    <div className={cx('name')}>
                        <h4>{data.nickname}</h4>
                        {data.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />}
                    </div>
                    <span className={cx('username')}>{data.full_name || `${data.first_name} ${data.last_name}`}</span>
                    <p className={cx('analytical')}>
                        <strong className={cx('value')}>{data.followings_count}</strong>
                        <label className={cx('label')}>Follow</label>
                        <strong className={cx('value')}>{data.likes_count}</strong>
                        <label className={cx('label')}>Like</label>
                    </p>
                </div>
            </PopperWrapper>
        );
    };

    return (
        <Tippy interactive offset={[5, -2]} placement="bottom" delay={[1200, 500]} render={handleRender}>
            <div>{children}</div>
        </Tippy>
    );
}

export default ShowFollow;
