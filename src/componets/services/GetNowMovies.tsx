const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTBlNmMzNDhmNzZhYTUwMWQzMjMwNDg1ODU1OTQ4NCIsIm5iZiI6MTcyMDU3NDA0MC40MTczMTMsInN1YiI6IjY2OGRkZjE4YTQ3ZjM0OWJlZWMyMTZhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HMNSiF42lrtqS3rz4EgnuRFXps1UfZCj-qx3KLTB_2M'
    }
};

interface Genre{
    id: number,
    name: string
}

export interface Movie {
    id: number,
    title: string,
    overview: string,
    poster_path: string,
    genres: Array<Genre>,
    showDate: Date;
}

export function GetNowMovies(): Promise<Movie[]> {
    return new Promise((resolve, reject) => {
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=es-US&page=1', options)
            .then(response => response.json())
            .then(response => resolve(response.results))
            .catch(err => reject(err));
    })
}