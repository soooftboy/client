import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import { Release } from '../';
import { useResize } from '../../hooks';

const Releases = ({ items }) => {
    const slider = React.useRef(null);
    const [slideIndex, setSlideIndex] = React.useState(0);
    const [numberOfScrolls, setNumberOfScrolls] = React.useState(5);
    const width = useResize();

    React.useEffect(() => {
        if (width > 1109) {
            setNumberOfScrolls(5);
        } else if (width <= 1109 && width > 995) {
            setNumberOfScrolls(6);
        } else if (width <= 995 && width > 911) {
            setNumberOfScrolls(5);
        } else if (width <= 911 && width > 723) {
            setNumberOfScrolls(6);
        } else if (width <= 723 && width > 547) {
            setNumberOfScrolls(7);
        } else if (width <= 547) {
            setNumberOfScrolls(8);
        }

    }, [width]);

    const settings = {
        infinite: false,
        accessibility: false,
        draggable: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 300,
        arrows: false,
        beforeChange: (index, next) => {
            setSlideIndex(next);
        },
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
        <div className='releases'>
            <div className='section__top releases__top'>
                <Link to='/releases' className='releases__info'>
                    <h2 className='section__title releases__title'>Новые релизы</h2>
                    <p className='section__subtitle releases__subtitle'>Новые треки и альбомы</p>
                </Link>
                <div className='releases__arrows'>
                    <button
                        onClick={() => slider?.current?.slickPrev()}
                        className={`releases__prev releases__arrow ${slideIndex === 0 ? 'slick-disabled' : ''}`}
                    >
                        <svg width='15' height='15' viewBox='0 0 15 15' fill='none'
                             xmlns='http://www.w3.org/2000/svg'>
                            <path d='M4 1L10.5 7.5L4 14' stroke='#FF3D6A' strokeWidth='2' strokeLinecap='round'
                                  strokeLinejoin='round' />
                        </svg>
                    </button>

                    <button
                        onClick={() => slider?.current?.slickNext()}
                        className={`releases__next releases__arrow ${slideIndex === numberOfScrolls ? 'slick-disabled' : ''}`}
                    >
                        <svg width='15' height='15' viewBox='0 0 15 15' fill='none'
                             xmlns='http://www.w3.org/2000/svg'>
                            <path d='M4 1L10.5 7.5L4 14' stroke='#FF3D6A' strokeWidth='2' strokeLinecap='round'
                                  strokeLinejoin='round' />
                        </svg>
                    </button>
                </div>
            </div>
            <div className='releases__slider'>
                <Slider ref={slider} {...settings}>
                    {
                        items.slice(0, 9).map(obj => <Release key={obj.id} {...obj} />)
                    }
                    <Link to='/releases' className='releases__look-more_link'>
                        <div className='releases__look-more'>
                            <span>Смотреть больше</span>
                            <svg width='35' height='35' viewBox='0 0 35 35' fill='none'
                                 xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M32.0834 17.5C32.0834 25.5541 25.5542 32.0833 17.5001 32.0833C9.44593 32.0833 2.91675 25.5541 2.91675 17.5C2.91675 9.44581 9.44593 2.91663 17.5001 2.91663C25.5542 2.91663 32.0834 9.44581 32.0834 17.5ZM5.10425 17.5C5.10425 24.346 10.6541 29.8958 17.5001 29.8958C24.3461 29.8958 29.8959 24.346 29.8959 17.5C29.8959 10.6539 24.3461 5.10413 17.5001 5.10413C10.6541 5.10413 5.10425 10.6539 5.10425 17.5Z'
                                    fill='#FF3D6A' />
                                <circle cx='12.3958' cy='12.3959' r='2.1875' fill='#FF3D6A' />
                                <circle cx='22.6042' cy='12.3959' r='2.1875' fill='#FF3D6A' />
                                <rect x='14.5833' y='17.5' width='5.83333' height='2.91667' rx='1.45833'
                                      fill='#FF3D6A' />
                            </svg>
                        </div>
                    </Link>
                </Slider>
            </div>
        </div>
    );
};

export default Releases;