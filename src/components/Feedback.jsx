import React from 'react';
import axios from "axios";

const Feedback = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');
    const formBlock = React.useRef();

    async function handleSubmit(e) {
        e.preventDefault();

        formBlock.current.reset();

        const form = await axios.post('/api/form', {
            email,
            message,
        })
    }

    return (
        isOpen &&
        <div className='feedback'>
            <div className='feedback__info'>
                <h2 className='feedback__title section__title'>Обратная связь</h2>
            </div>
            <form ref={formBlock} className='feedback__form'>
                <input
                    className='feedback__input'
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Введите почту'
                    onInput={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <label htmlFor='email' className='dn'></label>

                <textarea
                    className='feedback__message'
                    name='message'
                    id='message'
                    placeholder='Сообщение'
                    onInput={(e) => {
                        setMessage(e.target.value);
                    }}
                />
                <label htmlFor='message' className='dn'></label>

                <button
                    className='feedback__submit'
                    type='submit'
                    onClick={handleSubmit}
                >
                    Отправить
                </button>
            </form>
        </div>
    );
};

export default Feedback;