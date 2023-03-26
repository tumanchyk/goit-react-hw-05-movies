import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ViewSection = styled(Link)`
text-decorate: none;
margin-right: 20px;
&:active{
    color: #03dac6;
}
&:hover{
    font-weight: 600;
  }
`