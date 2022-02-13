import React from 'react';
import {Link} from "react-router-dom";
import css from './Genre.module.css';

const Genre = ({genre: {id, name}}) => {
    return (
        <div>
            <span className={css.genre_link}> <Link to={id.toString()}> {name}</Link></span>
        </div>
    );
};

export default Genre;