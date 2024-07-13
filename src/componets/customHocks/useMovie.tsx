import { useState,useEffect } from "react";
import { GetMovieByID } from "../services/GetMovieByID";
import { Movie } from "../services/GetNowMovies";

export function UseMovie(id: number) {
    const [ movie,setMovie ] = useState<Movie>()
    
    useEffect(() => {
        GetMovieByID(id)
        .then(res => setMovie(res))
    },[])   

    return movie
}