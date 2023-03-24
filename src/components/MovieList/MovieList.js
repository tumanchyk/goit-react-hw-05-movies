import MovieItem from "pages/MoviesItem";
import { Link } from "react-router-dom";
import { CardTitle, MovieCard, Image, Raiting, ImgContainer, MovieSet } from "./MovieList.styled";

const EP_IMG= 'https://image.tmdb.org/t/p/w500'
const exmp ='/kqjL17yufvn9OVLyXYpvtyrFfak.jpg'

const MovieList = ({set, way}) =>{
   return <MovieSet>
    {set.map(item => <MovieCard key={item.id}>
      <Link to = {way ? `${way}/${item.id}` : `${item.id}`}>
         <ImgContainer>
         <Image src={`${EP_IMG}${item.backdrop_path}`}></Image>
         </ImgContainer>
         <CardTitle>{item.title}</CardTitle>
      </Link>
      </MovieCard>)}
   </MovieSet>
}
export default MovieList