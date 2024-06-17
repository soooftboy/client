import React from 'react';

const Song = ({ name, imageUrl, authors, duration, songUrl }) => {
    return (
        <div className='song'>
            <div className='song__song'>
                <div className='song__control'>
                    <div className='song__play song-button-play'
                         onClick={
                             () => {
                                 console.log('clicked');
                             }
                         }>
                        <svg width='33' height='33' viewBox='0 0 33 33' fill='none' ю
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
                <img src={require(`../assets/img/recommendations/recommendation${imageUrl}.png`)} alt='Recommendation'
                     className='song__image' />
                <div className='song__info'>
                    <h3 title={name} className='song__name'>{name}</h3>
                    <p className='song__authors'>
                        {
                            authors.map(obj => <a key={obj.name} title={obj.name} href={obj.link}>{obj.name}</a>)
                        }
                    </p>
                </div>
            </div>
            <div className='song__time'>{duration}</div>
        </div>
    );
};

export default Song;

