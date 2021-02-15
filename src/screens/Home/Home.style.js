import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 10,
    paddingHorizontal: 10
  },
  SafeAreaView2: { flex: 1, backgroundColor: '#FFF' },
  outerWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF'
  },
  scrollViewContainer: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 20
  },
  buttonStyle: {
    backgroundColor: '#EEE',
    paddingHorizontal: 40,
    paddingVertical: 30,
    borderWidth: 0.5,
    borderColor: '#F0F0F0',
    borderRadius: 10
  },
  text: { fontSize: 18, color: '#808080', fontWeight: 'bold' },
  renderSongComponent: {
    marginHorizontal: 5,
    marginVertical: 15
  },
  songImage: {
    height: 100,
    width: 100,
    borderWidth: 1
  },
  renderListContainer: {
    flex: 1
  }
})
