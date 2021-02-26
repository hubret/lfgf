import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://data.lfgf.ca',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
})

export default {
  send: payload => apiClient.post('/forms', payload)
}