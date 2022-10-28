
import { LoginMain, BlankedBox, Register } from './Login.style'
import logo from '../assets/logocolorido.png'
import { Link } from 'react-router-dom'

type Props = {}

const Login = (props: Props) => {
  return (
    <LoginMain className='d-flex align-items-center justify-content-center'>
      <BlankedBox >
          <div className="container ">
            <div className="row justify-content-center text-center" >
              <img src={logo} alt="logotipo" />
              <h2>Login</h2>
              <form >
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    placeholder='email'
                    // value={email}
                    // onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="form-control"
                    placeholder='senha'
                    // value={senha}
                    // onChange={(event) => setSenha(event.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <button type="submit" className=" ">
                    entrar
                  </button>
                </div>
              </form>
              <Register to={'/cadastro'}>
               <p>cadastrar-se</p>
              </Register>
            </div>
          </div>
      </BlankedBox>
    </LoginMain>
  )
}

export default Login
