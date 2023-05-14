import classNames from 'classnames/bind';

import styles from './ShowAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function ShowAccounts({ data }) {
    return (
        <div className={cx('wrapper')}>
            {data.map((account) => {
                return <AccountItem data={account} key={account.id} />;
            })}
        </div>
    );
}

export default ShowAccounts;
