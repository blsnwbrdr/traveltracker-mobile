import { StyleSheet } from 'react-native';
import { colorPrimary, colorDarkGrey, fontBody } from './Constants';

const MyListStyles = StyleSheet.create({
  safeViewContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colorPrimary,
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
    fontFamily: fontBody,
    fontSize: 24,
    color: colorPrimary,
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 30,
    paddingRight: 30,
  },
  country: {
    fontFamily: fontBody,
    fontSize: 20,
    color: colorDarkGrey,
    textAlign: 'center',
    paddingBottom: 5,
  },
});

export default MyListStyles;
