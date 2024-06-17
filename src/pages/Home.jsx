import React from 'react';
import { Releases, Recommendations, Popular, Authors, Playlists } from '../components/Home';

const Home = () => {
    const [releases, setReleases] = React.useState([]);
    const [recommendations, setRecommendations] = React.useState([]);
    const [popular, setPopular] = React.useState([]);
    const [authors, setAuthors] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:3000/db.json')
            .then(resp => resp.json())
            .then(json => {
                setRecommendations(json.recommendations);
                setPopular(json.popular);
                setAuthors(json.authors);
            });

        fetch('https://my-json-server.typicode.com/soooftboy/db/albums')
            .then(resp => resp.json())
            .then(json => {
                setReleases(json);
            });
    }, []);

    return (
        <main className='home-page'>
            <Releases items={releases} />
            <Recommendations items={recommendations} />
            <div className='df blocks-popular-playlists'>
                <Popular items={popular} />
                <Authors items={authors} />
            </div>
            <Playlists />
        </main>
    );
};

export default Home;