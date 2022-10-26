import { NotFound } from "./NoPost.style";
import parrot from '../assets/icone.png'

type NoPostProps = {}

const NoPost = (props: NoPostProps) => {
  return (
    <NotFound className="d-flex flex-column">
      <h2>Você ainda não fez nenhuma publicação :(</h2>
      <img src={parrot} alt="logotipo de papagaio" />
    </NotFound>
  )
}

export default NoPost
