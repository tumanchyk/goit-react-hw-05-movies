import styled from "@emotion/styled";
import { NavLink} from 'react-router-dom';


const Header = styled.header`
padding: 20px 100px;
background-color: #27C498;

`
const Container = styled.main`
padding: 0 100px;
margin: 0 auto;`

const StyledLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  &:not(:last-child){
 margin-right: 20px;
}
  &.active {
    color: orange;
  }
`;

export {StyledLink, Container, Header}