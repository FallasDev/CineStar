import { useState, useEffect } from "react";
import { GetNowMovies, Movie } from "../services/GetNowMovies";
import { GetMoviesForDate } from "../services/GetMoviesForDate";

function addRelaeseData(movies: Array<Movie>, moviesDate: Array<any>) {
    movies.map((movie: Movie, index: number) => {
        moviesDate.map((movieDate, index) => {
            if (movie.title === movieDate.name) {
                movie.showDate = movieDate.releaseDate
            }
        })
    })
}

export function UseMovies() {

    const [movies, setMovies] = useState(Array<Movie>)
    const moviesDate = GetMoviesForDate()
    
    useEffect(() => {
        GetNowMovies()
            .then(res => setMovies(res)
            )
    }, [])
    addRelaeseData(movies, moviesDate)
    return movies
}