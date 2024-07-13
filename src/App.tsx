import { useState } from 'react'
import './App.css'
import { ListMovies } from './componets/renderComponents/ListMovies'
import { ListMoviesForDate } from './componets/renderComponents/ListMoviesForDate'
//750e6c348f76aa501d32304858559484
//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTBlNmMzNDhmNzZhYTUwMWQzMjMwNDg1ODU1OTQ4NCIsIm5iZiI6MTcyMDU3NDA0MC40MTczMTMsInN1YiI6IjY2OGRkZjE4YTQ3ZjM0OWJlZWMyMTZhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HMNSiF42lrtqS3rz4EgnuRFXps1UfZCj-qx3KLTB_2M

function App() {

  const [showCartelera, setShowCartelera] = useState(true)



  return (
    <main>
      <h1>CineStar</h1>
      <div className='div-box'>
        <button onClick={() => setShowCartelera(true)}>Cartelera de peliculas</button>
        <button onClick={() => setShowCartelera(false)}>Peliculas disponibles hoy</button>
      </div>
      {showCartelera ? <ListMovies /> : <ListMoviesForDate />}
    </main>
  )
}

export default App
