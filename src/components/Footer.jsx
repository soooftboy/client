import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../scss/components/footer.scss';

const Footer = () => {
    const footer = React.useRef(null);
    const navigate = useNavigate();

    React.useEffect(() => {
        // console.log('Условие: ' + document.documentElement.scrollHeight + ' <= ' + window.innerHeight);
        // if (document.documentElement.scrollHeight <= window.innerHeight) {
        //     footer.current.classList.add('fixed-bottom');
        // } else {
        //     footer.current.classList.remove('fixed-bottom');
        // }

    }, [navigate]);

    return (
        <footer ref={footer} className='footer'>
            <p className='footer__waring'>Сервис Absolute Music может содержать информацию, не предназначенную
                для
                несовершеннолетних</p>
            <p className='footer__copyright'>© 2024 «Absolute Music»</p>
        </footer>
    );
};

export default Footer;