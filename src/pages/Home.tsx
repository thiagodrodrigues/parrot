import NavBar from "../components/NavBar"
import NewPost from "../components/NewPost"

type HomeProps = {}

const Home = (props: HomeProps) => {
  return (
    <div>
      <NavBar />
      <h1>Home</h1>
      <NewPost/>
    </div>
  )
}

export default Home
