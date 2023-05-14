import classNames from 'classnames/bind';

import styles from './LoginNotify.module.scss';
import Button from '~/components/Button';
import BorderTop from '~/components/BorderTop';

const cx = classNames.bind(styles);

function Login() {
    return (
        <BorderTop className={cx('login')}>
            <span className={cx('title')}>Log in to follow creators, like videos, and view comments.</span>
            <Button className={cx('login-btn')} outline large>
                Log in
            </Button>
        </BorderTop>
    );
}

export default Login;
