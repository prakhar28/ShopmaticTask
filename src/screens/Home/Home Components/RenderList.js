import React from 'react'
import { FlatList, View } from 'react-native'
import styles from '../Home.style'
import TextComponent from '../../../components/text/TextComponent'
import TextTypes from '../../../components/text/TextTypes'
import RenderSong from './RenderSong'
const RenderList = ({ songsList, data, navigateToSongDetail }) => {
  return (
    <>
      <View style={styles.renderListContainer}>
        <TextComponent title={data} type={TextTypes.headingText} />
        <FlatList
          data={songsList[data]}
          renderItem={({ item }) => (
            <RenderSong
              item={item}
              navigateToSongDetail={navigateToSongDetail}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item?.id?.attributes?.['im:id']}
        />
      </View>
    </>
  )
}

export default RenderList
