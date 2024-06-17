import React from 'react';
import { Song } from '../';
import { useResize } from '../../hooks';
import { Link } from 'react-router-dom';

const recommendations = {
    'recommendations': [
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
            'duration': '3:32',
            'songUrl': 'aikko-dostojjno',
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
            'duration': '3:27',
            'songUrl': 'aikko-dostojjno',
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
            'duration': '2:52',
            'songUrl': 'aikko-dostojjno',
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
            'duration': '2:22',
            'songUrl': 'aikko-dostojjno',
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
            'duration': '4:27',
            'songUrl': 'aikko-dostojjno',
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
            'duration': '3:51',
            'songUrl': 'aikko-dostojjno',
        },
        {
            'id': 7,
            'imageUrl': '001',
            'name': 'достойно',
            'authors': [
                {
                    'name': 'aikko',
                    'link': '#',
                },
            ],
            'duration': '3:32',
            'songUrl': 'aikko-dostojjno',
        },
        {
            'id': 8,
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
            'duration': '3:27',
            'songUrl': 'aikko-dostojjno',
        },
        {
            'id': 9,
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
            'duration': '2:52',
            'songUrl': 'aikko-dostojjno',
        },
        {
            'id': 10,
            'imageUrl': '004',
            'name': 'запутанный мир',
            'authors': [
                {
                    'name': 'тринадцать карат',
                    'link': '#',
                },
            ],
            'duration': '2:22',
            'songUrl': 'aikko-dostojjno',
        },
        {
            'id': 11,
            'imageUrl': '005',
            'name': 'Стотысячекрылым',
            'authors': [
                {
                    'name': 'pyrokinesis',
                    'link': '#',
                },
            ],
            'duration': '4:27',
            'songUrl': 'aikko-dostojjno',
        },
        {
            'id': 12,
            'imageUrl': '006',
            'name': 'save that shit',
            'authors': [
                {
                    'name': 'lil peep',
                    'link': '#',
                },
            ],
            'duration': '3:51',
            'songUrl': 'aikko-dostojjno',
        },
        {
            'id': 13,
            'imageUrl': '001',
            'name': 'достойно',
            'authors': [
                {
                    'name': 'aikko',
                    'link': '#',
                },
            ],
            'duration': '3:32',
            'songUrl': 'aikko-dostojjno',
        },
        {
            'id': 14,
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
            'duration': '3:27',
            'songUrl': 'aikko-dostojjno',
        },
        {
            'id': 15,
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
            'duration': '2:52',
            'songUrl': 'aikko-dostojjno',
        },
        {
            'id': 16,
            'imageUrl': '004',
            'name': 'запутанный мир',
            'authors': [
                {
                    'name': 'тринадцать карат',
                    'link': '#',
                },
            ],
            'duration': '2:22',
            'songUrl': 'aikko-dostojjno',
        },
        {
            'id': 17,
            'imageUrl': '005',
            'name': 'Стотысячекрылым',
            'authors': [
                {
                    'name': 'pyrokinesis',
                    'link': '#',
                },
            ],
            'duration': '4:27',
            'songUrl': 'aikko-dostojjno',
        },
        {
            'id': 18,
            'imageUrl': '006',
            'name': 'save that shit',
            'authors': [
                {
                    'name': 'lil peep',
                    'link': '#',
                },
            ],
            'duration': '3:51',
            'songUrl': 'aikko-dostojjno',
        },
        {
            'id': 19,
            'imageUrl': '001',
            'name': 'достойно',
            'authors': [
                {
                    'name': 'aikko',
                    'link': '#',
                },
            ],
            'duration': '3:32',
            'songUrl': 'aikko-dostojjno',
        },
        {
            'id': 20,
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
            'duration': '3:27',
            'songUrl': 'aikko-dostojjno',
        },
        {
            'id': 21,
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
            'duration': '2:52',
            'songUrl': 'aikko-dostojjno',
        },
        {
            'id': 22,
            'imageUrl': '004',
            'name': 'запутанный мир',
            'authors': [
                {
                    'name': 'тринадцать карат',
                    'link': '#',
                },
            ],
            'duration': '2:22',
            'songUrl': 'aikko-dostojjno',
        },
        {
            'id': 23,
            'imageUrl': '005',
            'name': 'Стотысячекрылым',
            'authors': [
                {
                    'name': 'pyrokinesis',
                    'link': '#',
                },
            ],
            'duration': '4:27',
            'songUrl': 'aikko-dostojjno',
        },
        {
            'id': 24,
            'imageUrl': '006',
            'name': 'save that shit',
            'authors': [
                {
                    'name': 'lil peep',
                    'link': '#',
                },
            ],
            'duration': '3:51',
            'songUrl': 'aikko-dostojjno',
        },
    ],
};

const Recommendations = ({ items }) => {
    const [countOfElements, setCountOfElements] = React.useState(6);
    const width = useResize();

    React.useEffect(() => {
        setCountOfElements(width <= 616 ? 3 : 6);
    }, [width]);

    return (
        <div className='recommendations'>
            <Link to='/recommendations' className='section__top recommendations__top'>
                <div className='recommendations__info'>
                    <h2 className='section__title recommendations__title'>Рекомендации</h2>
                    <p className='section__subtitle recommendations__subtitle'>Подобрано под ваш вкус</p>
                </div>
                <a href='#' className='recommendations__more section__more'>
                    {
                        width > 530 && 'Смотреть больше'
                    }
                </a>
            </Link>
            <div className='recommendations__grid'>
                {
                    recommendations.recommendations.slice(0, countOfElements).map(obj => <Song key={obj.id} {...obj} />)
                }
            </div>
        </div>
    );
};

export default Recommendations;