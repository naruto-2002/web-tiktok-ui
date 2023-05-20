import classNames from 'classnames/bind';

import styles from './VideoItem.module.scss';
import Image from '~/components/Image/Image';
import Button from '~/components/Button/Button';
import { VideoItemControl } from './VideoItemControl';
import { CommentIcon, HeartIcon, MusicIcon, ShareIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function VideoItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a1103cb2b5e981868d7658b0b91265e4~c5_100x100.jpeg?x-expires=1684594800&x-signature=MVoJbZRl1QzPqoxD8YV4XjmDCXo%3D"
            />

            <div className={cx('container')}>
                <div className={cx('header')}>
                    <div className={cx('user-info')}>
                        <span className={cx('nickname')}>chanz.1th5</span>
                        <span className={cx('name')}>Chanz</span>
                    </div>
                    <Button className={cx('follow-btn')} outline small>
                        Follow
                    </Button>
                </div>
                <div className={cx('description')}>
                    <span>“Mùa hè này đã trở thành mùa hè năm đó, sau nhiều năm…”.</span>
                    {/* <a className={cx('hastag')} href="#">
                        #Tiktok
                    </a> */}
                </div>
                <a className={cx('music-info')} href="#">
                    <MusicIcon className={cx('music-icon')} />
                    Music EDM
                </a>
                <div className={cx('body')}>
                    <VideoItemControl />
                    <div className={cx('interactive-space')}>
                        <div className={cx('interactive-item')}>
                            <button className={cx('interactive-btn')}>
                                <HeartIcon className={cx('icon')} />
                            </button>
                            <strong className={cx('icon-count')}>100</strong>
                        </div>
                        <div className={cx('interactive-item')}>
                            <button className={cx('interactive-btn')}>
                                <CommentIcon className={cx('icon')} />
                            </button>
                            <strong className={cx('icon-count')}>100</strong>
                        </div>
                        <div className={cx('interactive-item')}>
                            <button className={cx('interactive-btn')}>
                                <ShareIcon className={cx('icon')} />
                            </button>
                            <strong className={cx('icon-count')}>100</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoItem;
