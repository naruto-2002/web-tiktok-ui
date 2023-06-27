import classNames from 'classnames/bind';

import styles from './BorderBottom.module.scss';

const cx = classNames.bind(styles);

function BorderBottom({ children, className }) {
    const classes = cx('wrapper', {
        [className]: className,
    });

    return <div className={classes}>{children}</div>;
}

export default BorderBottom;
