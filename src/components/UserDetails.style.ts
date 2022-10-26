import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const UserDetail = styled.div`

  max-width: 700px;
  border: 1px solid rgba(197, 197, 197, 1);
  border-width: 0px 1px 1px 1px;
  min-height: 135px;

  a{
    margin-left: 0;
    margin-top: 29px;
    text-decoration:none;
    text-transform: capitalize;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #76BB4C;

  }

  h1{
    margin-left: 0;
    padding-top: 43px;
    font-family: 'Questrial';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 25px;
    color: #76BB4C;
    text-transform: capitalize;
  }

  p{
    margin-left: 0;
    font-family: 'Questrial';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #000000;

  }



  img{
     max-width: 100px;
    max-height: 70px;
    padding: 0 0 0 35px ;



  }

  .editar_perfil{
    margin: 0;
  }

  .botao_editar{
    margin: 0;
  }

`
export const Data = styled.div`


  pre{
    color: #6033AA;
    display: inline;
    font-family: 'Questrial';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;

  }
`
export const EditProfile = styled(Link)`
    margin: 0;
    display: block;
  p{
    text-transform: lowercase;
    background: #76BB4C;
    border-radius: 30px;
    margin-right: 4rem;
    margin-top: 2.4rem;
    color: #FFFFFF;
    padding: 8px 24px;


  }

`
