import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Navigation.module.scss';

const cx = classNames.bind(styles);

function Navigation({ children }) {
    return <nav className={cx('nav-list')}>{children}</nav>;
}

Navigation.propsTypes = {
    children: PropTypes.node.isRequired,
};

export default Navigation;
