import React from 'react'
import { SafeAreaView, View, Image, TouchableOpacity } from 'react-native'
import styles from './SongDetailStyle'
import TextComponent from '../../components/text/TextComponent'
import TextTypes from '../../components/text/TextTypes'
import Icon from 'react-native-vector-icons/Ionicons'
import Color from '../../constants/colors'

const SongDetail = ({ navigation, route }) => {
  const {
    params: { item }
  } = route
  const imageUrl = item?.['im:image'][2]?.label
  return (
    <>
      <SafeAreaView style={styles.SafeAreaView2}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.touchableComponent}>
            <Icon name={'arrow-back'} size={25} color={Color.black} />
          </TouchableOpacity>
          <TextComponent
            title={'Song Detail'}
            type={TextTypes.headingText}
            style={styles.headingText}
          />
          <View />
        </View>
        <View style={styles.outerWrapper}>
          <Image
            source={{ uri: `${imageUrl}` }}
            style={styles.songImage}
            resizeMode={'contain'}
          />
          <View style={styles.detailsContainer}>
            <TextComponent
              title={item?.title?.label}
              type={TextTypes.headingText}
            />
            <TextComponent
              title={`Artist - ${item?.['im:artist']?.label}`}
              type={TextTypes.bodyText}
            />
            <TextComponent
              title={`Category - ${item?.category?.attributes?.label}`}
              type={TextTypes.bodyText}
            />
            <TextComponent
              title={`Release Date - ${item?.['im:releaseDate']?.attributes?.label}`}
              type={TextTypes.bodyText}
            />
            <TextComponent
              title={`Price - ${item?.['im:price']?.label}`}
              type={TextTypes.bodyText}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

export default SongDetail
