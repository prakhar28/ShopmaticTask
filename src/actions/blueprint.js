import API from 'src/api/base'

export const constructGenericAction = (method, requestName, url) => {
  return body => {
    let request = `${requestName}_REQUEST`
    let success = `${requestName}_SUCCESS`
    let failure = `${requestName}_FAILURE`

    return async dispatch => {
      dispatch({
        type: request
      })

      try {
        let response = await API[method](url, body)
        dispatch({
          type: success,
          payload: response
        })
        return response
      } catch (e) {
        if (e.status === 401) {
          return
        }
        dispatch({
          type: failure,
          payload: {
            error: e
          }
        })
        throw e
      }
    }
  }
}

export const contructGenericPOSTAction = (requestName, url) =>
  constructGenericAction('POST', requestName, url)

export const contructGenericPUTAction = (requestName, url) =>
  constructGenericAction('PUT', requestName, url)

export const contructGenericGETAction = (requestName, url) =>
  constructGenericAction('GET', requestName, url)
