import { useState, useRef, useEffect } from 'react';

import VideoItem from '~/components/Items/VideoItem/VideoItem';
import * as videoService from '~/services/videoService';

function Home() {
    const [videoList, setVideoList] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const result = await videoService.getVideo(Math.floor(Math.random() * 31));
            setVideoList([...result]);
        };
        fetchAPI();
    }, []);

    return (
        <div>
            {videoList.map((video) => {
                return <VideoItem videoInf={video} />;
            })}
        </div>
    );
}

export default Home;
