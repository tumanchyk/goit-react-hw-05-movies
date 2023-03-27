import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const ViewSection = styled(NavLink)`
text-decoration: none;
margin-right: 20px;
margin-top: 30px;
font-size: 20px;
color: #eee;
&.active{
    color: #03dac6;
    font-size: 30px;
    font-weight: 700;
}
&:hover{
    font-weight: 700;
  }
`
export const  AdditionList = styled.div`
display: flex;
align-items: flex-end;`