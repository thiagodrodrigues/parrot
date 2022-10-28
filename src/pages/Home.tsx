import NavBar from "../components/NavBar"
import NewPost from "../components/NewPost"
// arquivo json só para testes:
import faker from '../assets/faker.json'
import Post from "../components/Post"
import api from "../services/MainApi/config/";
import { useEffect } from "react";

type HomeProps = {}

const Home = (props: HomeProps) => {

  const { vizinhos } = faker

  async function getPosts() {
    const dados = await api.get('/posts')
    console.log(dados)
  }

  useEffect(() => {

    getPosts()

  }, [])


  return (
    <div>
      {/* //componente do navbar */}
      <NavBar />
      {/* //componente de criação de post */}
      <NewPost/>
      {/* //componente para mostrar o feed de posts */}
      {vizinhos.map((vizinho)=>(
        <Post key={vizinho.id} id={vizinho.id} nome={vizinho.nome} apartment={vizinho.apartment} timestamp={vizinho.timestamp} post={vizinho.post}/>
      ))}
    </div>
  )
}

export default Home
