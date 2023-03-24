import { useState, useEffect } from "react";
import { getMovies } from "API";
import MovieList from "components/MovieList/MovieList";
const Movies  = () =>{
const [queryItem, setQueryItem] = useState('');
const [movieSet, setMovieSet] = useState([])
    const onFormSubmit = e =>{
        e.preventDefault()
        const query = e.target.query.value;
        setQueryItem(query)   
        e.currentTarget.reset()
     }
     useEffect(()=>{
        getMovies(queryItem).then(setMovieSet)
     },[queryItem])

    return (
        <div>
        <form onSubmit = {onFormSubmit}>
             <input type='text' name="query"></input>
             <button type='submit'>Search</button>
        </form>
        <MovieList set = {movieSet}/>
        </div>
    )
}
export default Movies;