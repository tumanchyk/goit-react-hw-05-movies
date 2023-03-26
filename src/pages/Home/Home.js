import { useEffect, useState } from "react"
import { getTrendingMovies } from "API";
import { MainTitle, Span } from "pages/Home/MainTitle.styled";
import MovieList from "components/MovieList/MovieList";
const Home = () => {
    const [movieList, setMovies] = useState([]);
    useEffect(() => {
        getTrendingMovies().then(setMovies)   
    }, [])    
    return <div>
        <MainTitle>What to Watch? 
            <Span>Most Popular Movies Right Now</Span></MainTitle>
        <MovieList set={movieList} way={`movies`}/>
    </div>;
  };
  
  export default Home;