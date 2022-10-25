import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Post from "../components/Post";
// arquivo json só para testes:
import faker from '../assets/faker.json'
import { mapToStyles } from "@popperjs/core/lib/modifiers/computeStyles";


type ProfileProps = {}


const Profile = (props: ProfileProps) => {

  const { vizinhos } = faker

  const { id } = useParams()

  const usuarios = vizinhos.filter(vizinho => vizinho.id === Number(id))
  console.log()


  return (
    <>
      <NavBar />

      {usuarios.map((usuario) => (
        <Post id={Number(id)} nome={usuario.nome} timestamp={usuario.timestamp} ap={usuario.ap} post={usuario.post} />
      ))}

    </>
  )
}

export default Profile
