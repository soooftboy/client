import React from 'react';
import { ReactComponent as ButtonPlay } from '../assets/img/icons/button-play.svg';
import { ReactComponent as ButtonPause } from '../assets/img/icons/button-pause.svg';
import '../scss/components/playerbar.scss';
import { usePlayer } from '../hooks';

const Playerbar = ({ url }) => {
    const [trackIndex,
        trackProgress,
        setTrackProgress,
        volumeValue,
        setVolumeValue,
        currTime,
        setCurrTime,
        duration,
        audioRef,
        isPlaying,
        setIsPlaying,
        imageUrl,
        name,
        authors,
        prevSong,
        nextSong] = usePlayer();

    const togglePlaying = () => setIsPlaying(!isPlaying);
    const volume = React.useRef();

    // const volumeProgressWidth = `calc((${+volume.current.value}% / 40) * 100)`;
    const [visibleVolume, setVisibleVolume] = React.useState(false);

    const trackInput = React.useRef(null);

    React.useEffect(() => {
        volume.current.value = 20;
    }, [volume]);

    return (
        <div className='player-bar'>
            <div className='player-bar__song'>
                <img src={require(`../assets/img/recommendations/recommendation${imageUrl}.png`)} alt='Song Cover'
                     className='player-bar__cover' />
                <div className='player-bar__info'>
                    <h3 className='player-bar__name'>{name}</h3>
                    <p className='player-bar__authors'>
                        {
                            authors.map(obj => <a key={obj.name} title={obj.name} href={obj.link}>{obj.name}</a>)
                        }
                    </p>
                </div>
            </div>
            <div className='player-bar__center'>
                <div className='player-bar__control'>
                    <button
                        onClick={prevSong}
                        id='player-bar-prev' className='player-bar__button player-bar__prev'>
                        <svg width='25' height='25' viewBox='0 0 25 25' fill='none'
                             xmlns='http://www.w3.org/2000/svg'>
                            <path fillRule='evenodd' clipRule='evenodd'
                                  d='M13.2353 18.6872C13.2353 19.4924 12.3323 19.9674 11.6688 19.5112L1.47059 12.5L11.6688 5.48873C12.3323 5.03257 13.2353 5.50759 13.2353 6.31277L13.2353 12.5V18.6872ZM13.2353 12.5L23.4335 5.48873C24.097 5.03257 25 5.50759 25 6.31277L25 18.6872C25 19.4924 24.097 19.9674 23.4335 19.5112L13.2353 12.5ZM1.47059 12.5L1.47059 19.8529C1.47059 20.259 1.14139 20.5882 0.735295 20.5882C0.329203 20.5882 -3.55017e-08 20.259 0 19.8529L1.28563e-06 5.14704C1.32113e-06 4.74095 0.329204 4.41174 0.735296 4.41174C1.14139 4.41174 1.47059 4.74095 1.47059 5.14704L1.47059 12.5Z'
                                  fill='#FF3D6A' />
                        </svg>
                    </button>
                    <button onClick={togglePlaying} id='player-bar-play'
                            className='player-bar__button player-bar__play'>
                        {isPlaying ? <ButtonPause /> : <ButtonPlay />}
                    </button>
                    <button
                        onClick={nextSong}
                        id='player-bar-next' className='player-bar__button player-bar__next'>
                        <svg width='26' height='25' viewBox='0 0 26 25' fill='none'
                             xmlns='http://www.w3.org/2000/svg'>
                            <path fillRule='evenodd' clipRule='evenodd'
                                  d='M0.529419 6.31277C0.529419 5.50759 1.43245 5.03257 2.09595 5.48873L12.2941 12.5L2.09595 19.5112C1.43245 19.9674 0.529419 19.4924 0.529419 18.6872V6.31277ZM24.0588 12.5L13.8607 19.5112C13.1972 19.9674 12.2941 19.4924 12.2941 18.6872V12.5V6.31277C12.2941 5.50759 13.1972 5.03257 13.8607 5.48873L24.0588 12.5ZM24.0588 12.5V5.14704C24.0588 4.74095 24.388 4.41174 24.7941 4.41174C25.2002 4.41174 25.5294 4.74095 25.5294 5.14704V19.8529C25.5294 20.259 25.2002 20.5882 24.7941 20.5882C24.388 20.5882 24.0588 20.259 24.0588 19.8529V12.5Z'
                                  fill='#FF3D6A' />
                        </svg>
                    </button>
                </div>
                <div className='track'>
                    <span className='track__current track__time'>{currTime ? currTime : '0:00'}</span>
                    <span className='track__duration track__time'>{duration}</span>
                    <input
                        ref={trackInput}
                        className='track__input'
                        type='range'
                        min='0'
                        max={Math.round(audioRef.current.duration)}
                        value={trackProgress}
                        onInput={
                            (e) => {
                                audioRef.current.currentTime = e.target.value;

                                audioRef.current.pause();

                                const min = Math.floor(Math.round(audioRef.current.currentTime) / 60);
                                const sec = Math.round(Math.round(audioRef.current.currentTime) % 60);
                                const secRemain = sec.toString().length === 1 ? `0${sec}` : sec;

                                setCurrTime(`${min}:${secRemain}`);
                                setTrackProgress(audioRef.current.currentTime);
                            }
                        }
                        onMouseUp={() => {
                            if (isPlaying) {
                                audioRef.current.play();
                            }
                        }}
                        name='track'
                        id='player-bar-track-input'
                        step='1'
                    />
                    <label className='dn' htmlFor='player-bar-track-input'></label>
                </div>
            </div>
            <div className='volume'
                 onMouseEnter={() => {
                     setVisibleVolume(true);
                 }}
                 onMouseLeave={() => {
                     setVisibleVolume(false);
                 }}
            >
                <button id='player-bar-mute' className='volume__mute'>
                    {
                        volumeValue > 0 ?
                            (<svg className='player-bar-mute-off' width='24' height='24' viewBox='0 0 24 24' fill='none'
                                  xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M10.875 19.5C10.6354 19.5 10.402 19.4231 10.2094 19.2807C10.1987 19.2732 10.1883 19.2652 10.1784 19.2567L5.895 15.75H2.625C2.32663 15.75 2.04048 15.6315 1.8295 15.4205C1.61853 15.2095 1.5 14.9234 1.5 14.625V9.37503C1.5 9.07666 1.61853 8.79051 1.8295 8.57954C2.04048 8.36856 2.32663 8.25003 2.625 8.25003H5.89453L10.1775 4.74331C10.1874 4.73483 10.1977 4.72685 10.2084 4.71941C10.376 4.59618 10.5744 4.52181 10.7817 4.50455C10.9889 4.4873 11.1969 4.52783 11.3825 4.62166C11.5681 4.71548 11.7241 4.85893 11.8331 5.03605C11.9421 5.21318 11.9999 5.41705 12 5.62503V18.375C12 18.6734 11.8815 18.9595 11.6705 19.1705C11.4595 19.3815 11.1734 19.5 10.875 19.5ZM15 15.75C14.872 15.75 14.7462 15.7172 14.6344 15.6548C14.5227 15.5924 14.4288 15.5024 14.3617 15.3935C14.2945 15.2845 14.2564 15.1602 14.2509 15.0323C14.2453 14.9045 14.2726 14.7773 14.3302 14.663C14.775 13.7785 15.0005 12.8817 15.0005 12C15.0005 11.0916 14.782 10.2216 14.3325 9.34081C14.2464 9.16413 14.233 8.96071 14.2954 8.77431C14.3577 8.5879 14.4907 8.43342 14.6658 8.3441C14.8409 8.25477 15.0441 8.23775 15.2316 8.29669C15.4191 8.35563 15.5759 8.48582 15.6684 8.65925C16.2277 9.75565 16.5 10.8488 16.5 12C16.5 13.1185 16.2187 14.2411 15.6703 15.3371C15.6078 15.4613 15.5121 15.5656 15.3937 15.6386C15.2753 15.7115 15.139 15.7501 15 15.75Z'
                                    fill='#FF3D6A' />
                                {
                                    volumeValue > 14 &&
                                    (
                                        <path className='player-bar-mute-wave-two'
                                              d='M17.25 18C17.1184 18 16.989 17.9654 16.875 17.8996C16.761 17.8338 16.6662 17.7391 16.6004 17.6251C16.5346 17.511 16.4999 17.3817 16.4999 17.25C16.4999 17.1184 16.5345 16.989 16.6004 16.875C17.4868 15.3323 18 14.0395 18 12C18 9.92952 17.4877 8.64562 16.6022 7.1278C16.5051 6.95616 16.4795 6.75318 16.531 6.5628C16.5824 6.37242 16.7068 6.20997 16.8772 6.11062C17.0475 6.01127 17.2501 5.98301 17.4412 6.03196C17.6322 6.08092 17.7963 6.20314 17.8979 6.37218C18.8869 8.06765 19.5 9.60046 19.5 12C19.5 14.3639 18.8879 15.9042 17.9002 17.625C17.8343 17.7391 17.7395 17.8338 17.6254 17.8997C17.5113 17.9655 17.3818 18.0001 17.25 18Z'
                                              fill='#FF3D6A' />
                                    )
                                }

                                {
                                    volumeValue > 27 &&
                                    (
                                        <path className='player-bar-mute-wave-one'
                                              d='M19.5 20.25C19.3649 20.2499 19.2324 20.2133 19.1164 20.1442C19.0004 20.075 18.9052 19.9758 18.8409 19.857C18.7767 19.7382 18.7456 19.6043 18.7512 19.4693C18.7567 19.3344 18.7985 19.2035 18.8723 19.0903C20.1492 17.1314 21 15.1763 21 12C21 8.88282 20.1478 6.90845 18.8676 4.9036C18.8146 4.8205 18.7785 4.72777 18.7613 4.63072C18.7442 4.53366 18.7463 4.43417 18.7676 4.33793C18.7889 4.24169 18.8289 4.15058 18.8854 4.06982C18.9419 3.98905 19.0137 3.9202 19.0968 3.8672C19.1799 3.8142 19.2727 3.77808 19.3697 3.76092C19.4668 3.74375 19.5663 3.74588 19.6625 3.76716C19.7588 3.78845 19.8499 3.82848 19.9306 3.88497C20.0114 3.94147 20.0802 4.01331 20.1333 4.09642C21.5536 6.32298 22.5 8.51907 22.5 12C22.5 15.0352 21.8128 17.3264 20.1281 19.9097C20.06 20.0142 19.9668 20.1 19.8572 20.1594C19.7475 20.2189 19.6247 20.25 19.5 20.25Z'
                                              fill='#FF3D6A' />
                                    )
                                }
                            </svg>)
                            :
                            (<svg className='player-bar-mute-on' width='24' height='24' viewBox='0 0 24 24'
                                  fill='none'
                                  xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M10.875 19.5C10.6354 19.5 10.402 19.4231 10.2094 19.2807C10.1987 19.2732 10.1883 19.2652 10.1784 19.2567L5.895 15.75H2.625C2.32663 15.75 2.04048 15.6315 1.8295 15.4205C1.61853 15.2095 1.5 14.9234 1.5 14.625V9.37503C1.5 9.07666 1.61853 8.79051 1.8295 8.57954C2.04048 8.36856 2.32663 8.25003 2.625 8.25003H5.89453L10.1775 4.74331C10.1874 4.73483 10.1977 4.72685 10.2084 4.71941C10.376 4.59618 10.5744 4.52181 10.7817 4.50455C10.9889 4.4873 11.1969 4.52783 11.3825 4.62166C11.5681 4.71548 11.7241 4.85893 11.8331 5.03605C11.9421 5.21318 11.9999 5.41705 12 5.62503V18.375C12 18.6734 11.8815 18.9595 11.6705 19.1705C11.4595 19.3815 11.1734 19.5 10.875 19.5Z'
                                    fill='#FF3D6A' />
                                <rect x='13.9268' y='9.23743' width='1.5' height='10' rx='0.75'
                                      transform='rotate(-45 13.9268 9.23743)' fill='#FF3D6A' />
                                <rect x='20.9978' y='8.17676' width='1.5' height='10' rx='0.75'
                                      transform='rotate(45 20.9978 8.17676)' fill='#FF3D6A' />
                            </svg>)
                    }
                </button>
                <div className={`volume__track ${visibleVolume ? 'volume-open' : ''}`} id='volume-track'>
                    <div className='volume__inner'>
                        <input ref={volume} className='volume__input' type='range' name='volume'
                               id='player-bar-volume-input'
                               min='0' max='40' step='0.4'
                               onInput={(e) => {
                                   audioRef.current.volume = +e.target.value / 100;
                                   setVolumeValue(+e.target.value);
                               }} />
                        <div className='volume__progress' id='player-bar-volume-progress'
                             style={{ width: `calc((${volumeValue}% / 40) * 100)` }}
                        ></div>
                        <label className='dn' htmlFor='player-bar-volume-input'></label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Playerbar;