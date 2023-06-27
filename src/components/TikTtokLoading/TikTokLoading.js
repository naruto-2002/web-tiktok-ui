import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import styles from './TikTokLoading.module.scss';
import BorderTop from '../BorderTop/BorderTop';

const cx = classNames.bind(styles);

function TikTokLoading() {
    return (
        <BorderTop className={cx('wrapper')}>
            <div id={cx('loader')}>
                <FontAwesomeIcon icon={faSpinner} className={cx('loader-icon')} />
            </div>
        </BorderTop>
    );
}

export default TikTokLoading;
