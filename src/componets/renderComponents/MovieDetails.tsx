import { UseMovie } from "../customHocks/useMovie";
import { useMovieContext } from "../customHocks/useMovieContext";

const baseUrl: string = "https://image.tmdb.org/t/p/"
const size: string = "w200"


export function MovieDetails() : JSX.Element {

    const { id } = useMovieContext()

    const movie = UseMovie(id); 
    
    return movie && !movie.hasOwnProperty("success") ? <div className="movieDetails-box">
        <div className="title-img">
            <img src={`${baseUrl}${size}${movie?.poster_path}`} alt={"Imagen de la pelicula: " + movie?.title} />
            <h4>{movie?.title}</h4>
        </div>
        {<ul className="genres">
            <li>{movie?.genres[0]?.name}</li>
            <li>{movie?.genres[1]?.name}</li>
        </ul>}
        <p>{movie?.overview}</p>
    </div> : <div>
        <h1>Ha ocurrido un error!</h1>
    </div>
}