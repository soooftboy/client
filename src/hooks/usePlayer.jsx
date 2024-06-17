import React from 'react';
import dostojjno from '../assets/media/aikko-dostojjno.mp3';
import bednaya_yunost from '../assets/media/playingtheangel_mukka_tri_dnya_dozhdya-bednaya_yunost.mp3';
import odnopolyarnosti from '../assets/media/mzlff_STEDD-odnopolyarnosti.mp3';
import zaputannyjj_mir from '../assets/media/trinadcat_karat-zaputannyjj_mir.mp3';
import stotysyachekrylym from '../assets/media/pyrokinesis-stotysyachekrylym.mp3';
import save_that_shit from '../assets/media/lil_peep-save_that_shit.mp3';

const UsePlayer = () => {
    const [queue, setQueue] = React.useState({
        songs: [
            {
                'id': 1,
                'imageUrl': '001',
                'name': 'достойно',
                'authors': [
                    {
                        'name': 'aikko',
                        'link': '#',
                    },
                ],
                'songUrl': dostojjno,
            },
            {
                'id': 2,
                'imageUrl': '002',
                'name': 'Бедная юность',
                'authors': [
                    {
                        'name': 'playingtheangel',
                        'link': '#',
                    },
                    {
                        'name': 'Три дня дождя',
                        'link': '#',
                    },
                    {
                        'name': 'МУККА',
                        'link': '#',
                    },
                ],
                'songUrl': bednaya_yunost,
            },
            {
                'id': 3,
                'imageUrl': '003',
                'name': 'однополярности',
                'authors': [
                    {
                        'name': 'mzlff',
                        'link': '#',
                    },
                    {
                        'name': 'STED.D',
                        'link': '#',
                    },
                ],
                'songUrl': odnopolyarnosti,
            },
            {
                'id': 4,
                'imageUrl': '004',
                'name': 'запутанный мир',
                'authors': [
                    {
                        'name': 'тринадцать карат',
                        'link': '#',
                    },
                ],
                'songUrl': zaputannyjj_mir,
            },
            {
                'id': 5,
                'imageUrl': '005',
                'name': 'Стотысячекрылым',
                'authors': [
                    {
                        'name': 'pyrokinesis',
                        'link': '#',
                    },
                ],
                'songUrl': stotysyachekrylym,
            },
            {
                'id': 6,
                'imageUrl': '006',
                'name': 'save that shit',
                'authors': [
                    {
                        'name': 'lil peep',
                        'link': '#',
                    },
                ],
                'songUrl': save_that_shit,
            },
        ],
    });


    const [trackIndex, setTrackIndex] = React.useState(0);
    const [trackProgress, setTrackProgress] = React.useState(0);
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [volumeValue, setVolumeValue] = React.useState(20);

    const { imageUrl, name, authors, songUrl } = queue.songs[trackIndex];

    const audioRef = React.useRef(new Audio(songUrl));
    const intervalRef = React.useRef();
    const isReady = React.useRef(false);

    const [currTime, setCurrTime] = React.useState('');
    const [duration, setDuration] = React.useState('');

    const startTimer = () => {
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            if (audioRef.current.ended) {
                nextSong();
            } else {
                const min = Math.floor(Math.round(audioRef.current.currentTime) / 60);
                const sec = Math.round(Math.round(audioRef.current.currentTime) % 60);
                const secRemain = sec.toString().length === 1 ? `0${sec}` : sec;

                setCurrTime(`${min}:${secRemain}`);

                setTrackProgress(audioRef.current.currentTime);
            }
        }, [1000]);
    };

    const prevSong = () => {
        if (audioRef.current.currentTime < 5) {
            let queueLength = queue.songs.length - 1;
            if (trackIndex > 0) {
                let tempTrackIndex = trackIndex - 1;
                setTrackIndex(tempTrackIndex);
            } else {
                setTrackIndex(queueLength);
            }
        }
        audioRef.current.currentTime = 0;
        setTrackProgress(0);
    };

    const nextSong = () => {
        audioRef.current.currentTime = 0;
        let queueLength = queue.songs.length - 1;
        if (trackIndex < queueLength) {
            let tempTrackIndex = trackIndex + 1;
            setTrackIndex(tempTrackIndex);
        } else {
            setTrackIndex(0);
        }
    };

    const [time, setTime] = React.useState({
        min: '',
        sec: '',
    });

    React.useEffect(() => {
        audioRef.current.pause();

        audioRef.current = new Audio(songUrl);
        setTrackProgress(0);
        setCurrTime('0:00');

        audioRef.current.onloadeddata = () => {
            if (isReady.current) {
                if (isPlaying === true) {
                    audioRef.current.play();
                    setIsPlaying(true);
                    startTimer();
                }
            } else {
                isReady.current = true;
            }

            audioRef.current.volume = volumeValue / 100;

            const sec = audioRef.current.duration;
            const min = Math.floor(sec / 60);
            const secRemain = Math.floor(sec % 60).toString() === 1 ? `0${Math.floor(sec % 60)}` : Math.floor(sec % 60);

            setDuration(`${min}:${secRemain}`);
        };

    }, [trackIndex]);

    React.useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
            startTimer();
        } else {
            audioRef.current.pause();
            clearInterval(intervalRef.current);
        }
    }, [isPlaying]);

    return [trackIndex, trackProgress, setTrackProgress, volumeValue, setVolumeValue, currTime, setCurrTime, duration, audioRef, isPlaying, setIsPlaying, imageUrl, name, authors, prevSong, nextSong, queue, setQueue];
};

export default UsePlayer;