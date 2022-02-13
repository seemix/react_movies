import {configureStore} from "@reduxjs/toolkit";
import movieStore from "./movies.slice";
import themeStore from "./theme.slice";
import genreStore from "./genres.slice";
import popularStore from "./popular.slice";

const store = configureStore({
    reducer: {
        movieStore,
        themeStore,
        genreStore,
        popularStore
    }
})

export default store;