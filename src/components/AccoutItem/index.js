import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/profile/${data.nickname}`} className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src={data.avatar}
                alt="error"
                fallback="https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg"
            ></Image>
            <div className={cx('info')}>
                <div className={cx('name')}>
                    <h4>{data.nickname}</h4>
                    {data.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />}
                </div>
                <span className={cx('username')}>{data.full_name}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
