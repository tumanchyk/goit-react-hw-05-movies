import { Link, Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieInfo } from "API";
const MovieItem = () =>{
const [movie, setMovie] = useState({})
const {id} = useParams();
useEffect(()=> {
getMovieInfo(id).then(setMovie)}, [id])

    return <div>
    <div><h1>{movie.title}</h1>
        <p>Movie info</p></div>
        <div><h2>Additional information</h2>
        <ul>
            <li><Link to='cast'>Cast</Link></li>
            <li><Link to='reviews'>Reviews</Link></li>
            </ul></div>
    <Outlet />
</div>
}
export default MovieItem