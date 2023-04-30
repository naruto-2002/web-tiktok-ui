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
                src="https://printgo.vn/uploads/media/814080/anh-lisa-13_1668828972.jpg"
                alt="error"
            ></img>
            <div className={cx('info')}>
                <div className={cx('name')}>
                    <h4>lisa*@*^.^*@*</h4>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </div>
                <span className={cx('username')}>Lisa</span>
            </div>
        </div>
    );
}

export default AccountItem;
