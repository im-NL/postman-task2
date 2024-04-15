import React, { useState, Fragment, useEffect } from "react";
import CardContainer from "./CardContainer";
import _ from "underscore";
import "./Search.css";
import updateCursorEvents from "../../cursor.js";
import addAnimations from "../../animations.js";

function Search() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false)

    function getMovies(query) {
        query = query.target.value;
        if (document.getElementById('searchbar').value === '') { setMovies([]); return };
        setLoading(true)
        console.log(query)
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=056caa04bf001a32611ff0c1e010b9fc&query=${query}&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`)
            .then(response => response.json())
            .then(response => {
                var movieList = []
                response.results.forEach(movie => {
                    movieList.push(movie);
                });
                console.log(movieList);
                setMovies(movieList);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }

    function loadMovies() {
        const query = document.getElementById('searchbar').value;
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=056caa04bf001a32611ff0c1e010b9fc&query=${query}&include_video=false&language=en-US&page=${page + 1}&sort_by=popularity.desc`)
            .then(response => response.json())
            .then(response => {
                var movieList = movies;
                response.results.forEach(movie => {
                    movieList.push(movie);
                });
                console.log(movieList);
                setMovies(movieList);
                setPage(page + 1);

            })
            .catch(err => console.error(err));

    }

    useEffect(() => {
        updateCursorEvents();
        addAnimations();
    });

    return (
        <div className="search-container stack">

            <div className="stack">
                <h1 className="animate-hidden delayed" data-cursor="pointer3">All your favourite movies.</h1>
                <h2 className="animate-hidden delayed" data-cursor="pointer3">At one place.</h2>
            </div>
            <div className="stack search searchform" data-cursor="pointer">
                <button type="submit" className="search-btn">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#fff"
                        height="24px"
                        width="24px"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                    </svg>
                </button>
                <input className="searchbar" title="" autoComplete="off" required onKeyUp={_.debounce(getMovies, 250)} type="text" id="searchbar" placeholder="Search..." />
            </div>

            {loading ? <div className="loader stack"></div> : null}


            {movies.length > 0 ? <> <CardContainer cardList={movies} /> <div className="stack" onClick={loadMovies}>Load more</div> </> : null}
        </div>

    );
}

export default Search;