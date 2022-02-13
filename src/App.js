import React from 'react';
import {Route, Routes} from "react-router-dom";
import {useSelector} from "react-redux";

import './App.css';
import Layout from "./components/Layout/Layout";
import GenresPage from "./pages/GenresPage/GenresPage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import Poster from "./components/Poster/Poster";
import GenresList from "./components/GenresList/GenresList";
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
    const {darkMode} = useSelector(state => state['themeStore']);
    return (
        <div className={darkMode ? 'dark-mode' : 'light-mode'}>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index path={'/'} element={<HomePage/>}/>
                    <Route path={'genres'} element={<GenresPage/>}>
                        <Route path={':currentGenre'} element={<GenresList/>}>
                            <Route path={':currentPage'} element={<GenresList/>}/>
                        </Route>
                    </Route>
                    <Route path={'movies'} element={<MoviesPage/>}>
                        <Route path={':currentPage'} element={<MoviesPage/>}/>
                    </Route>
                    <Route path={'movie-details/:movieId'} element={<MovieDetails/>}/>
                    <Route path={'poster/:posterPath'} element={<Poster/>}/>
                </Route>
            </Routes>
        </div>

    );
};

export default App;