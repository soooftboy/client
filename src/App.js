import React from 'react';

import { Header, Footer, Aside, Playerbar, Feedback } from './components';
import { Home, Releases, Recommendations, Popular, PopularAuthors, MyTracks } from './pages';
import { Route, Routes } from 'react-router-dom';

function App() {
    React.useEffect(() => {
        document.body.setAttribute('data-theme', 'light');
    }, []);

    // const preloader = React.useRef(null);
    // const loaderFirst = React.useRef(null);
    // const loaderSecond = React.useRef(null);
    //
    // document.body.onload = () => {
    //     loaderFirst.current.style.display = 'none';
    //     loaderSecond.current.play();
    //
    //     setTimeout(function() {
    //         !preloader.current.classList.contains('done') && preloader.current.classList.add('done');
    //     }, 700);
    // };

    return (
        <div className='wrapper'>
            {/*<div ref={preloader} className='preloader'>*/}
            {/*    <video ref={loaderSecond} id='loader-second' className='loader' muted preload='auto'*/}
            {/*           src={require('./assets/preloader/eye-open.webm')}></video>*/}
            {/*    <video ref={loaderFirst} id='loader-first' className='loader' loop autoPlay muted preload='auto'*/}
            {/*           src={require('./assets/preloader/eye-wait.webm')}></video>*/}
            {/*</div>*/}
            <Aside />
            <div className='main-content'>
                <Header />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/releases' element={<Releases />} />
                    <Route exact path='/recommendations' element={<Recommendations />} />
                    <Route exact path='/popular' element={<Popular />} />
                    <Route exact path='/authors' element={<PopularAuthors />} />
                    <Route exact path='/my/songs' element={<MyTracks />} />
                </Routes>
                <Feedback />
                <Footer />
                <Playerbar url={require('./assets/media/dk-licemer.mp3')} />
            </div>
        </div>
    );
}

export default App;
