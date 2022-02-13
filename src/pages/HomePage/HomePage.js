import React, {useEffect} from 'react';
import {getPopular} from "../../store/popular.slice";
import {useDispatch, useSelector} from "react-redux";
import css from "./HomePage.module.css"
import MovieCard from "../../components/MovieCard/MovieCard";

const HomePage = () => {
    const dispatch = useDispatch();
    const {popular} = useSelector(state => state['popularStore'])
    useEffect(() => {
        dispatch(getPopular());
    }, [dispatch])
    return (
        <div>
            <div className={css.wrap}>
                <div>
                    <h2>The most popular movies in 2022</h2>
                </div>
            </div>
            <div className={css.cards_wrapper}>
                {popular && popular.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export default HomePage;