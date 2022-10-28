import NavBar from "../components/NavBar"
import NewPost from "../components/NewPost"
// arquivo json só para testes:
import faker from '../assets/faker.json'
import Post from "../components/Post"
import api from "../services/MainApi/config/";
import { useEffect, useState } from "react";

type HomeProps = {}

const Home = (props: HomeProps) => {

  const { vizinhos } = faker
  const [posts, setPosts] = useState([])




  //pegar os posts vindo do backend
  async function getPosts() {
    const { data } = await api.get('/feed')

    setPosts(data)
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
