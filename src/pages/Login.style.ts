import { Link } from 'react-router-dom'
import styled from 'styled-components'
import bg from '../assets/background.png'


export const LoginMain = styled.div`

  height: 100vh;
  background: url(${bg}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

`

export const BlankedBox = styled.div`

max-width: 487px;
max-height: 642px;
background-color: #FFFFFF;
border: 1px solid #C5C5C5;
padding: 72px 70px 65px 82px;


h2{
  text-transform: uppercase;
  margin: 28px 0 47px 0;
}

img{
  max-width: 171px;
}

form input{
  border-radius: 10px;
  border: 1px solid #919191;
  text-align: center;

}

input{
  min-width: 100%;
  height: 2.3rem;
  font-weight: 400;
  font-size: 24px;
  line-height: 25px;
}

textarea:focus, input:focus{
    outline: none;
}

button{
  background: #76BB4C;
	font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 25px;
  color: #000000;
	border: none;
	padding: 7px 120px;
	cursor: pointer;
	outline: none;
  border-radius: 10px;
}


`
export const Register= styled(Link)`
text-decoration: none;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 19px;
color: #555555;
display: block;
max-width: 8rem;
margin-top: 39px;

:hover{
  color: #555555;
}
`
