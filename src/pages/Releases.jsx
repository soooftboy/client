import React from 'react';
import { Release } from '../components';


const Releases = () => {
    const [releases, setReleases] = React.useState([]);

    React.useEffect(() => {
        fetch('https://my-json-server.typicode.com/soooftboy/db/albums')
            // fetch('http://localhost:3000/db.json')
            .then(resp => resp.json())
            .then(json => {
                setReleases(json);
            });
    }, []);

    return (
        <main className='releases-page'>
            <section className='releases'>
                <div className='releases__info'>
                    <h2 className='releases__title section__title'>Новые релизы</h2>
                    <p className='releases__subtitle section__subtitle'>Новые треки и альбомы</p>
                </div>
                <div className='releases__all'>
                    {releases.map(obj => <Release key={obj.id} {...obj} />)}
                </div>
            </section>
        </main>
    );
};

export default Releases;