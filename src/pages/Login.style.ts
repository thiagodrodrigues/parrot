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

form{

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
