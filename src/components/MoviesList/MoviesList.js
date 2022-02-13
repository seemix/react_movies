import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllMovies} from "../../store/movies.slice";
import MovieCard from "../MovieCard/MovieCard";
import css from './MovieList.module.css';
import Pagination from "../Pagination/Pagination";
import {useParams} from "react-router-dom";

const MoviesList = () => {

    const {results} = useSelector(state => state['movieStore']);
    const dispatch = useDispatch();
    let {currentPage} = useParams();
    if (!currentPage) currentPage = 1;

    useEffect(() => {
        dispatch(getAllMovies(currentPage));
    }, [currentPage, dispatch])

    return (
        <div>
            <div className={css.cards_wrapper}>
                {results && results.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
            <Pagination/>
        </div>

    );
};

export default MoviesList;