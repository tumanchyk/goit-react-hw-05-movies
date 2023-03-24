import styled from "@emotion/styled";
const MovieSet = styled.ul`
display: flex;
flex-wrap: wrap`
 const MovieCard = styled.li`
 width: 300px;
 `
 const ImgContainer = styled.div`
 width: 100%;
 height: 300px;
 `
 const Image = styled.img`
 display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;`

  const Raiting = styled.span`
  font-size: 12px;
  padding: 5px 10px;
  background-color: #cf6679`

  const CardTitle = styled.h2`
  font-size: 18px;
  font-weight: 600`

  export {MovieSet, CardTitle, MovieCard, Image, Raiting, ImgContainer}