import { UseMovies } from "../customHocks/useMovies"
import { PreviewMovie } from "./PreviewMovie";
function getParseDate(item: Date) {
    if (!item) {
        return 
    }
    
    return `${item.getDate()}/${(item.getMonth() + 1)}/${item.getFullYear()}`
}

export function ListMoviesForDate() {
    const movies = UseMovies()
    const nowDate = new Date(Date.now())
    
    return <ul className="list">
        {
            movies.map((item,index) => {
                return getParseDate(item.showDate) === getParseDate(nowDate) && 
                <PreviewMovie key={index} showHour={true} id={item.id} title={item.title} poster_path={item.poster_path} showDate={item.showDate}/> 
            })
        }
    </ul>
}