export const sortedSongs = data => {
  const newObj = {}
  const sortedData = data?.feed?.entry.reduce((acc, item) => {
    let arr = item?.category?.attributes?.label
    if (Array.isArray(newObj[arr])) {
      newObj[arr].push(item)
    } else {
      newObj[arr] = [item]
    }
    return newObj
  })
  return sortedData
}
