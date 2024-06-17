import React from 'react';
import { Playlist } from '../';
import { useResize } from '../../hooks';
import { Link } from 'react-router-dom';

const playlists = {
    'playlists': [
        {
            'id': 1,
            'imageUrl': '001',
            'name': 'Тэн',
        },
        {
            'id': 2,
            'imageUrl': '002',
            'name': 'Зецу',
        },
        {
            'id': 3,
            'imageUrl': '003',
            'name': 'Рэн',
        },
        {
            'id': 4,
            'imageUrl': '004',
            'name': 'Хацу',
        },
    ],
};

const Playlists = () => {
    const width = useResize();
    return (
        <div className='playlists'>
            <div className='section__top playlists__top'>
                <div className='playlists__info'>
                    <h2 className='section__title playlists__title'>Плейлисты</h2>
                    <p className='section__subtitle playlists__subtitle'>Собрано специально для вас</p>
                </div>
            </div>
            <div className='playlists__all'>
                {
                    playlists.playlists.slice(0, 5).map(obj => <Playlist key={obj.id} {...obj} />)
                }
            </div>
        </div>
    );
};

export default Playlists;