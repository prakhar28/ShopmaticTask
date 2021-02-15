import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 10,
    paddingHorizontal: 10
  },
  SafeAreaView2: { backgroundColor: '#FFF' },
  headerContainer: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headingText: {
    paddingRight: 16
  },
  outerWrapper: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: '#FFF',
    flexDirection: 'row',
    marginTop: 20
  },
  songImage: {
    width: 140,
    height: 140,
    flex: 0.8
  },
  detailsContainer: {
    flex: 1,
    paddingRight: 5
  },
  text: { fontSize: 18, color: '#808080', fontWeight: 'bold' },
  touchableComponent: {
    marginLeft: 5
  }
})
