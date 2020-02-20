import { StyleSheet } from 'react-native';
import { colorBlue, colorDarkGrey } from './Constants';

const MyListStyles = StyleSheet.create({
  safeViewContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colorBlue,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  countContainer: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: 'white',
  },
  countText: {
    fontFamily: 'titillium-web',
    fontSize: 24,
    color: colorBlue,
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 30,
    paddingRight: 30,
  },
  country: {
    fontFamily: 'titillium-web',
    fontSize: 20,
    color: colorDarkGrey,
    textAlign: 'center',
    paddingBottom: 5,
  },
});

export default MyListStyles;
