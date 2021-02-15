import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 10,
    paddingHorizontal: 10
  },
  SafeAreaView2: { flex: 1, backgroundColor: '#FFF' },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#000',
    borderWidth: 0.5,
    height: 55,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginTop: 10
  },
  textComponent: {
    flex: 1
  },
  flatlistContainer: {
    flexDirection: 'row',
    borderWidth: 0.5,
    marginTop: 10,
    marginHorizontal: 10,
    flex: 1,
    flexWrap: 'wrap'
  },
  imageContainer: {
    width: 60,
    height: 60,
    marginRight: 10
  },
  outerWrapper: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF'
  },
  buttonStyle: {
    backgroundColor: '#EEE',
    paddingHorizontal: 40,
    paddingVertical: 30,
    borderWidth: 0.5,
    borderColor: '#F0F0F0',
    borderRadius: 10
  },
  text: { fontSize: 18, color: '#808080', fontWeight: 'bold' }
})
