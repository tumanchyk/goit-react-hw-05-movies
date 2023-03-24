import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "API";
const Cast = () =>{
    const [movie, setMovie] = useState({})
    const {id} = useParams();
    useEffect(()=> {
        getMovieCast(id).then(setMovie)}, [id])
        console.log(movie)
    return <p>Cast</p>
}
export default Cast