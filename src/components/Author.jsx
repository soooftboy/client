import React from 'react';

const Author = ({ imageUrl, name }) => {
    return (
        <div className='author'>
            <div className='author__control'>
                <div className='author__play song-button-play'>
                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none' xmlns='http://www.w3.org/2000/svg'>
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
            <img src={require(`../assets/img/authors/author${imageUrl}.jpg`)} alt='author Image'
                 className='author__image' />
            <h3 className='author__name'>{name}</h3>
        </div>
    );
};

export default Author;