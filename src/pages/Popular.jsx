import React from 'react';
import { PopularSong } from '../components';

const popular = {
    'popular': [
        {
            'id': 1,
            'imageUrl': '001',
            'name': 'Зима в сердце',
            'authors': [
                {
                    'name': 'Моя Мишель',
                    'link': '#',
                },
            ],
            'duration': '4:05',
            'songUrl': '',
        },
        {
            'id': 2,
            'imageUrl': '002',
            'name': 'По Следам',
            'authors': [
                {
                    'name': 'ДЖЕЙЛО',
                    'link': '#',
                },
                {
                    'name': 'rapper sonah',
                    'link': '#',
                },
            ],
            'duration': '1:46',
            'songUrl': '',
        },
        {
            'id': 3,
            'imageUrl': '003',
            'name': 'Может просто',
            'authors': [
                {
                    'name': '17 SEVENTEEN',
                    'link': '#',
                },
            ],
            'duration': '2:06',
            'songUrl': '',
        },
        {
            'id': 4,
            'imageUrl': '004',
            'name': 'Втюрилась',
            'authors': [
                {
                    'name': 'Дора',
                    'link': '#',
                },
            ],
            'duration': '3:11',
            'songUrl': '',
        },
        {
            'id': 5,
            'imageUrl': '005',
            'name': 'Холодно',
            'authors': [
                {
                    'name': 'Кишлак',
                    'link': '#',
                },
            ],
            'duration': '3:20',
            'songUrl': '',
        },
        {
            'id': 6,
            'imageUrl': '006',
            'name': 'Dynamite',
            'authors': [
                {
                    'name': 'BTS',
                    'link': '#',
                },
            ],
            'duration': '3:19',
            'songUrl': '',
        },
        {
            'id': 7,
            'imageUrl': '007',
            'name': 'Реки растают',
            'authors': [
                {
                    'name': 'Три дня дождя',
                    'link': '#',
                },
            ],
            'duration': '3:41',
            'songUrl': '',
        },
        {
            'id': 8,
            'imageUrl': '008',
            'name': 'mp3',
            'authors': [
                {
                    'name': 'pyatno',
                    'link': '#',
                },
            ],
            'duration': '2:00',
            'songUrl': '',
        },
        {
            'id': 9,
            'imageUrl': '009',
            'name': 'Yeyo!',
            'authors': [
                {
                    'name': 'Шайни',
                    'link': '#',
                },
            ],
            'duration': '1:51',
            'songUrl': '',
        },
        {
            'id': 10,
            'imageUrl': '010',
            'name': 'Лицемер',
            'authors': [
                {
                    'name': 'DK',
                    'link': '#',
                },
            ],
            'duration': '2:37',
            'songUrl': '',
        },
        {
            'id': 11,
            'imageUrl': '011',
            'name': 'sweater holes',
            'authors': [
                {
                    'name': 'дипинс',
                    'link': '#',
                },
            ],
            'duration': '2:05',
            'songUrl': '',
        },
        {
            'id': 12,
            'imageUrl': '012',
            'name': 'Каждый из Дизайнеров',
            'authors': [
                {
                    'name': 'Pepel Nahudi',
                    'link': '#',
                },
                {
                    'name': 'xxxmanera',
                    'link': '#',
                },
            ],
            'duration': '2:16',
            'songUrl': '',
        },
        {
            'id': 13,
            'imageUrl': '013',
            'name': 'Кисти',
            'authors': [
                {
                    'name': 'uniqe',
                    'link': '#',
                },
                {
                    'name': 'nkeeei',
                    'link': '#',
                },
                {
                    'name': 'ARTEM SHILOVETS',
                    'link': '#',
                },
            ],
            'duration': '2:51',
            'songUrl': '',
        },
        {
            'id': 14,
            'imageUrl': '014',
            'name': 'Мне скучно жить',
            'authors': [
                {
                    'name': 'ЛСП',
                    'link': '#',
                },
                {
                    'name': 'Oxxxymiron',
                    'link': '#',
                },
            ],
            'duration': '3:51',
            'songUrl': '',
        },
        {
            'id': 15,
            'imageUrl': '015',
            'name': 'Calling U Back',
            'authors': [
                {
                    'name': 'ДЖЕЙЛО',
                    'link': '#',
                },
            ],
            'duration': '3:19',
            'songUrl': '',
        },
        {
            'id': 16,
            'imageUrl': '016',
            'name': 'The Marías',
            'authors': [
                {
                    'name': 'Heronwater',
                    'link': '#',
                },
            ],
            'duration': '2:52',
            'songUrl': '',
        },
        {
            'id': 17,
            'imageUrl': '017',
            'name': 'На виду',
            'authors': [
                {
                    'name': 'Три дня дождя',
                    'link': '#',
                },
            ],
            'duration': '2:34',
            'songUrl': '',
        },
    ],
};

const Popular = () => {
    // const [popular, setPopular] = React.useState([]);
    //
    // React.useEffect(() => {
    //     fetch('http://localhost:3000/db.json')
    //         .then(resp => resp.json())
    //         .then(json => {
    //             setPopular(json.popular);
    //         });
    // }, []);

    return (
        <main className='popular-page'>
            <section className='popular'>
                <div className='popular__info'>
                    <h2 className='popular__title section__title'>Популярное</h2>
                    <p className='popular__subtitle section__subtitle'>Треки, популярные на Absolute Music</p>
                </div>
                <div className='popular__list'>
                    {popular.popular.map(obj => <PopularSong key={obj.id} {...obj} />)}
                </div>
            </section>
        </main>
    );
};

export default Popular;