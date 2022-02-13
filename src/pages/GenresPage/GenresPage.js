import React from 'react';

import Genres from "../../components/Genres/Genres";
import {Outlet, useParams} from "react-router-dom";
import css from "./GenresPage.module.css"

const GenresPage = () => {
    const {currentGenre} = useParams();

    return (
        <div className={css.genres_page}>
            <Genres/>
            {currentGenre === undefined ? <h2>Select genre first!</h2> : ''}
            <Outlet/>
        </div>
    );
};

export default GenresPage;