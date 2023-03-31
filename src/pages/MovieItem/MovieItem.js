import { Outlet, useParams, useLocation } from "react-router-dom";
import { useEffect, useState, useRef, Suspense } from "react";
import { getMovieInfo } from "API";
import { AdditionSection } from "components/Addition info/Addition";
import { ButtonBack, IconBack, Title, Section, MovieInfo, SectionTitle, TextElem, MovieContainer, Image, ImgContainer } from "./MovieItem.styled";
import photo from 'not-found-image.jpg'
const EP_IMG= 'https://image.tmdb.org/t/p/w500';


const MovieItem = () =>{
const [movie, setMovie] = useState({})
const [genres, setGenres] = useState([])
const {id} = useParams();
const location = useLocation();
const locationRef = useRef(location.state?.from ?? '/movies')
useEffect(()=> {
getMovieInfo(id).then(mow => {
    setMovie(mow)
    setGenres(mow.genres)})
}, [id])

const {title, backdrop_path , overview, vote_average, release_date} = movie;

    return <div>
        <ButtonBack to={locationRef.current}><IconBack/> Go back</ButtonBack>
         <MovieContainer>
             <ImgContainer>
                <Image src={backdrop_path ? `${EP_IMG}${backdrop_path}` : photo}></Image>
            </ImgContainer>  
            <MovieInfo>
                <Title>{title}</Title>
                 <Section>
                    <SectionTitle>Release:</SectionTitle>
                    <TextElem>{release_date}</TextElem>
                </Section>
                <Section>
                    <SectionTitle>Genres:</SectionTitle>
                    <TextElem>{genres.map(genre => genre.name).join(', ')}</TextElem>
                 </Section>
    
                {vote_average > 0  &&  <Section>
                    <SectionTitle>Rating:</SectionTitle>
                    <TextElem> {vote_average.toFixed(1)}</TextElem>
                </Section>}
               
                
                    <SectionTitle>Overview</SectionTitle>
                    <TextElem>{overview}</TextElem>
                
            </MovieInfo> 
            </MovieContainer>
        <AdditionSection/>
        <Suspense>  
            <Outlet />
        </Suspense>

    </div>}

export default MovieItem