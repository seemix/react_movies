import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllGenres} from "../../store/genres.slice";
import Genre from "../Genre/Genre";

const Genres = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllGenres())
    }, [dispatch]);
    const {allGenres} = useSelector(state => state['genreStore']);

    return (
        <div>
            <h3>Genres:</h3>
            {allGenres && allGenres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export default Genres;