import styled from "@emotion/styled";

const CastList = styled.ul`
display: flex;
flex-wrap: wrap;
align-items: center;
margin: -7px;
padding: 50px 0;
`
const CastCard = styled.li`
margin: 7px;
width: 237px;
padding-bottom: 15px;
border: 1px solid lightgrey;
`
const ImgContainer = styled.div`
width: 100%;
height: 300px;
position: relative;
`
const Image = styled.img`
display: block;
 height: 100%;
 width: 100%;
 object-fit: cover;`

 const Name = styled.h3`
 text-align: center;
 font-size: 18px;
 font-weight: 600;
 margin: 15px 0;
 `
 const Character = styled.p`
 font-size: 16px;
 margin-left: 15px;
 `

 export {CastList, CastCard, Image, ImgContainer, Name, Character}