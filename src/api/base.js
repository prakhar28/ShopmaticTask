const apiWrapper = async (method, url, body, queryParams = {}) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }

  let query = Object.keys(queryParams)
    .map(q => encodeURIComponent(q) + '=' + encodeURIComponent(queryParams[q]))
    .join('&')

  let finalURL = `${url}?${query}`
  try {
    let response = await fetch(finalURL, {
      method,
      headers,
      body
    })
    if (response.status === 401) {
      throw {
        status: 401
      }
    }

    let formattedResponse = await response.json()

    if (response.ok === false) {
      throw formattedResponse
    }
    return formattedResponse
  } catch (e) {
    throw e
  }
}

let API = {
  GET: (path, queryParams) => apiWrapper('GET', path, null, queryParams),
  POST: (path, body) => apiWrapper('POST', path, body),
  PUT: (path, body) => apiWrapper('PUT', path, body)
}

export default API
