import styles from './Hedaer.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* logo */}
                {/* search */}
            </div>
        </div>
    );
}

export default Header;
