import React, {useEffect, useState} from 'react';
import './App.css';
import Movies from './Movies.js'



const App = () => {
  const API_KEY = '664e565dee7eaa6ef924c41133a22b63';

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Avengers");

  useEffect(() => {
    async function getMovies(){
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`)
      const data = await response.json()
      console.log(data.results)
      setMovies(data.results)
    }
    if(query !== "") //Anything typed in will run the function
      getMovies()
    

  }, [query])

  const updateMovies = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    
  }

  const getSearch = (e) => {
    e.preventDefault()
    setQuery(search) //Sets the value of the query to search
  }


  return (
   <div>
     <div className="header"><h1>Movie Database Search</h1>
     </div>
    <div className="container">
      <input className="search-input" onChange={updateMovies} value={search} type="text"></input>
      <button className="search-button" onClick={getSearch}type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
    </div>
      
        <div className="movies-row">
        {movies.map(movie => (
          <Movies
      
            key={movie.id}
            title={movie.title}
            popularity={movie.popularity}
            release_date={movie.release_date}
            image={movie.poster_path}
          />
        ))}
    
       </div>
       
       
     <footer className="footer">Power by MovieDB API</footer>
   </div>
  );
}

export default App;
