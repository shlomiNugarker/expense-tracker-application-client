import axios from 'axios'

export const proxyService = { get, post, put, remove }

const BASE_URL =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000'

async function get(endpoint: string) {
  try {
    const res = await axios.get(BASE_URL + endpoint)
    return res.data
  } catch (err) {
    console.error(err)
    throw err
  }
}

async function post<T>(endpoint: string, data: T) {
  try {
    const res = await axios.post(BASE_URL + endpoint, data)
    return res.data
  } catch (err) {
    console.error(err)
    throw err
  }
}

async function put<T>(endpoint: string, data: T) {
  try {
    const res = await axios.put(BASE_URL + endpoint, data)
    return res.data
  } catch (err) {
    console.error(err)
    throw err
  }
}

async function remove(endpoint: string) {
  try {
    const res = await axios.delete(BASE_URL + endpoint)
    return res.data
  } catch (err) {
    console.error(err)
    throw err
  }
}
