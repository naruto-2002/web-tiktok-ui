import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Header({ title, onBack }) {
    return (
        <div className={cx('menu__header-wrapper')}>
            <button className={cx('menu__back-btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h3 className={cx('menu__header-title')}>{title}</h3>
        </div>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
};

export default Header;
