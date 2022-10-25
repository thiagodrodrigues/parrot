import { PostDetail } from '../components/Post.style'
import { Link } from 'react-router-dom';
import avatar from "../assets/avatar.png";


type PostProps = {
  id: string,
  nome: string,
  ap: number,
  timestamp: string,
  post: string
}


const Post = (props: PostProps) => {


  return (
    <PostDetail className='container'>
      <div className="row align-items-center">
      <img src={avatar} alt="foto de perfil" className=' col-lg-2 col-md-2 col-sm-2 col-3' />
      <div className='d-flex flex-column col-lg-10 col-md-10 col-sm-10 col-9 '>
          <Link to={`/${props.id}`}>{props.nome}-{props.ap}</Link>
          <p>{props.timestamp}</p> <br />
          <p className='post'>{props.post}</p>
      </div>
      </div>
    </PostDetail>
  )
}

export default Post
