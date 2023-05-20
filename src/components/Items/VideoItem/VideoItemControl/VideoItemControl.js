import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';

import styles from './VideoItemControl.module.scss';
import { MuteIcon, PauseIcon, SoundIcon, UnpauseIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function VideoItemControl() {
    const [isPlaying, setIsPlaying] = useState(true);
    const [isSounding, setIsSounding] = useState(false);
    const [inputValue, setInputValue] = useState(0);
    const videoRef = useRef();
    const sliderRef = useRef();
    const inputRef = useRef();

    //Xử lý chỉ một lần sau khi component đc mount
    useEffect(() => {
        videoRef.current.volume = 0;
        sliderRef.current.style.width = 0 + 'px';
        inputRef.value = 0;
    }, []);

    //Xử lý khi biến phụ thuộc thay đổi sau khi component đc mount
    useEffect(() => {
        isPlaying ? videoRef.current.play() : videoRef.current.pause();
    }, [isPlaying]);

    useEffect(() => {
        isSounding ? (videoRef.current.volume = inputValue / 100) : (videoRef.current.volume = 0);
    }, [isSounding]);

    //Xử lý đk tắt bât video
    const handlePlay = () => {
        setIsPlaying(!isPlaying);
    };

    //Xử lý đk tắt bật âm thanh
    const handleVolume = () => {
        setIsSounding(!isSounding);
        // Xủ lý đưa về mặc định khi bật/tắt âm thanh
        if (!isSounding && inputValue < 3) {
            defaultOnState();
        } else if (isSounding && inputValue >= 3) {
            defaultOffState();
        }
    };

    //Xử lý thay đổi độ dài thanh slider và âm lượng
    const handleVolumeChange = () => {
        setInputValue(inputRef.current.value);
        inputRef.current.value < 3 ? setIsSounding(false) : setIsSounding(true);
        sliderRef.current.style.width = Math.floor((inputValue * 48) / 100) - 12 + 'px';
        videoRef.current.volume = inputValue / 100;
    };

    const defaultOnState = () => {
        setInputValue(50);
        videoRef.current.volume = 0.5;
        sliderRef.current.style.width = 18 + 'px';
        inputRef.value = 50;
    };

    const defaultOffState = () => {
        setInputValue(0);
        videoRef.current.volume = 0;
        sliderRef.current.style.width = 0 + 'px';
        inputRef.value = 0;
    };

    return (
        <div className={cx('wrapper')}>
            <video className={cx('video')} autoPlay audio="true" loop ref={videoRef}>
                <source src="https://files.fullstack.edu.vn/f8-tiktok/videos/2200-64625410ac0cb.mp4" />
            </video>
            <button className={cx('play-toggle')} onMouseDown={handlePlay}>
                {isPlaying ? <UnpauseIcon /> : <PauseIcon />}
            </button>
            <div className={cx('volume')}>
                <div className={cx('volume-control-space')}>
                    <div className={cx('slider')} ref={sliderRef}></div>
                    <input
                        type="range"
                        id="control-volume"
                        min="0"
                        max="100"
                        step="1"
                        value={inputValue}
                        ref={inputRef}
                        onChange={handleVolumeChange}
                    />
                </div>
                <button className={cx('volume-toggle')} onMouseDown={handleVolume}>
                    {isSounding ? <SoundIcon className={cx('sound-icon')} /> : <MuteIcon className={cx('mute-icon')} />}
                </button>
            </div>
        </div>
    );
}

export default VideoItemControl;
