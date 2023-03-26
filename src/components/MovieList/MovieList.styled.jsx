import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const MovieSet = styled.ul`
display: flex;
flex-wrap: wrap;
margin: -10px;
`
 const MovieCard = styled.li`
 width: 300px;
margin: 10px;
 `
 const MovieLink = styled(Link)`
 text-decoration: none`
 
 const ImgContainer = styled.div`
 width: 100%;
 height: 350px;
 position: relative;
 `
 const Image = styled.img`
 display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;`

  const Rating = styled.span`
  display: flex;
  align-items: center;
  font-size: 13px;
  padding: 5px 10px;
  background-color: #cf6679;
  position: absolute;
  top: 15px;
  right: 0;`

  const Star = styled(AiFillStar)`
  width: 15px;
  height: 15px;
  margin-right: 10px;`


  
  const CardTitle = styled.h2`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  `

  export {MovieSet, CardTitle, MovieCard, Image, Rating, ImgContainer, MovieLink, Star}