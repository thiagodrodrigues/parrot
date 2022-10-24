import NavBar from "../components/NavBar"
import NewPost from "../components/NewPost"

type HomeProps = {}

const Home = (props: HomeProps) => {
  return (
    <div>
      <NavBar />
      
      <NewPost/>
    </div>
  )
}

export default Home
