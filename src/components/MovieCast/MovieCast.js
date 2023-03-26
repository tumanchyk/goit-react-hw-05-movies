import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "API";
import { CastList, CastCard, Image, ImgContainer, Name, Character } from "components/Cast/Cast.styled";
import photo from 'not-found-image.jpg';

const EP_IMG= 'https://image.tmdb.org/t/p/w500';


const Cast = () =>{
    const [cast, setCast] = useState({})
    const {id} = useParams();
    useEffect(()=> {
        // const foo = async () =>{
        //     const response = await getMovieCast(id)
        //     setCast(response)
        // }
        // foo()
        getMovieCast(id).then(setCast)
    }, [id])

        console.log(cast)

    return <CastList>
        {cast && cast.map(({id, name, character, profile_path}) => {
            return (  <CastCard key={id}>
                <ImgContainer>
                   <Image src={profile_path ? `${EP_IMG}${profile_path}` : photo}/>
                </ImgContainer>
                <Name>{name}</Name>
                <Character>Character: {character}</Character>
               </CastCard>)
        }
       )
        }

    </CastList>
}
export default Cast