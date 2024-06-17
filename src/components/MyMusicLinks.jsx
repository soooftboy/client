import React from 'react';
import { Link } from 'react-router-dom';

const MyMusicLinks = () => {
    return (
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
    );
};

export default MyMusicLinks;