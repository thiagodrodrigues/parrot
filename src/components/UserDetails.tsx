import { UserDetail, Data } from './UserDetails.style'
import { Link } from 'react-router-dom';
import avatar from "../assets/avatar.png";

type UserDetailsProps = {
  id: number,
  nome: string,
  ap: number,
  email: string,
  posts: number
}

const UserDetails = (props: UserDetailsProps) => {
  return (
    <UserDetail>
      <div>
        <div className="row align-items-center">
          <img src={avatar} alt="foto de perfil" className=' col-lg-2 col-md-2 col-sm-2 col-3' />
          <Data className='d-flex flex-column col-lg-10 col-md-10 col-sm-10 col-9 '>
            <h1>{props.nome}</h1>
            <p>{props.ap}</p>
            <p>{props.email}</p>
            <p><pre>{props.posts}</pre> {props.posts > 1 ? "publicações" : "publicação"}</p>
          </Data>
        </div>
        {/* botão de editar que deve aparecer somente pro usuário logado*/}
      </div>
    </UserDetail>
  )
}

export default UserDetails
