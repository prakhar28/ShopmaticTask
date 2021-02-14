import React, { useEffect } from 'react'
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView
} from 'react-native'
import styles from './Home.style'
import { connect, useDispatch } from 'react-redux'
import { getSongsList } from 'src/actions/getTopSongs'
import { sortedSongs } from 'src/selectorFunctions/songsSorted'
import ScreenNames from 'src/constants/screens'
import TextComponent from 'src/components/text/TextComponent'
import TextTypes from '../../components/text/TextTypes'

const Home = ({ navigation, songsList }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSongsList())
  }, [])

  const renderSong = ({ item }) => {
    const imageUrl = item?.['im:image']
    return (
      <TouchableOpacity
        style={{
          marginHorizontal: 5,
          marginVertical: 15
        }}
        onPress={() => navigateToSongDetail(item)}>
        <Image
          source={{ uri: imageUrl[2]?.label }}
          style={{ height: 100, width: 100, borderWidth: 1 }}
          resizeMode={'contain'}
        />
      </TouchableOpacity>
    )
  }

  const navigateToSongDetail = item => {
    navigation.navigate(ScreenNames.songDetail, { item })
  }

  const renderList = () => {
    if (songsList) {
      const keys = Object.keys(songsList)
      return keys.map(data => {
        return (
          <View style={{ flex: 1 }}>
            <TextComponent title={data} type={TextTypes.headingText} />
            <FlatList
              data={songsList[data]}
              renderItem={item => renderSong(item)}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item?.id?.attributes?.['im:id']}
            />
          </View>
        )
      })
    }
  }

  return (
    <>
      <SafeAreaView style={styles.SafeAreaView2}>
        <ScrollView
          style={{ flex: 1, paddingHorizontal: 10, marginTop: 20 }}
          showsVerticalScrollIndicator={false}>
          {renderList()}
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const mapStateToProps = state => {
  return {
    songsList: sortedSongs(state?.topSongsReducer?.songsList)
  }
}

export default connect(mapStateToProps, null)(Home)
