import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://data.lfgf.ca',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
})

export default {
  send: payload => apiClient.post('/api/forms/submit/application?token=006d912aefd6540ef4e6f45c4852ae', payload)
}