import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "API";
const Review = () =>{
    const [movie, setMovie] = useState({})
    const {id} = useParams();
    useEffect(()=> {
        getMovieReviews(id).then(setMovie)}, [id])
        console.log(movie)
        const rew ='We don`t have any reviews for this movie.'

    return <p>Review</p>
}
export default Review