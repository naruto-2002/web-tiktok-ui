import classNames from 'classnames/bind';

import styles from './BorderTop.module.scss';

const cx = classNames.bind(styles);

function BorderTop({ children, className }) {
    const classes = cx('wrapper', {
        [className]: className,
    });

    return <div className={classes}>{children}</div>;
}

export default BorderTop;
