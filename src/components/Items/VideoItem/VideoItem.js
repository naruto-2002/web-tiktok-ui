import classNames from 'classnames/bind';

import styles from './VideoItem.module.scss';
import Image from '~/components/Image/Image';
import Button from '~/components/Button/Button';
import { VideoItemControl } from './VideoItemControl';
import { CommentIcon, HeartIcon, MusicIcon, ShareIcon } from '~/components/Icons';
import BorderBottom from '~/components/BorderBottom';

const cx = classNames.bind(styles);

function VideoItem({ videoInf }) {
    return (
        <BorderBottom className={cx('wrapper')}>
            <Image className={cx('avatar')} src={videoInf.user.avatar} />

            <div className={cx('container')}>
                <div className={cx('header')}>
                    <div className={cx('user-info')}>
                        <span className={cx('nickname')}>{videoInf.user.nickname}</span>
                        <span className={cx('name')}>
                            {videoInf.user.first_name} {videoInf.user.last_name}
                        </span>
                    </div>
                    <Button className={cx('follow-btn')} outline small>
                        Follow
                    </Button>
                </div>
                <div className={cx('description')}>
                    <span>{videoInf.description}</span>
                    {/* <a className={cx('hastag')} href="#">
                        #Tiktok
                    </a> */}
                </div>
                <a className={cx('music-info')} href="#">
                    <MusicIcon className={cx('music-icon')} />
                    {videoInf.music}
                </a>
                <div className={cx('body')}>
                    <VideoItemControl videoPath={videoInf.file_url} />
                    <div className={cx('interactive-space')}>
                        <div className={cx('interactive-item')}>
                            <button className={cx('interactive-btn')}>
                                <HeartIcon className={cx('icon')} />
                            </button>
                            <strong className={cx('icon-count')}>{videoInf.likes_count}</strong>
                        </div>
                        <div className={cx('interactive-item')}>
                            <button className={cx('interactive-btn')}>
                                <CommentIcon className={cx('icon')} />
                            </button>
                            <strong className={cx('icon-count')}>{videoInf.comments_count}</strong>
                        </div>
                        <div className={cx('interactive-item')}>
                            <button className={cx('interactive-btn')}>
                                <ShareIcon className={cx('icon')} />
                            </button>
                            <strong className={cx('icon-count')}>{videoInf.shares_count}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </BorderBottom>
    );
}

export default VideoItem;
