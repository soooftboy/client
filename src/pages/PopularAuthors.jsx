import React from 'react';
import { Author } from '../components';

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

const PopularAuthors = () => {
    // const [authors, setAuthors] = React.useState([]);
    //
    // React.useEffect(() => {
    //     // fetch('https://my-json-server.typicode.com/soooftboy/db/albums')
    //     fetch('http://localhost:3000/db.json')
    //         .then(resp => resp.json())
    //         .then(json => {
    //             setAuthors(json.authors);
    //         });
    // }, []);

    return (
        <main className='popular-authors-page'>
            <section className='authors'>
                <div className='authors__info'>
                    <h2 className='authors__title section__title'>Топ исполнителей</h2>
                    <p className='authors__subtitle section__subtitle'>Популярные исполнители</p>
                </div>
                <div className='authors__all'>
                    {authors.authors.map(obj => <Author key={obj.id} {...obj} />)}
                </div>
            </section>
        </main>
    );
};

export default PopularAuthors;