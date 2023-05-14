import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Navigation.module.scss';

const cx = classNames.bind(styles);

function NavigationItem({ title, to, icon, activeIcon }) {
    const renderIcon = (isActive) => {
        return (
            <>
                <span className={cx('icon')}>{isActive ? activeIcon : icon}</span>
                <span className={cx('title')}>{title}</span>
            </>
        );
    };

    return (
        <NavLink
            className={(nav) => {
                return cx('menu-item', {
                    active: nav.isActive,
                });
            }}
            to={to}
            end
        >
            {({ isActive }) => renderIcon(isActive)}
        </NavLink>
    );
}

NavigationItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    activeIcon: PropTypes.node.isRequired,
};

export default NavigationItem;
