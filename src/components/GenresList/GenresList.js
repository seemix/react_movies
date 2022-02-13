import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getByGenres} from "../../store/genres.slice";

import css from "./GenresList.module.css"
import Pagination from "../Pagination/Pagination";
import MovieCard from "../MovieCard/MovieCard";

const GenresList = () => {

    let {currentGenre, currentPage} = useParams();
    const dispatch = useDispatch();
    const {selectedGenres, allGenres} = useSelector(state => state['genreStore']);
    useEffect(() => {
        const params = {currentGenre, currentPage}
        dispatch(getByGenres(params))
    }, [currentGenre, currentPage, dispatch])

    const genreName = allGenres.filter(genre => genre.id === +(currentGenre));

    if (!currentPage) currentPage = 1;

    return (
        <div>
            <center>
                {genreName[0] && <h2>{genreName[0].name}</h2>}
            </center>
            <div className={css.cards_wrapper}>
                {selectedGenres && selectedGenres.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
                <Pagination/>
            </div>
        </div>
    );
};

export default GenresList;