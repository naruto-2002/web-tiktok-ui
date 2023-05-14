import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import styles from './SuggestedAccounts.module.scss';
import { getSuggestedAccount } from '~/services';
import accountsConfig from '~/config/accounts';
import { ShowAccounts } from '~/components/ShowAccounts';
import BorderTop from '~/components/BorderTop';

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
    console.log(accounts);
    return (
        <BorderTop className={cx('wrapper')}>
            <span className={cx('title')}> Suggested accounts</span>
            <ShowAccounts data={accounts} />
        </BorderTop>
    );
}

export default SuggestedAccounts;
