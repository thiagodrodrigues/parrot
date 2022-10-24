import { Link } from "react-router-dom"
import { Nav, Logo, Menu } from './NavBar.style'
import logo from '../assets/logonav.png'

type NavProps = {}

const NavBar = (props: NavProps) => {
  return (
      <Nav className="d-flex justify-content-between align-items-center">
        <Logo to='/'>
          <img src={logo} alt="desenho da marca" />
        </Logo>
        <Menu>
          Olá usuário | <Link to='#'>sair</Link>
        </Menu>
      </Nav>

  )
}

export default NavBar
