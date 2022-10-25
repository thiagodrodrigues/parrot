import NavBar from "../components/NavBar"
import NewPost from "../components/NewPost"
import vizinhanca from '../assets/faker.json'
import Post from "../components/Post"

type HomeProps = {}

const Home = (props: HomeProps) => {


  return (
    <div>
      <NavBar />

      <NewPost/>
      <Post id="1" nome="Jeffrey" ap={231} timestamp="10/06/2022 09:00" post="Poxa galera, vamos respeitar o horário de silêncio!
Tinha alguém usando furadeira 2 HORAS DA MANHÃ!!! ó_ó" />
    </div>
  )
}

export default Home
