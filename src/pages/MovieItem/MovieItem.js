import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { getMovieInfo } from "API";
import { ButtonBack, IconBack, Title, Section, MovieInfo, SectionTitle, TextElem, MovieContainer, Image, ImgContainer } from "./MovieItem.styled";
import photo from 'not-found-image.jpg'
const EP_IMG= 'https://image.tmdb.org/t/p/w500';


const MovieItem = () =>{
const [movie, setMovie] = useState({})
const {id} = useParams();
const location = useLocation();
const locationRef = useRef(location.state?.from ?? '/movies')
useEffect(()=> {
getMovieInfo(id).then(setMovie)
}, [id])

const {title, backdrop_path , overview, vote_average} = movie;

// const country =(production_countries[0].name)
const country = 'uk'
const movieGenres = 'drama'
// const movieGenres = genres.map(genre => genre.name).join(', ')

    return <div>
        <ButtonBack to={locationRef.current}><IconBack/> Go back</ButtonBack>
         <MovieContainer>
             <ImgContainer>
                <Image src={backdrop_path ? `${EP_IMG}${backdrop_path}` : photo}></Image>
            </ImgContainer>  
            <MovieInfo>
                <Title>{title}</Title>
                 <Section>
                    <SectionTitle>Country:</SectionTitle>
                    <TextElem>{country}</TextElem>
                </Section>
                <Section>
                    <SectionTitle>Genres:</SectionTitle>
                    <TextElem>{movieGenres}</TextElem>
                 </Section>
    
                {vote_average > 0  &&  <Section>
                    <SectionTitle>Rating:</SectionTitle>
                    <TextElem> {vote_average.toFixed(1)}</TextElem>
                </Section>}
               
                
                    <SectionTitle>Overview</SectionTitle>
                    <TextElem >{overview}</TextElem>
                
            </MovieInfo> 
      
            </MovieContainer>
    
            <ul>
                <li><Link to='cast'>Cast</Link></li>
                <li><Link to='reviews'>Reviews</Link></li>
                </ul>
        <Outlet />
    </div>}

export default MovieItem