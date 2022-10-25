import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Post from "../components/Post";
import UserDetails from "../components/UserDetails";
// arquivo json só para testes:
import faker from '../assets/faker.json'
import { mapToStyles } from "@popperjs/core/lib/modifiers/computeStyles";


type ProfileProps = {}


const Profile = (props: ProfileProps) => {

  const { vizinhos } = faker

  const { id } = useParams()

  // Para filtrar apenas os dados do usuário do id
  const usuarios = vizinhos.filter(vizinho => vizinho.id === Number(id))
  console.log()

  //Para somar o número de posts do usuário
  const soma = usuarios.length

  //Acessar apenas o primeiro index para pegar os dados
  const data = usuarios[0]

  console.log(usuarios)

  return (
    <>
      <NavBar />
      <UserDetails nome={data.nome} ap={data.ap} email={data.email} id={Number(id)} posts={soma} />
      {usuarios.map((usuario) => (
        <Post key={id} id={Number(id)} nome={usuario.nome} timestamp={usuario.timestamp} ap={usuario.ap} post={usuario.post} />
      ))}

    </>
  )
}

export default Profile
