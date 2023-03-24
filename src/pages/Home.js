import { useEffect, useState } from "react"
import { getTrendingMovies } from "API";
import MovieList from "components/MovieList/MovieList";
const Home = () => {
    const [movieList, setMovies] = useState([]);
    useEffect(() => {
        getTrendingMovies().then(setMovies)   
    }, [])
    return <div>
        <h1>What to Watch? Most Popular Movies Right Now</h1>
        <MovieList set={movieList} way={`movies`}/>
    </div>;
  };
  
  export default Home;