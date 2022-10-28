import { LoginMain, BlankedBox2, RegisterBtn } from './Login.style'
import logo from '../assets/logocolorido.png'
type RegisterProps = {}

const Register = (props: RegisterProps) => {
  return (
    <LoginMain className='d-flex align-items-center justify-content-center'>
      <BlankedBox2 >
          <div className="container ">
            <div className="row justify-content-center text-center" >
              <img src={logo} alt="logotipo" />
              <h2>Cadastro</h2>
              <form >
              <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                  </label>
                  <input
                    id="name"
                    type="text"

                    placeholder='nome'
                    // value={email}
                    // onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                  </label>
                  <input
                    id="email"
                    type="email"

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

                    placeholder='senha'
                    // value={senha}
                    // onChange={(event) => setSenha(event.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmpassword" className="form-label">
                  </label>
                  <input
                    id="confirmpassword"
                    type="password"

                    placeholder='confirmar senha'
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="apartment" className="form-label">
                  </label>
                  <input
                    id="apartment"
                    type="text"

                    placeholder='unidade/apartamento'
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                  </label>
                  <input
                    id="link"
                    type="text"

                    placeholder='link da foto'
                    // value={email}
                    // onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <button type="submit" className=" ">
                    pronto
                  </button>
                </div>
              </form>
            </div>
          </div>
      </BlankedBox2>
    </LoginMain>
  )
}

export default Register
