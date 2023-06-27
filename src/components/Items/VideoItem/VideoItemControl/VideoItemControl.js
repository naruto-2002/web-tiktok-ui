import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { InView } from 'react-intersection-observer';

import styles from './VideoItemControl.module.scss';
import { MuteIcon, PauseIcon, SoundIcon, UnpauseIcon } from '~/components/Icons';

const global = {
    isSounding: false,
    inputValue: 50,
};

const cx = classNames.bind(styles);

function VideoItemControl({ videoPath }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isSounding, setIsSounding] = useState(global.isSounding);
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
        videoRef.current.addEventListener('canplaythrough', () => {
            isPlaying ? videoRef.current.play() : videoRef.current.pause();
        });
    }, [isPlaying]);
    useEffect(() => {
        global.isSounding = isSounding;
        isSounding ? (videoRef.current.volume = inputValue / 100) : (videoRef.current.volume = 0);
    }, [isSounding]);

    // Reset lại video khi lướt trúng
    const handleInView = (inView) => {
        setIsPlaying(inView);
        videoRef.current.currentTime = 0;
        setIsSounding(global.isSounding);
        if (global.isSounding) {
            defaultOnState(global.inputValue);
        } else {
            defaultOffState();
        }
    };

    //Xử lý đk tắt bât video
    const handlePlay = () => {
        setIsPlaying(!isPlaying);
    };

    //Xử lý đk tắt bật âm thanh
    const handleVolume = () => {
        setIsSounding(!isSounding);
        // Xủ lý đưa về mặc định khi bật/tắt âm thanh
        if (!isSounding && inputValue < 3) {
            defaultOnState(global.inputValue);
        } else if (isSounding && inputValue >= 3) {
            defaultOffState();
        }
    };

    //Xử lý thay đổi độ dài thanh slider và âm lượng
    const handleVolumeChange = () => {
        setInputValue(inputRef.current.value);
        inputRef.current.value < 3 ? setIsSounding(false) : setIsSounding(true);
        sliderRef.current.style.width = Math.floor((inputValue * 36) / 100) + 'px';
        videoRef.current.volume = inputValue / 100;
        global.inputValue = inputValue;
    };

    const defaultOnState = (x = 50) => {
        setInputValue(x);
        videoRef.current.volume = x / 100;
        sliderRef.current.style.width = Math.floor((x * 36) / 100) + 'px';
        inputRef.value = x;
    };

    const defaultOffState = () => {
        setInputValue(0);
        videoRef.current.volume = 0;
        sliderRef.current.style.width = 0 + 'px';
        inputRef.value = 0;
    };

    return (
        <div className={cx('wrapper')}>
            <InView onChange={handleInView} threshold={0.8}>
                <video className={cx('video')} autoPlay audio="true" loop ref={videoRef}>
                    <source src={videoPath} />
                </video>
            </InView>
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
