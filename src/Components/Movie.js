import React from 'react'
import PropTypes from 'prop-types'
import './Movie.css';
import {Link} from 'react-router-dom';

function Movie({year,title,summary,poster,genres}){
    return (
    <div className="movie_data">
        <Link 
            to={{pathname:'movie-detail',
            state:{year,title,summary,poster,genres},
            }}>
        <img src={poster} alt={title} title={title}/>
        <div>
            <h2 className="movie_title">{title}</h2>
            <h2 className="movie_year">From: {year}</h2>
            <h4 className="movie_summary">Summary: {summary.slice(0,180)}...</h4>
            <ul className="Movie_genres">
                {genres.map((genre,idx)=>{
                    return <li className="movie_gnere" key={idx}>{genre}</li>
                })}
            </ul>
        </div>
        </Link>
    </div>
    )
}
Movie.propTypes=
{
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;