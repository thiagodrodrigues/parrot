import { UserDetail, Data, EditProfile } from './UserDetails.style'
import avatar from "../assets/avatar.png";

type UserDetailsProps = {
  id: number,
  nome: string,
  apartment: number,
  email: string,
  posts: number
}

const UserDetails = (props: UserDetailsProps) => {
  return (
    <UserDetail>
      <div className='editar_perfil d-flex justify-content-between'>
        <div className="row align-items-center ">
          <img src={avatar} alt="foto de perfil" className=' col-lg-6 col-md-6 col-sm-6 col-6' />
          <Data className='d-flex flex-column col-lg-6 col-md-6 col-sm-6 col-6 '>
            <h1>{props.nome}</h1>
            <p>{props.apartment}</p>
            <p>{props.email}</p>
            <p><pre>{props.posts}</pre> {props.posts > 1 ? "publicações" : "publicação"}</p>
          </Data>
        </div>
        {/* botão de editar que deve aparecer somente pro usuário logado*/}
        <div className='botao_editar'>
          <EditProfile to={`/edit/${props.id}`}>
            <p>editar perfil</p>
          </EditProfile>
        </div>
      </div>
    </UserDetail>
  )
}

export default UserDetails
