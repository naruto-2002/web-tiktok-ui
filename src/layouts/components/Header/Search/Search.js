import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState, useRef, useEffect } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/Items/AccountItem';
import styles from './Search.module.scss';
import { ClearIcon, LoadingIcon, SearchIcon } from '~/components/Icons';
import { useDebounce } from '~/hooks';
import * as searchService from '~/services/searchService';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [searchShowResult, setSearchShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const search = useRef();
    const searchBtn = useRef();
    const inputRef = useRef();

    const debounceValue = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debounceValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchService.search(debounceValue);
            setSearchResult(result);

            setLoading(false);
        };

        fetchApi();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounceValue]);

    const handleFocusSearch = (e) => {
        search.current.classList.add(cx('border'));
    };

    const handleBlurSearch = (e) => {
        search.current.classList.remove(cx('border'));
    };

    const handleFocusSearchBtn = (e) => {
        e.stopPropagation();
    };

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.value = '';
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setSearchShowResult(false);
    };

    const handleChange = (e) => {
        const regex = /^\S/;
        if (regex.test(e.target.value)) {
            setSearchValue(e.target.value);
        } else {
            setSearchValue('');
        }
    };

    return (
        // Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context. S
        <div>
            <HeadlessTippy
                interactive
                visible={searchShowResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Account</h4>
                            {searchResult.map((result) => {
                                return <AccountItem searchAccount data={result} key={result.id} />;
                            }, [])}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')} ref={search} onFocus={handleFocusSearch} onBlur={handleBlurSearch}>
                    <input
                        value={searchValue}
                        placeholder="Search"
                        spellCheck={false}
                        ref={inputRef}
                        onFocus={() => {
                            setSearchShowResult(true);
                        }}
                        onChange={handleChange}
                    />

                    {!!searchValue && !loading && (
                        <button className={cx('clear-btn')} onClick={handleClear}>
                            <ClearIcon className={cx('clear-icon')} />
                        </button>
                    )}

                    {loading && (
                        <div className={cx('loading')}>
                            <LoadingIcon className={cx('loading-icon')} />
                        </div>
                    )}

                    <button className={cx('search-btn')} ref={searchBtn} onFocus={handleFocusSearchBtn}>
                        <SearchIcon className={cx('search-btn-icon')} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
