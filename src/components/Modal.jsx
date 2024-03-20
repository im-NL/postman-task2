import React, { useEffect, useState } from 'react';
import './Modal.css';

function Modal() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const url = window.location.href;
        const id = url.split('=')[-1];
        console.log(id);
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=056caa04bf001a32611ff0c1e010b9fc&id=${id}&include_video=false&language=en-US`)
            .then(response => response.json())
            .then(response => {
                setLoading(false);
                setMovie(response.results);  
                console.log(response);
            })
            .catch(err => console.error(err)); }, []);
    
    if(loading) return (<div>Loading...</div>);
    return (
        <div className="modal">
        <div className="modal__container glass">
            <div className='modal__poster'>
                <img src='https://image.tmdb.org/t/p/w500//7WsyChQLEftFiDOVTGkv3hFpyyt.jpg' alt='poster' />
            </div>
            <div className='modal__content'>
                <div className='content'>
                <div><p>RATING | VOTE COUNT</p></div>
                <h1>AVENGERS: INFINITY WARS</h1>
                <p>Release date</p>
                <p className='poppins-thin description'>The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones. However, Thanos is prepared to go to any lengths to carry out his insane plan. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus assumenda optio a esse magni. Enim blanditiis ab amet ratione consequatur architecto magni tempora quae, provident labore tempore ex voluptatibus?</p>
                </div>
                <div className='modal__buttons'>
                    <div>
                    <button className='modal__button'>Remove bookmark</button>
                    </div>
    
                    <h1><a href="/">go back</a></h1>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Modal;