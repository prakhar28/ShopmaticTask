import React, { useState } from 'react'
import { SafeAreaView, View, TextInput, FlatList } from 'react-native'
import styles from './Search.style'
import { connect } from 'react-redux'
import RenderSearchList from './Search Components/RenderSearchList'

const Search = ({ navigation, songsList }) => {
  const [searchString, setSearchString] = useState('')
  const [sortedArray, setSortedArray] = useState([])
  const onHandleTextChange = value => {
    setSearchString(value)
    songListArray(value)
  }

  const songListArray = string => {
    const search = string.trim().toLowerCase()
    if (string.length === 0) {
      return setSortedArray([])
    }
    const searchedResult = songsList.filter(
      item =>
        item?.title?.label.toLowerCase().match(search) ||
        item?.['im:artist']?.label.toLowerCase().match(search)
    )
    return setSortedArray(searchedResult)
  }

  return (
    <>
      <SafeAreaView style={styles.SafeAreaView2}>
        <View style={styles.outerWrapper}>
          <View style={styles.searchContainer}>
            <TextInput
              placeholder={'Search'}
              value={searchString}
              onChangeText={value => onHandleTextChange(value)}
              style={styles.textComponent}
            />
          </View>
          <FlatList
            data={sortedArray}
            renderItem={({ item }) => <RenderSearchList item={item} />}
            showVerticalScrollIndicator={false}
            keyExtractor={item => item?.id?.attributes?.['im:id']}
          />
        </View>
      </SafeAreaView>
    </>
  )
}

const mapStateToProps = state => {
  return {
    songsList: state?.topSongsReducer?.songsList?.feed?.entry
  }
}

export default connect(mapStateToProps, null)(Search)
