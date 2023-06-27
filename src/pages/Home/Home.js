import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import VideoItem from '~/components/Items/VideoItem/VideoItem';
import * as videoService from '~/services/videoService';
import { InView } from 'react-intersection-observer';
import { TikTokLoading } from '~/components/TikTtokLoading';

const cx = classNames.bind(styles);

let pageList = [];

function Home() {
    const [videoList, setVideoList] = useState([]);
    const [currentPage, setCurrentPage] = useState(Math.ceil(Math.random() * 20));

    useEffect(() => {
        const fetchAPI = async () => {
            const result = await videoService.getVideo(currentPage);
            setVideoList([...videoList, ...result]);
        };
        fetchAPI();
    }, [currentPage]);

    const randomPage = () => {
        pageList.push(currentPage);
        if (pageList.length === 20) {
            pageList = [];
        }

        let tmp = currentPage;

        while (pageList.includes(tmp)) {
            tmp = Math.ceil(Math.random() * 20);
        }

        setCurrentPage(tmp);
    };

    const handleInView = (inView, event) => {
        if (inView) {
            randomPage();
        }
    };

    return (
        <div className={cx('wrapper')}>
            {videoList.map((video, index) => {
                return <VideoItem videoInf={video} key={index} />;
            })}
            <InView onChange={handleInView} threshold={0.8}>
                <TikTokLoading />
            </InView>
        </div>
    );
}

export default Home;
