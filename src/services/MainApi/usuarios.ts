import api from './config'

interface UsuarioPayload {
  name: string,
  email: string,
  apartment: string,
  photo: string,
  password:string,
  confirmPassword: string
}

export function cadastroUsuario(payload:UsuarioPayload) {
  return api.post('/cadastro', payload)
}

export function listarUsuarios(token: string) {
  return api.get('/perfil', {
    headers: {
      Authorization: `JWT ${token}`,
    },
  })

}
