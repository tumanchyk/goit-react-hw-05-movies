import styled from "@emotion/styled";
import { AiOutlineSearch } from "react-icons/ai";
const Text = styled.p`
font-weight: 500;
margin-bottom: 20px;
text-transform: uppercase;
`
 const Form = styled.form`
 display: flex;
 margin-bottom: 40px;
 width: 350px;
 border-radius: 10px;
 overflow: hidden;`

 const Input = styled.input`
 font-size: 16px;
 padding: 10px;
 outline: none;
 width: 100%;
 border: none;
 `
 const Button = styled.button`
 border: 1px solid lightgrey;
 display: flex;
 justify-content: center; 
 align-items: center;
 background-color: #02b3a2;
 cursor: pointer;
 `
 const IconSearch = styled(AiOutlineSearch)`
 width: 20px;
 height: 20px;
 fill: #fff;
 `
 export {Form, Input, Button, IconSearch, Text}