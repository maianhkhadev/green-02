import axios from 'axios'

export const getUsers = () => {
  return axios.get('https://62fce1886e617f88dea01ce7.mockapi.io/users/')
}

export const getUser = (id) => {
  return axios.get(`https://62fce1886e617f88dea01ce7.mockapi.io/users/${id}`)
}

export const createUser = (formData) => {
  return axios.post('https://62fce1886e617f88dea01ce7.mockapi.io/users/', formData)
}

export const editUser = (id, formData) => {
  return axios.put(`https://62fce1886e617f88dea01ce7.mockapi.io/users/${id}`, formData)
}

export const deleteUser = (id) => {
  return axios.delete(`https://62fce1886e617f88dea01ce7.mockapi.io/users/${id}`)
}
