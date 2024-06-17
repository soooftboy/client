import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoSvg } from '../assets/img/logo.svg';
import '../scss/components/aside.scss';

const Aside = () => {
    const toggleThemeButton = React.useRef(null);
    const toggleTheme = () => {
        if (!toggleThemeButton.current.checked) {
            document.body.setAttribute('data-theme', 'light');
        } else {
            document.body.setAttribute('data-theme', 'dark');
        }
    };

    return (
        <aside className='menu'>
            <Link to='/'>
                <div className='menu__logo'>
                    <LogoSvg />
                </div>
            </Link>
            <div className='menu__group main-menu'>
                <h3 className='menu__ul-title'>
                    <Link to='/'>Главная</Link>
                </h3>
                <ul className='main-menu__list'>
                    <li className='main-menu__item'>
                        <Link className='main-menu__link' to='/releases'>Новые релизы</Link>
                    </li>
                    <li className='main-menu__item'>
                        <Link className='main-menu__link' to='/recommendations'>Рекомендации</Link>
                    </li>
                    <li className='main-menu__item'>
                        <Link className='main-menu__link' to='/popular'>Популярное</Link>
                    </li>
                    <li className='main-menu__item'>
                        <Link className='main-menu__link' to='/authors'>Топ исполнителей</Link>
                    </li>
                </ul>
            </div>
            <div className='menu__group my-menu'>
                <h3 className='menu__ul-title'>
                    <Link to='/my/songs'>Моя музыка</Link>
                </h3>
                <ul className='my-menu__list'>
                    <li className='my-menu__item'>
                        <Link to='/my/songs' className='my-menu__link'>Треки</Link>
                    </li>
                    <li className='my-menu__item'>
                        <Link to='/my/playlists' className='my-menu__link'>Плейлисты</Link>
                    </li>
                    <li className='my-menu__item'>
                        <Link to='/my/albums' className='my-menu__link'>Альбомы</Link>
                    </li>
                    <li className='my-menu__item'>
                        <Link to='/my/authors' className='my-menu__link'>Исполнители</Link>
                    </li>
                    <li className='my-menu__item'>
                        <Link to='/feedback' className='my-menu__link'>Обратная связь</Link>
                    </li>
                </ul>
            </div>
            <div onClick={toggleTheme} className='toggle-theme'>
                <input ref={toggleThemeButton} id='toggle-theme-button' className='toggle-theme__btn' type='checkbox'
                       role='switch'
                       name='toggle-theme-button' value='on' />
                <label htmlFor='toggle-theme-button' className='toggle-theme__slot'>
                    <div className='toggle-theme__label sun'>
                        <svg width='24' height='24' viewBox='0 0 24 24' fill='none'
                             xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M22 13.963L19.4675 11.4926L21.6401 8.70305L18.2129 7.82736L18.6994 4.32461L15.2939 5.27612L13.961 2L11.491 4.53291L8.70193 2.35994L7.82639 5.7877L4.32423 5.30112L5.27557 8.70638L2 10.0362L4.53249 12.5074L2.35988 15.297L5.78707 16.1726L5.29557 19.6754L8.70027 18.7239L10.0332 22L12.5032 19.4671L15.2922 21.6401L16.1678 18.2123L19.6708 18.7039L18.7194 15.2986L22 13.963ZM13.9035 17.5474C12.8074 17.9203 11.6255 17.9604 10.5067 17.6626C9.38791 17.3648 8.38226 16.7424 7.61647 15.874C6.85069 15.0055 6.35904 13.9298 6.20347 12.7823C6.0479 11.6349 6.23538 10.4671 6.74228 9.426C7.24917 8.38493 8.05281 7.51722 9.05193 6.93218C10.0511 6.34715 11.201 6.07097 12.3567 6.13844C13.5125 6.20592 14.6225 6.61403 15.5468 7.31135C16.4711 8.00868 17.1683 8.96401 17.5507 10.057L17.5631 10.0978C17.7631 10.6636 17.878 11.3151 17.878 11.9942C17.8781 13.2116 17.4994 14.399 16.7946 15.3916C16.0898 16.3842 15.0937 17.133 13.9444 17.5341L13.9035 17.5474Z'
                                fill='#FF3D6A' />
                        </svg>
                    </div>
                    <div className='toggle-theme__label moon'>
                        <svg width='24' height='24' viewBox='0 0 24 24' fill='none'
                             xmlns='http://www.w3.org/2000/svg'>
                            <path fillRule='evenodd' clipRule='evenodd'
                                  d='M13.6962 2.125C14.0205 2.31218 14.2058 2.63437 14.2042 3.00833C14.203 3.32206 14.0915 3.52693 13.6933 3.94756C13.3757 4.28303 12.8854 4.8989 12.8854 4.96235C12.8854 4.97601 12.8314 5.06845 12.7655 5.16775C12.6587 5.3286 12.491 5.67139 12.3151 6.08877C12.1675 6.43892 12.0037 7.05491 11.9253 7.5544C11.8574 7.98726 11.8942 9.42407 11.9836 9.82844C12.4179 11.7925 13.649 13.4237 15.3546 14.2947C16.4119 14.8346 17.2537 15.0175 18.5042 14.979C19.3046 14.9543 19.7257 14.8746 20.4639 14.6084C20.9392 14.437 21.1473 14.4264 21.4237 14.5595C21.7969 14.7392 21.9653 14.9853 21.994 15.3924C22.0109 15.6321 21.9977 15.7019 21.883 15.9819C21.5797 16.7224 21.0287 17.6333 20.4487 18.353C19.814 19.1404 19.1278 19.7697 18.2843 20.3376C17.8415 20.6358 16.9078 21.1566 16.7006 21.221C16.6588 21.234 16.4537 21.3119 16.2447 21.3941C15.2029 21.804 14.1165 21.9988 12.8654 22C12.0163 22.0008 11.6007 21.9621 10.8857 21.8153C8.69125 21.3647 6.65624 20.1207 5.24123 18.3647C5.12413 18.2193 5.01843 18.0913 5.00632 18.0801C4.93741 18.0165 4.38743 17.1512 4.21835 16.8403C3.76331 16.0038 3.35943 14.8929 3.18394 13.9953C2.97083 12.9053 2.94003 11.5148 3.10656 10.5045C3.26865 9.52098 3.45213 8.87625 3.81726 8.00694C4.38775 6.6487 5.35917 5.32364 6.48659 4.36575C6.67356 4.2069 6.83552 4.06638 6.84652 4.05345C6.85752 4.04056 7.10255 3.87078 7.39106 3.67619C9.0683 2.54482 11.0231 1.95781 12.9653 2.00236C13.4672 2.01391 13.5187 2.02252 13.6962 2.125ZM9.20607 4.90057C9.4511 4.75488 10.2009 4.44701 10.6101 4.32409C10.7947 4.26864 10.9607 4.22226 10.9791 4.22109C10.9812 4.22094 10.9834 4.22073 10.9853 4.22053C10.9917 4.21989 10.9968 4.21938 10.9995 4.22172C11.01 4.23093 10.9829 4.28418 10.8498 4.54655C10.8393 4.56717 10.8282 4.58908 10.8164 4.61237C9.73121 6.75191 9.59092 9.24225 10.4273 11.5176C10.649 12.1205 11.0124 12.8297 11.3436 13.3055C12.8425 15.4587 15.0172 16.7445 17.5657 16.9843C17.858 17.0117 18.3012 17.0243 18.5507 17.0121L19.0043 16.9899L18.9207 17.098C18.7798 17.2803 18.3563 17.72 18.0425 18.01C17.5915 18.4267 17.083 18.7796 16.4847 19.0912C15.253 19.7325 14.1913 19.9967 12.8454 19.9967C11.0654 19.9967 9.50381 19.4664 8.0846 18.3797C5.08878 16.086 4.11705 11.8975 5.78473 8.46671C6.40269 7.19551 7.22797 6.22368 8.38827 5.40079C8.54336 5.2908 8.75032 5.15731 8.84818 5.10418C8.94604 5.05105 9.10709 4.95943 9.20607 4.90057Z'
                                  fill='#FF3D6A' />
                        </svg>
                    </div>
                </label>
            </div>
        </aside>
    );
};

export default Aside;