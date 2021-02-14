import { contructGenericGETAction } from './blueprint'

export const getSongsList = contructGenericGETAction(
  'TOP_SONGS',
  'https://itunes.apple.com/us/rss/topalbums/limit=100/json'
)
