import { StyleSheet } from 'react-native';
import { colorAqua, colorBlue } from './Constants';

const MyListStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colorBlue,
  },
  scrollContainer: {
    backgroundColor: colorAqua,
  },
  countContainer: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: colorAqua,
  },
  countText: {
    fontFamily: 'titillium-web',
    fontSize: 18,
    color: colorBlue,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  country: {
    fontFamily: 'titillium-web',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingBottom: 5,
  }
});

export default MyListStyles;
