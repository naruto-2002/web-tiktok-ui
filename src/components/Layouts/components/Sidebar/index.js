import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('side-bar')}>
                <ul className={cx('page-list')}>
                    <li className={cx('page-item')}>Sidebar</li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
