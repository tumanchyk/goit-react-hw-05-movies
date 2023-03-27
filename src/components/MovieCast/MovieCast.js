import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "API";
import { CastList, CastCard, Image, ImgContainer, Name, Character,InfoContainer } from "components/MovieCast/Cast.styled";
import photo from 'not-found-image.jpg';

const EP_IMG= 'https://image.tmdb.org/t/p/w500';


const Cast = () =>{
    const [cast, setCast] = useState([])
    const {id} = useParams();
    useEffect(()=> {
        getMovieCast(id).then(setCast)
    }, [id])

    return <CastList>
        {cast && cast.map(({id, name, character, profile_path}) => {
            return (  <CastCard key={id}>
                <ImgContainer>
                   <Image src={profile_path ? `${EP_IMG}${profile_path}` : photo}/>
                </ImgContainer>
               <InfoContainer>
               <Name>{name}</Name>
                <Character>Character: {character}</Character>
                </InfoContainer> 
               </CastCard>) }
       )
        }

    </CastList>
}
export default Cast