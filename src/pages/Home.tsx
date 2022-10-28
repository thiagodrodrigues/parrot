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
  const [users, setUsers] = useState([])
  const [teste, setTeste] = useState([])

  //pegar os usuarios vindo do backend
  async function getUsers() {
    const { data } = await api.get('/perfil')

    setUsers(data)
  }

  //pegar os posts vindo do backend
  async function getPosts() {
    const { data } = await api.get('/feed')

    setPosts(data)
  }

  useEffect(() => {

    getPosts()
    getUsers()

  }, [])


  return (
    <div>
      {/* //componente do navbar */}
      <NavBar />
      {/* //componente de criação de post */}
      <NewPost/>
      {/* //componente para mostrar o feed de posts */}
      {posts.map((post)=>(
        <Post key={post.idPost} id={post.idPost} nome={'teste'} apartment={'31'} timestamp={'0000'} post={post.content}/>
      ))}
    </div>
  )
}

export default Home
