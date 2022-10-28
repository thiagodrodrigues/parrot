
import { LoginMain, BlankedBox, RegisterBtn } from './Login.style'
import logo from '../assets/logocolorido.png'
import { FormEvent, useState } from 'react'
import { login } from '../services/MainApi/login'


type LoginProps = {}

const Login = (props: LoginProps) => {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const response = await login({email, senha})
      console.log(response.data)
      alert('funcionou')

    } catch (error) {
      alert('Algo está errado')
      console.log(error)
    }
  }

  return (
    <LoginMain className='d-flex align-items-center justify-content-center'>
      <BlankedBox >
          <div className="container ">
            <div className="row justify-content-center text-center" >
              <img src={logo} alt="logotipo" />
              <h2>Login</h2>
              <form onSubmit={submit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                  </label>
                  <input
                    id="email"
                    type="email"

                    placeholder='email'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                  </label>
                  <input
                    id="password"
                    type="password"

                    placeholder='senha'
                    value={senha}
                    onChange={(event) => setSenha(event.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <button type="submit" className=" ">
                    entrar
                  </button>
                </div>
              </form>
              <RegisterBtn to={'/cadastro'}>
               <p>cadastrar-se</p>
              </RegisterBtn>
            </div>
          </div>
      </BlankedBox>
    </LoginMain>
  )
}

export default Login
