import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const ButtonBack = styled(Link)`
font-size: 16px;
display: flex;
align-items: center;
text-decoration: none;
color: #fff;
&:hover{
  color: #03dac6
}

`
const IconBack = styled(BsArrowLeft)`
width: 20px;
height: 20px;
margin-right: 10px;
fill: currentColor;
`
const MovieContainer = styled.div`
display: flex;
margin: 30px 0`

const ImgContainer = styled.div`
height: 350px;
min-width: 250px;
max-width: 300px;
`
const Image = styled.img`
 display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
  `
   const MovieInfo = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   margin-left: 35px;
   `
   const Title = styled.h1`
   font-size: 32px;
   margin-bottom: 20px;
   `
   const Section = styled.div`
   display: flex;
   font-size: 18px;
   padding: 10px 0`


   const SectionTitle = styled.h2`
   font-weight: 600;
   font-size: 18px;
   margin-right: 10px;
   &:not(:last-child){
    margin-bottom: 10px;
   }`
   
   const TextElem = styled.p`
   &:not(:last-child){
    margin-bottom: 10px;
   }`

   export {ButtonBack, IconBack, Title, Section, MovieInfo, SectionTitle, TextElem, MovieContainer, Image, ImgContainer}