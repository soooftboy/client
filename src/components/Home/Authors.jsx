import React from 'react';
import { Author, PopularSong } from '../';
import { useResize } from '../../hooks';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const authors = {
    'authors': [
        {
            'id': 1,
            'imageUrl': '001',
            'name': 'Три дня дождя',
        },
        {
            'id': 2,
            'imageUrl': '002',
            'name': 'Playingtheangel',
        },
        {
            'id': 3,
            'imageUrl': '003',
            'name': 'тринадцать карат',
        },
        {
            'id': 4,
            'imageUrl': '004',
            'name': 'Lida',
        },
        {
            'id': 5,
            'imageUrl': '005',
            'name': 'pyrokinesis',
        },
        {
            'id': 6,
            'imageUrl': '006',
            'name': 'ЛСП',
        },
    ],
};

const Authors = ({ items }) => {
    const [countOfVisibleAuthors, setCountOfVisibleAuthors] = React.useState(6);
    const [isSlider, setIsSlider] = React.useState(false);
    const width = useResize();

    React.useEffect(() => {
        setCountOfVisibleAuthors(width <= 1361 ? 4 : 6);
        setIsSlider(width < 1070);
    }, [width]);

    const settings = {
        accessibility: false,
        draggable: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 300,
        arrows: false,
        responsive: [
            {
                breakpoint: 1109,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 995,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 911,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 723,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 547,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <div className='authors'>
            <Link to='/authors' className='section__top authors__top'>
                <div className='authors__info'>
                    <h2 className='section__title authors__title'>Топ исполнителей</h2>
                    <p className='section__subtitle authors__subtitle'>Популярные исполнители</p>
                </div>
                <a href='#' className='recommendations__more section__more'>
                    {
                        width > 530 && 'Смотреть больше'
                    }
                </a>
            </Link>
            {

                !isSlider ?
                    <div className='authors__grid'>
                        {
                            authors.authors.slice(0, countOfVisibleAuthors).map(obj => <Author key={obj.id} {...obj} />)
                        }
                    </div>
                    :
                    <Slider {...settings}>
                        {
                            authors.authors.map(obj => <Author key={obj.id} {...obj} />)
                        }
                    </Slider>
            }
        </div>
    );
};

export default Authors;