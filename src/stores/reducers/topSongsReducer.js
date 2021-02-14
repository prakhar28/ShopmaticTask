const initialState = {
  songsList: {},
  isLoading: false
}

export const topSongsReducer = (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {
    case 'TOP_SONGS_REQUEST':
      return {
        ...state,
        isLoading: true
      }

    case 'TOP_SONGS_SUCCESS':
      return {
        ...state,
        songsList: payload,
        isLoading: false
      }
    case 'TOP_SONGS_FAILED':
      return {
        ...state,
        isLoading: false
      }

    default:
      return state
  }
}

export default topSongsReducer
