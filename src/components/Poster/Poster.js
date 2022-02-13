import React from 'react';
import {useParams, useNavigate} from "react-router-dom";
import css from "./Poster.module.css";

const Poster = () => {
    const {posterPath} = useParams();
    const navigate = useNavigate();
    return (
        <div>
            <div className={css.poster_wrap}>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w780/${posterPath}`} alt={''}/>
                </div>

            </div>
            <div className={css.poster_wrap}>
                <div>
                    <button className={css.back_button} onClick={() => navigate(-1)}> Back to previous page!</button>
                </div>
            </div>
        </div>
    );
};

export default Poster;