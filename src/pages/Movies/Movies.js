import { useState, useEffect } from "react";
import { getMovies } from "API";
import { useSearchParams, useLocation } from "react-router-dom";
import { Form, Input, Button, IconSearch, Text } from "./MoviesSearch.style";
import MovieList from "components/MovieList/MovieList";

const Movies  = () =>{
const [movieSet, setMovieSet] = useState([])
const [query, setQuery] = useSearchParams('');
const queryItem = query.get('query') ?? ''; 

    const onFormSubmit = e =>{
        const queryValue = e.target.query.value.trim();
        if(queryValue === ''){
           return setQuery({})
        }
        setQuery({queryItem: queryValue})
     }
     useEffect(()=>{
        getMovies(queryItem).then(setMovieSet)
     },[query, queryItem])
     const location = useLocation()

    return (
        <div>
        <Text>All good movies come to the one who search.</Text>
        <Form onSubmit = {onFormSubmit}>
             <Input type='text' name="query"/>
             <Button type='submit'>
                <IconSearch/>
            </Button>
        </Form>
        <MovieList set = {movieSet} state={{from: location}}/>
        </div>
    )
}
export default Movies;