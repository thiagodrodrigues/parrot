import { LoginMain, BlankedBox2, RegisterBtn } from './Login.style'
import { cadastroUsuario } from '../services/MainApi/usuarios'
import logo from '../assets/logocolorido.png'
import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'



const Register = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [apartment, setApartment] = useState<string>('')
    const [photo, setPhoto] = useState<string>('')

    const cadastro = async (event: FormEvent) =>{
      event.preventDefault()

      const payload = {
        name,
        email,
        password,
        apartment,
        photo,
        confirmPassword
      }

      try {
        const response = await cadastroUsuario(payload);
        if (response.status !== 201) {
          return console.log(response.status)

        }

        alert("Cadastro Efetuado com sucesso!");
      } catch (error) {
        alert("Deu Algo errado");
      }
    }

  return (
    <LoginMain className='d-flex align-items-center justify-content-center'>
      <BlankedBox2 >
          <div className="container ">
            <div className="row justify-content-center text-center" >
              <Link to={'/'}>
              <img src={logo} alt="logotipo" />
              </Link>
              <h2>Cadastro</h2>
              <form onSubmit={cadastro}>
              <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                  </label>
                  <input
                    id="name"
                    type="text"

                    placeholder='nome'
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
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
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmpassword" className="form-label">
                  </label>
                  <input
                    id="confirmpassword"
                    type="password"

                    placeholder='confirmar senha'
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="apartment" className="form-label">
                  </label>
                  <input
                    id="apartment"
                    type="text"

                    placeholder='unidade/apartamento'
                    value={apartment}
                    onChange={(event) => setApartment(event.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                  </label>
                  <input
                    id="link"
                    type="text"

                    placeholder='link da foto'
                    value={photo}
                    onChange={(event) => setPhoto(event.target.value)}
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
