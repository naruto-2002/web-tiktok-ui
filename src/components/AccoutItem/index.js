import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/79956e8c3f62b139f4bef013c70c196f.jpeg?biz_tag=tiktok_user.user_cover&x-expires=1682622000&x-signature=dkrRdlT1TZ23pKgXLRhGiTwE%2BPo%3D"
                alt="error"
            ></img>
            <div className={cx('info')}>
                <div className={cx('name')}>
                    <h4>AA@@**</h4>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </div>
                <span className={cx('username')}>Nguyen Van A</span>
            </div>
        </div>
    );
}

export default AccountItem;
