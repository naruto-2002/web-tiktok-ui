import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    function handleChange() {
        console.log();
    }

    return (
        <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to} onClick={onClick} onChange={handleChange}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
