import PropTypes from 'prop-types';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);

const fncDefault = () => {};

function Menu({ children, items = [], onBack, hideOnClick = false, onChange = fncDefault }) {
    const [history, setHistory] = useState([{ data: items }]);
    const currentItem = history[history.length - 1];

    const renderItems = () => {
        return currentItem.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            if (!!currentItem.title) {
                                onChange({ ...item, type: currentItem.title });
                            }
                        }
                    }}
                />
            );
        }, []);
    };

    const handleBack = () => {
        if (history.length > 1) {
            setHistory((prev) => prev.splice(0, prev.length - 1));
        }
    };

    // Reset to first page
    const handleReset = () => {
        setHistory((prev) => prev.splice(0, 1));
    };

    return (
        <HeadlessTippy
            interactive
            offset={[10, 10]}
            delay={[0, 700]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && <Header title={currentItem.title} onBack={handleBack} />}
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHidden={handleReset}
        >
            {children}
        </HeadlessTippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array.isRequired,
    onBack: PropTypes.func,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
