import React from 'react';
import '../scss/components/header.scss';
import { Link } from 'react-router-dom';
import { useResize } from '../hooks';

const Header = () => {
    const width = useResize();

    return (
        <header className='header'>
            {
                width < 995 ?
                    <button className='header__search-button'>
                        <svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M32.475 33.59L22.0383 23.1533C21.205 23.8633 20.2467 24.4128 19.1633 24.8017C18.08 25.1906 16.9911 25.385 15.8967 25.385C13.2278 25.385 10.9689 24.4611 9.12001 22.6133C7.27112 20.7645 6.34668 18.5061 6.34668 15.8383C6.34668 13.1706 7.27001 10.9111 9.11668 9.06001C10.9645 7.20779 13.2222 6.28168 15.89 6.28168C18.5589 6.28168 20.8189 7.20612 22.67 9.05501C24.5211 10.9039 25.4467 13.1633 25.4467 15.8333C25.4467 16.9911 25.2417 18.1117 24.8317 19.195C24.4206 20.2783 23.8817 21.205 23.215 21.975L33.6517 32.41L32.475 33.59ZM15.8967 23.7167C18.1078 23.7167 19.975 22.9556 21.4983 21.4333C23.0206 19.9111 23.7817 18.0439 23.7817 15.8317C23.7817 13.6206 23.0206 11.7539 21.4983 10.2317C19.9761 8.70945 18.1095 7.94834 15.8983 7.94834C13.6872 7.94834 11.82 8.70945 10.2967 10.2317C8.77446 11.7539 8.01335 13.6206 8.01335 15.8317C8.01335 18.0428 8.77446 19.9095 10.2967 21.4317C11.8189 22.9539 13.6856 23.7167 15.8967 23.7167Z'
                                fill='black' />
                        </svg>
                    </button>
                    :
                    <form className='header__search'>
                        <input className='header__input' type='text' name='inputSearch' id='inputSearch'
                               placeholder='Поиск' />
                        <label className='dn' htmlFor='inputSearch'></label>
                        <input className='dn' name='searchButton' id='searchButton' type='submit' />
                        <label className='header__button' htmlFor='searchButton'>
                            <svg width='24' height='24' viewBox='0 0 24 24' fill='none'
                                 xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M19.485 20.154L13.223 13.892C12.723 14.318 12.148 14.6477 11.498 14.881C10.848 15.1143 10.1947 15.231 9.53798 15.231C7.93665 15.231 6.58132 14.6767 5.47198 13.568C4.36265 12.4587 3.80798 11.1037 3.80798 9.50301C3.80798 7.90235 4.36198 6.54668 5.46998 5.43601C6.57865 4.32468 7.93332 3.76901 9.53398 3.76901C11.1353 3.76901 12.4913 4.32368 13.602 5.43301C14.7127 6.54235 15.268 7.89801 15.268 9.50001C15.268 10.1947 15.145 10.867 14.899 11.517C14.6523 12.167 14.329 12.723 13.929 13.185L20.191 19.446L19.485 20.154ZM9.53798 14.23C10.8647 14.23 11.985 13.7733 12.899 12.86C13.8123 11.9467 14.269 10.8263 14.269 9.49901C14.269 8.17235 13.8123 7.05235 12.899 6.13901C11.9856 5.22568 10.8656 4.76901 9.53898 4.76901C8.21232 4.76901 7.09198 5.22568 6.17798 6.13901C5.26465 7.05235 4.80798 8.17235 4.80798 9.49901C4.80798 10.8257 5.26465 11.9457 6.17798 12.859C7.09132 13.7723 8.21132 14.23 9.53798 14.23Z'
                                    fill='black' />
                            </svg>
                        </label>
                    </form>
            }

            {
                width < 995 &&
                <ul className='header__menu'>
                    <li className='header__item active'>
                        <Link className='header__link' to='/'>Главная</Link>
                    </li>
                    <li className='header__item'>
                        <Link className='header__link' to='/my/songs'>Моя музыка</Link>
                    </li>
                </ul>
            }
            <div className='header__user user'>
                {
                    width >= 995 &&
                    <p className='user__name'>Skoof Akashi</p>
                }
                <img src={require('../assets/img/avatars/avatar001.png')} alt='User Avatar' className='user__avatar' />
            </div>
        </header>
    );
};

export default Header;