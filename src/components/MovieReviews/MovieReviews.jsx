import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "API";
import { NoFound, ReviewContainer, ReviewCard, Reviewer, Content} from "./MovieReviews.styled";
const Reviews = () =>{
    const [reviews, setReviews] = useState([])
    const {id} = useParams();
    useEffect(()=> {
        getMovieReviews(id).then(setReviews)}, [id])

    return  <ReviewContainer>
    {reviews.length === 0 
    ? <NoFound>We don`t have any reviews for this movie.</NoFound> 
    : reviews.map(({id, author, content})=> 
    <ReviewCard key={id}>
        <Reviewer>{author}</Reviewer>
        <Content>{content}</Content>
    </ReviewCard> )}
    </ReviewContainer>
       
    
    
}
export default Reviews