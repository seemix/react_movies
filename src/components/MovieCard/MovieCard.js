import React from 'react';
import {Link} from "react-router-dom";

import css from './MovieCard.module.css';
import StarRatings from "react-star-ratings/build/star-ratings";

const MovieCard = ({movie: {id, title, vote_average, poster_path, release_date}}) => {

    return (
        <div className={css.card}>
            <div className={css.img_wrapper}>
                <Link to={`../../movie-details/${id}`}>
                    <img className={css.zoom_im} src={`https://image.tmdb.org/t/p/w342/${poster_path}`} alt={title}
                         width={'280'}/>
                </Link>
            </div>
            <div className={css.stars_wrapper}>
                <div>
                    <StarRatings rating={vote_average / 2} starRatedColor={'gold'} starDimension={'18px'}
                                 starSpacing={'2px'}/>
                </div>
            </div>
            <Link to={`../../movie-details/${id}`}>
                <h4>{title}, {release_date && release_date.slice(0, 4)}</h4>
            </Link>
        </div>
    );
};

export default MovieCard;