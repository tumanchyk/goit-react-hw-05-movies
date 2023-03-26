import { CardTitle, MovieCard, Image, Rating, ImgContainer, MovieSet, MovieLink, Star } from "./MovieList.styled";
import photo from 'not-found-image.jpg'
const EP_IMG= 'https://image.tmdb.org/t/p/w500'

const MovieList = ({set, way, state}) =>{
   return <MovieSet>
    { set.map(({id, title, vote_average, backdrop_path, poster_path}) => 
        
    <MovieCard key={id}>
      <MovieLink to = {way ? `${way}/${id}` : `${id}`} state={state}>
         <ImgContainer>
         <Image src={backdrop_path&&poster_path ? `${EP_IMG}${backdrop_path || poster_path}` : photo}/>
        {vote_average > 0  &&  <Rating>
            <Star/>
            {vote_average.toFixed(1)}</Rating>}        
            <CardTitle>{title}</CardTitle>
         </ImgContainer>
      </MovieLink>
      </MovieCard>
      )
      }
   </MovieSet>
}
export default MovieList