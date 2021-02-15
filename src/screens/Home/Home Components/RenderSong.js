import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import styles from '../Home.style'

const RenderSong = ({ navigateToSongDetail, item }) => {
  const imageUrl = item?.['im:image'][2]?.label
  return (
    <>
      <TouchableOpacity
        style={styles.renderSongComponent}
        onPress={() => navigateToSongDetail(item)}>
        <Image
          source={{ uri: imageUrl }}
          style={styles.songImage}
          resizeMode={'contain'}
        />
      </TouchableOpacity>
    </>
  )
}

export default RenderSong
