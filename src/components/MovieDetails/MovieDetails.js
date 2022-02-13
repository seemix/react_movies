import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMovieById} from "../../store/movies.slice";
import {useParams, useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";

import css from "./MovieDetails.module.css";

const MovieDetails = () => {
    const {movie} = useSelector(state => state['movieStore']);

    const dispatch = useDispatch();
    const {movieId} = useParams();

    useEffect(() => {
        dispatch(getMovieById(movieId));
    }, [dispatch, movieId])
    const {
        title,
        vote_average,
        poster_path,
        overview,
        homepage,
        genres,
        release_date,
        tagline,
        budget,
        backdrop_path
    } = movie;
    const navigate = useNavigate();
    return (
        <div className={css.wrap}>
            <h1>{title} movie info</h1>
            <div><img src={`https://image.tmdb.org/t/p/w1280/${backdrop_path}`} alt={title} width={'1280'}/></div>
            <div className={css.movie_wrapper}>
                <div>

                    <Link to={`../poster${poster_path}`}>
                        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} width={'370'}/>
                    </Link>
                </div>
                <div>
                    <h2>{title}</h2>
                    <h3>Rating: {vote_average}</h3>
                    <h3>Homepage: <a href={homepage} target="_blank" rel="noreferrer">{homepage}</a></h3>
                    <big>{overview}</big>
                    <div className={css.movie_wrapper}>
                        <div>
                            <h3>Genres:</h3> {genres && genres.map(genre => <div>{genre.name}</div>)}
                        </div>
                        <div>
                            <h3>Release date: </h3>
                            <p>{release_date}</p>
                        </div>
                        <div>
                            <h3>Tagline:</h3>
                            <p>{tagline}</p>
                        </div>
                        <div>
                            <h3>Budget:</h3>
                            <p>{budget}</p>
                        </div>

                    </div>

                    <button className={css.back_button} onClick={() => navigate(-1)}> Back to previous page!</button>


                </div>
            </div>
        </div>
    );
};

export default MovieDetails;