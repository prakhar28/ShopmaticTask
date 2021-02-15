import React, { useEffect } from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import styles from './Home.style'
import { connect, useDispatch } from 'react-redux'
import { getSongsList } from 'src/actions/getTopSongs'
import { sortedSongs } from 'src/selectorFunctions/songsSorted'
import ScreenNames from 'src/constants/screens'
import RenderList from './Home Components/RenderList'

const Home = ({ navigation, songsList }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSongsList())
  }, [])

  const navigateToSongDetail = item => {
    navigation.navigate(ScreenNames.songDetail, { item })
  }

  const renderList = () => {
    if (songsList) {
      const keys = Object.keys(songsList)
      return keys.map(data => {
        return (
          <RenderList
            songsList={songsList}
            data={data}
            navigateToSongDetail={navigateToSongDetail}
          />
        )
      })
    }
  }

  return (
    <>
      <SafeAreaView style={styles.SafeAreaView2}>
        <ScrollView
          style={styles.scrollViewContainer}
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
