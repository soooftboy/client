import React from 'react';
import { MyMusicLinks } from '../components';
import { Link } from 'react-router-dom';

const MyTracks = () => {
    return (
        <main className='my-songs-page'>
            <section className='my-music'>
                {/*<MyMusicLinks />*/}
                <div className='my-music__info'>
                    <h2 className='my-music__title section__title'>Моя музыка</h2>
                    <ul className='my-music__links'>
                        <li className='my-music__item'>
                            <Link to='/my/songs' className='my-music__link active'>Треки</Link>
                        </li>
                        <li className='my-music__item'>
                            <Link to='/my/playlists' className='my-music__link'>Плейлисты</Link>
                        </li>
                        <li className='my-music__item'>
                            <Link to='/my/albums' className='my-music__link'>Альбомы</Link>
                        </li>
                        <li className='my-music__item'>
                            <Link to='/my/authors' className='my-music__link'>Исполнители</Link>
                        </li>
                    </ul>
                </div>
                <div className='songs'>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album025.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Прощание</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                    <a href='#'>MONA</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>3:56</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album027.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Температура</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                    <a href='#'>polnalyubvi</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>3:17</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album022.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Отпускай</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>3:27</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/other-album006.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>больше не буду</h3>
                                <p className='song__authors'>
                                    <a href='#'>тринадцать карат</a>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>2:19</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album013.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Где ты</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>2:22</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album017.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Перезаряжай</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>3:10</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album025.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>За край</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>3:21</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album012.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Космос</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                    <a href='#'>Лали</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>3:31</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album004.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Демоны</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>3:24</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album023.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Я и одиночество</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>3:49</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album021.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Выдыхай</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                    <a href='#'>Zivert</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>4:01</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album003.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Не киряй</h3>
                                <p className='song__authors'>
                                    <a href='#'>МУККА</a>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>3:38</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album023.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Не виноваты планеты</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>3:00</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album025.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Вдох</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>3:43</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album002.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Красота</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>2:57</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album025.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Иду за тобой</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>2:35</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album016.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Вода</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                    <a href='#'>МУККА</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>3:13</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album023.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Слёзы на ветер</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>2:40</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album025.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Аутоагрессия</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                    <a href='#'>тринадцать карат</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>3:27</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album018.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Не выводи меня</h3>
                                <p className='song__authors'>
                                    <a href='#'>МУККА</a>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>2:40</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album025.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Кристаллические лярвы</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>3:43</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album026.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Kryptonite</h3>
                                <p className='song__authors'>
                                    <a href='#'>Call Me Karizma</a>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>2:48</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album020.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Вина</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>3:21</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album010.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Привычка</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>2:41</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album023.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Незаметно</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                    <a href='#'>LYRIQ</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>3:19</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album025.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Еле дыша</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                    <a href='#'>LYRIQ</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>3:09</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album018.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Весна</h3>
                                <p className='song__authors'>
                                    <a href='#'>МУККА</a>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>3:22</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album023.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Смыслы</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                    <a href='#'>Лали</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>2:38</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album023.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Бежим</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                    <a href='#'>Брутто</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>3:46</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album023.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Подозрительно</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>3:02</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album017.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Когда ты откроешь глаза</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>2:52</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album019.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Part of me</h3>
                                <p className='song__authors'>
                                    <a href='#'>Call Me Karizma</a>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>2:52</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album004.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Про любовь</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>2:16</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album017.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Театр теней</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>2:46</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album025.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Ненавижу быть собой</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>3:00</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album010.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Беги от меня</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>3:18</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album023.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Неважно</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>3:15</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album014.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Всё из-за тебя</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>2:50</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album024.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Перезимую</h3>
                                <p className='song__authors'>
                                    <a href='#'>Наша Таня</a>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>2:29</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/other-album002.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Кроме твоего лица</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                    <a href='#'>INSPACE</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>3:08</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/other-album005.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Fake Love</h3>
                                <p className='song__authors'>
                                    <a href='#'>Yanix</a>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>3:03</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album017.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>В кого ты влюблена</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>3:02</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album004.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Марафоны</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                    <a href='#'>Роки</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>2:27</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album025.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>На виду</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>2:34</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album025.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Слаб</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>3:06</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album023.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Мама мне страшно</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                    <a href='#'>тринадцать карат</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>3:04</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album017.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Отражения</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                    <a href='#'>SHENA?</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>3:03</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album010.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Проиграли</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                    <a href='#'>aikko</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>3:27</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album018.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Малолетки</h3>
                                <p className='song__authors'>
                                    <a href='#'>МУККА</a>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>3:40</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album011.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Если я умру</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>3:11</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album017.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Стекло</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                    <a href='#'>Masha Hima</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>2:53</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/other-album003.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Худшее во мне</h3>
                                <p className='song__authors'>
                                    <a href='#'>playingtheangel</a>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>2:45</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/other-album001.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Бедная юность</h3>
                                <p className='song__authors'>
                                    <a href='#'>playingtheangel</a>
                                    <a href='#'>Три дня дождя</a>
                                    <a href='#'>МУККА</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>3:27</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album004.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Скучно</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                    <a href='#'>playingtheangel</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>3:04</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album004.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Безразличие</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>2:57</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album004.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Осень и алкоголь</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>3:12</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album010.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Девочка эконом вариант</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                    <a href='#'>Роки</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>2:57</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album004.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Малышка рок-н-ролл</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>3:29</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album023.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Сегодня</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>1:24</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album004.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Слабый человек</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>2:50</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album005.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Мои друзья</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>3:32</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album010.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Фелида</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>3:06</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album006.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Bye-Bye</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>2:34</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album004.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Прогулка</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>3:26</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album008.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Траблы</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                    <a href='#'>lowlife</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>2:59</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album004.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Флешмоб</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>2:20</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album023.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Реки растают <span
                                    className='song__name_secondary'>Instrumental</span></h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>3:41</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album004.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Твоя постель</h3>
                                <p className='song__authors'>
                                    <a href='#'>Три дня дождя</a>
                                    <a href='#'>РЭЙДИ</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>2:55</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album015.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Милая девочка <span className='song__name_secondary'>Три дня дождя Remix</span>
                                </h3>
                                <p className='song__authors'>
                                    <a href='#'>Roma Smile</a>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>3:18</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/album001.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Не стой на ветру</h3>
                                <p className='song__authors'>
                                    <a href='#'>Сантос</a>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>3:37</div>
                    </div>
                    <div className='song'>
                        <div className='song__song'>
                            <div className='song__control'>
                                <div className='song__play song-button-play'>
                                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_197_162)'>
                                            <path
                                                d='M28 14.7679C29.3333 15.5378 29.3333 17.4622 28 18.232L9.25 29.0574C7.91666 29.8272 6.25 28.8649 6.25 27.3253L6.25 5.67468C6.25 4.13508 7.91667 3.17283 9.25 3.94263L28 14.7679Z'
                                                fill='#FF3D6A' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_197_162'>
                                                <rect width='33' height='33' fill='white' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img src={require('../assets/img/authors/three-days-rain/all-songs/other-album004.png')}
                                 alt='song'
                                 className='song__image' />
                            <div className='song__info'>
                                <h3 className='song__name'>Sk8er Boi</h3>
                                <p className='song__authors'>
                                    <a href='#'>K8MAFFIN</a>
                                    <a href='#'>Три дня дождя</a>
                                </p>
                            </div>
                        </div>
                        <div className='song__time'>3:17</div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MyTracks;