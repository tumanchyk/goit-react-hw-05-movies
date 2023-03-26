import { Outlet } from 'react-router-dom';
import { StyledLink, Container, Header, Nav } from './Layout.styled';
 const Layout = () =>{
    return <>
        <Header>
        <Nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
        </Nav>
    </Header>
    <Container><Outlet /></Container>
    </>  
 }

 export default Layout