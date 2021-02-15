import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import styles from '../Search.style'
import TextComponent from '../../../components/text/TextComponent'
import TextTypes from '../../../components/text/TextTypes'

const RenderSearchList = ({ item, navigateToSongDetail }) => {
  const imageUrl = item?.['im:image'][1]?.label
  return (
    <>
      <TouchableOpacity
        style={styles.flatlistContainer}
        onPress={() => navigateToSongDetail(item)}>
        <Image
          source={{ uri: imageUrl }}
          style={styles.imageContainer}
          resizeMode={'contain'}
        />
        <View style={styles.textComponent}>
          <TextComponent
            title={item?.['im:name']?.label}
            type={TextTypes.bodyText}
          />
        </View>
      </TouchableOpacity>
    </>
  )
}

export default RenderSearchList
