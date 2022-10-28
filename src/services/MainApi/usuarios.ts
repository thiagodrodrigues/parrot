import api from './config'

interface UsuarioPayload {
  name: string,
  email: string,
  apartment: string,
  photo: string,
  password:string
}

export function cadastroUsuario(payload:UsuarioPayload) {
  return api.post('/perfil', payload)
}

export function listarUsuarios(token: string) {
  return api.get('/perfil', {
    headers: {
      Authorization: `JWT ${token}`,
    },
  })

}
