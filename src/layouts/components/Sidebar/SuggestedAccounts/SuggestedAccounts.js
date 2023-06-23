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
    const [seeAll, setSeeAll] = useState(false);
    const [accountCount, setAccountCount] = useState(accountsConfig.minShowSuggested);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getSuggestedAccount(accountCount);
            setAccounts(result);
        };
        fetchApi();
    }, [accountCount]);

    const handleSeeAll = () => {
        setSeeAll(!seeAll);
        setAccountCount(accountsConfig.maxShowSuggested);
    };

    const handleSeeLess = () => {
        setSeeAll(!seeAll);
        setAccountCount(accountsConfig.minShowSuggested);
    };

    return (
        <BorderTop className={cx('wrapper')}>
            <h3 className={cx('title')}>Suggested accounts</h3>
            {accounts && Array.isArray(accounts)
                ? accounts.map((account) => {
                      return (
                          <div className={cx('body')} key={account.id}>
                              <ShowFollow data={account} key={account.id}>
                                  <AccountItem suggestedAccount data={account} />
                              </ShowFollow>
                          </div>
                      );
                  }, [])
                : ''}
            <div className={cx('see-btn')}>
                {seeAll ? (
                    <span className={cx('see-less')} onClick={handleSeeLess}>
                        see less
                    </span>
                ) : (
                    <span className={cx('see-all')} onClick={handleSeeAll}>
                        see all
                    </span>
                )}
            </div>
        </BorderTop>
    );
}

export default SuggestedAccounts;
