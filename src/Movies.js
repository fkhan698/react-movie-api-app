import React from 'react'
import MovieInfo from './MovieInfo.js'
// import 'react-router-dom';
export default function Movies({title, popularity, release_date, image}) {


    return (
        <div className="movies-items">
            <h1 className="title">{title}</h1>
            <img className="image" src={"https://image.tmdb.org/t/p/w500/"+image} alt = ""></img>
            <strong><p className="popularity">Popularity</p></strong>
            <p>{popularity}</p>
            <strong><p className="date">Release Date</p></strong>
            <p>{release_date}</p>
            <button></button>
        </div>
    )
}
