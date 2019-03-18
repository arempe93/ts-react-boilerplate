import 'whatwg-fetch'

export const BASE_URL = 'http://localhost:3000/api'

const responseHandler = (response: Response) => {
  if (response.status < 300) return response.json()
  throw response
}

const get = (url: string) => (
  fetch(`${BASE_URL}${url}`, {
    headers: {
      Accept: 'application/json'
    }
  })
    .then(responseHandler)
)

const post = (url: string, body: object = {}) => (
  fetch(`${BASE_URL}${url}`, {
    body: JSON.stringify(body),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST'
  })
    .then(responseHandler)
)

const del = (url: string, body: object = {}) => (
  fetch(`${BASE_URL}${url}`, {
    body: JSON.stringify(body),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'DELETE'
  })
    .then(responseHandler)
)

export default {
  del,
  get,
  post
}
