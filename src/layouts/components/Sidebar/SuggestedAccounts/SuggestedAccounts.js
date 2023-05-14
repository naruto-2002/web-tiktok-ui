import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import styles from './SuggestedAccounts.module.scss';
import { getSuggestedAccount } from '~/services';
import accountsConfig from '~/config/accounts';
import BorderTop from '~/components/BorderTop';
import AccountItem from '~/components/Items/AccountItem/AccountItem';
import ShowFollow from './ShowFollow/ShowFollow';

const cx = classNames.bind(styles);

function SuggestedAccounts() {
    const [accounts, setAccounts] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await getSuggestedAccount(accountsConfig.defaultShowSuggested);
            setAccounts(result);
        };
        fetchApi();
    }, []);
    return (
        <BorderTop className={cx('wrapper')}>
            <span className={cx('title')}> Suggested accounts</span>
            {accounts.map((account) => {
                return (
                    <div className={cx('body')} key={account.id}>
                        <ShowFollow data={account} key={account.id}>
                            <AccountItem suggestedAccount data={account} />
                        </ShowFollow>
                    </div>
                );
            }, [])}
        </BorderTop>
    );
}

export default SuggestedAccounts;
