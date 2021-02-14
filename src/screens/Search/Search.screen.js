import React, { useState } from 'react'
import { SafeAreaView, View, TextInput, FlatList, Image } from 'react-native'
import styles from './Search.style'
import TextComponent from '../../components/text/TextComponent'
import TextTypes from '../../components/text/TextTypes'
import { connect } from 'react-redux'

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

  const renderFlatlist = item => {
    const imageUrl = item?.['im:image'][1]?.label
    return (
      <View
        style={{
          flexDirection: 'row',
          borderWidth: 0.5,
          marginTop: 10,
          marginHorizontal: 10,
          flex: 1,
          flexWrap: 'wrap'
        }}>
        <Image
          source={{ uri: imageUrl }}
          style={{
            width: 60,
            height: 60,
            marginRight: 10
          }}
          resizeMode={'contain'}
        />
        <View style={{ flex: 1 }}>
          <TextComponent
            title={item?.['im:name']?.label}
            type={TextTypes.bodyText}
          />
        </View>
      </View>
    )
  }
  return (
    <>
      <SafeAreaView style={styles.SafeAreaView2}>
        <View style={styles.outerWrapper}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 5,
              borderColor: '#000',
              borderWidth: 0.5,
              height: 55,
              paddingHorizontal: 10,
              marginHorizontal: 10,
              marginTop: 10
            }}>
            <TextInput
              placeholder={'Search'}
              value={searchString}
              onChangeText={value => onHandleTextChange(value)}
              style={{ flex: 1 }}
            />
          </View>
          <FlatList
            data={sortedArray}
            renderItem={({ item }) => renderFlatlist(item)}
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
