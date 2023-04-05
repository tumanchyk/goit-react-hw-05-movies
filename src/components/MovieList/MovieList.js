import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { CardTitle, MovieCard, Image, Rating, ImgContainer, MovieSet, MovieLink, Star, Favorite, FavoriteIcon, FillHeart } from "./MovieList.styled";
import photo from 'not-found-image.jpg';
const EP_IMG= 'https://image.tmdb.org/t/p/w500';



const MovieList = ({set, state}) =>{
const [saved, setSaved]= useState([]);

useEffect(() => {
   const savedFavorite = JSON.parse(window.localStorage.getItem('FavoriteMovie')) ?? [];
   if(savedFavorite.length) {
      setSaved(savedFavorite)  
    }
}, []);

useEffect(() =>{
         if(saved.length){
            window.localStorage.setItem('FavoriteMovie', JSON.stringify(saved)) 
         }
}, [saved])

   const onHeartClick = (item) =>{
      if(saved.some(el => el.id === item.id)){
         if(item.id === saved[0].id && saved.length === 1){
            window.localStorage.removeItem('FavoriteMovie')
         }
         const filtered = saved.filter(elem => elem.id !== item.id);
         setSaved([...filtered])
         return
      } 
      setSaved([item, ...saved])
   }

   return <MovieSet>
    { set.map(({id, title, vote_average, backdrop_path, poster_path}) => 
        
    <MovieCard key={id}>
      <Favorite onClick = {(e) => {
               if(e.target.nodeName === 'path' || e.target.nodeName === 'svg'){
                onHeartClick({id, title, vote_average, backdrop_path, poster_path}) } 
               }}>
                  { saved.some(el => el.id === id) ?  <FillHeart/> : <FavoriteIcon/>}
      </Favorite>  
      <MovieLink to ={`/movies/${id}`} state={state}>
         <ImgContainer>
         <Image src={backdrop_path&&poster_path ? `${EP_IMG}${backdrop_path || poster_path}` : photo}/>
        {vote_average > 0  &&  <Rating>
            <Star/>
            {vote_average.toFixed(1)}</Rating>}      
            <CardTitle><h2>{title}</h2></CardTitle>
         </ImgContainer>
      </MovieLink>
      
      </MovieCard>
      )
      }
   </MovieSet>
}

MovieList.protoTypes = {
   set: PropTypes.array.isRequired,
   state: PropTypes.object.isRequired
}

export default MovieList
