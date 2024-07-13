import { Movie } from "./GetNowMovies";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTBlNmMzNDhmNzZhYTUwMWQzMjMwNDg1ODU1OTQ4NCIsIm5iZiI6MTcyMDU3NDA0MC40MTczMTMsInN1YiI6IjY2OGRkZjE4YTQ3ZjM0OWJlZWMyMTZhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HMNSiF42lrtqS3rz4EgnuRFXps1UfZCj-qx3KLTB_2M'
    }
};

export function GetMovieByID(id: number):Promise<Movie> {
    return new Promise((resolve, reject) => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?language=es-ES`, options)
            .then(response => response.json())
            .then(response => resolve(response))
            .catch(err => reject(err));
    })
}