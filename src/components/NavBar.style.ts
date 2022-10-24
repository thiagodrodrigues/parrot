import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
  background: #FFFFFF;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.08);
  padding: 18px 48px;
`

export const Logo = styled(Link)`
  max-width: 100%;
  margin: 0;

`

export const Menu = styled.p`
  font-family: 'Questrial';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 25px;
  color: #76BB4C;
  margin: 0;

  a{
    text-decoration: none;
    font-family: 'Questrial';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #6033AA;}
`
