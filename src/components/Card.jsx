import React, { useEffect, useState } from 'react';
import './Card.css';
import Image from './Image';
import addAnimations from '../../animations.js';

function Card({ title, image, id }) {

  var [bookmarks, setBookMarks] = useState(JSON.parse(localStorage.getItem('bookmark')) || {})

  useEffect(() => {
    addAnimations()
  }, [])

  function addBookmark() {
    let bookmark = JSON.parse(localStorage.getItem('bookmark')) || {};
    let movie = { title, image, id };
    if (!bookmark[id]) {
      bookmark[id] = movie;
    } else {
      delete bookmark[id];
    }
    localStorage.setItem('bookmark', JSON.stringify(bookmark));
    setBookMarks(bookmark);
  }

  return (
    <>
        
      <div className='card animate-hidden delayed'>
        <button onClick={() => addBookmark()} className='bookmark_icon'>
          {id in bookmarks ? <img width="25" height="25" src="https://img.icons8.com/ios/50/multiply.png" alt="multiply"/> : <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/bookmark-ribbon.png" alt="bookmark-ribbon"/>}
        </button>
      <a className='card__anchor' href={`/movie.html?id=${id}`}>
        <Image src={"https://image.tmdb.org/t/p/w500/" + image} />
        {/* <img className='card_img' src={"https://image.tmdb.org/t/p/w500/" + image} alt="movie poster" /> */}
        <h3>{title}</h3>
      </a>
      </div>


    </>
  )
}

export default Card;