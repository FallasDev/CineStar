import { UseMovies } from "../customHocks/useMovies"
import { Movie } from "../services/GetNowMovies"
import { PreviewMovie } from "./PreviewMovie";

export function ListMovies(): JSX.Element {

    const movies = UseMovies()
  

    return <ul className="list" key="10">
        {movies.map((item: Movie, index: number) => {
            return <PreviewMovie key={index} showHour={false} id={item.id} title={item.title} poster_path={item.poster_path} showDate={item.showDate}/> 
        })}
    </ul>
}