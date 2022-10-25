import NavBar from "../components/NavBar"
import NewPost from "../components/NewPost"
import faker from '../assets/faker.json'
import Post from "../components/Post"

type HomeProps = {}

const Home = (props: HomeProps) => {

  const { vizinhos } = faker


  return (
    <div>
      <NavBar />

      <NewPost/>
      <Post id={1} nome="Jeffrey" ap={231} timestamp="10/06/2022 09:00" post="Poxa galera, vamos respeitar o horário de silêncio!
      Tinha alguém usando furadeira 2 HORAS DA MANHÃ!!! ó_ó" />
      {vizinhos.map((vizinho)=>(
        <Post key={vizinho.id} id={vizinho.id} nome={vizinho.nome} ap={vizinho.ap} timestamp={vizinho.timestamp} post={vizinho.post}/>
      ))}
    </div>
  )
}

export default Home
