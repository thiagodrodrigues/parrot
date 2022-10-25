import { UserDetail } from './UserDetails.style'
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
          <div className='d-flex flex-column col-lg-10 col-md-10 col-sm-10 col-9 '>
            <h1>{props.nome}</h1>
            <p>{props.ap}</p>
            <p>{props.email}</p>
            <p>{props.posts} publicações</p>
          </div>
        </div>
        {/* botão de editar */}
      </div>
    </UserDetail>
  )
}

export default UserDetails
