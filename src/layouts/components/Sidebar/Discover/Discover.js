import classNames from 'classnames/bind';

import styles from './Discover.module.scss';
import BorderTop from '~/components/BorderTop';
import Button from '~/components/Button';
import { MusicIcon, TagIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

const discoverListFake = [
    {
        type: 'hashtag',
        title: 'suthatla',
    },
    {
        type: 'hashtag',
        title: 'mackedoi',
    },
    {
        type: 'hashtag',
        title: 'sansangthaydoi',
    },

    {
        type: 'music',
        title: 'Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n',
    },
    {
        type: 'music',
        title: 'Thiên Thần Tình Yêu - RICKY STAR ạnd T.R.I',
    },
    {
        type: 'music',
        title: 'Anh Yêu Vội Thế (Mee Remix) - LaLa Trần, Mee Media',
    },
    {
        type: 'hashtag',
        title: '7749hieuung',
    },
    {
        type: 'hashtag',
        title: 'genzlife',
    },
    {
        type: 'music',
        title: 'Vui Lắm Nha (TikTok Remix 1) - Hương Ly & Jombie',
    },
    {
        type: 'music',
        title: 'Con Bướm Xuân (Remix) - Cukak & H2K & BHMedia',
    },
];

function Discover() {
    return (
        <BorderTop className={cx('wrapper')}>
            <h3 className={cx('title')}>Discover</h3>
            <section className={cx('content')}>
                {discoverListFake.map((disItem, index) => {
                    return (
                        <Button
                            className={cx('discover-item')}
                            key={index}
                            text
                            medium
                            rounded
                            leftIcon={disItem.type === 'hashtag' ? <TagIcon /> : <MusicIcon />}
                        >
                            {disItem.title}
                        </Button>
                    );
                }, [])}
            </section>
        </BorderTop>
    );
}

export default Discover;
