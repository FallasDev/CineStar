import { Link } from "react-router-dom";
import { useMovieContext } from "../customHocks/useMovieContext";

interface moviePreviewProps {
    id: number;
    poster_path: string;
    title: string
    showDate: Date,
    showHour: boolean
}

const baseUrl: string = "https://image.tmdb.org/t/p/"
const size: string = "w200"


export function PreviewMovie({id,poster_path,title,showDate,showHour}:moviePreviewProps) {

    const { setID } = useMovieContext()
    
    return (
        <Link className="movies-box" key={id} to={`/movie/${id}`}>
            <li onClick={() => setID(id)} >
                <img src={`${baseUrl}${size}${poster_path}`} alt={"Imagen de la pelicula: " + title} />
                <h3>{title}</h3>
                {showHour && <p>{`${showDate.getUTCHours()}:${showDate.getUTCMinutes()}${showDate.getUTCMinutes()}`}</p> }
            </li>
        </Link>
    )
}