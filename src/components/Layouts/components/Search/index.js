import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState, useRef, useEffect } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccoutItem';
import styles from './Search.module.scss';
import { ClearIcon, LoadingIcon, SearchIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [searchShowResult, setSearchShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const search = useRef();
    const searchBtn = useRef();
    const inputRef = useRef();

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchValue('');
            setSearchResult([]);
            return;
        }

        setLoading(true);

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [searchValue]);

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

    return (
        <HeadlessTippy
            interactive
            visible={searchShowResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Account</h4>
                        {searchResult.map((result) => {
                            return <AccountItem data={result} key={result.id} />;
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
                    onChange={(e) => {
                        setSearchValue(e.target.value.trim());
                    }}
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
    );
}

export default Search;
