import { StyleSheet } from 'react-native';
import { colorAqua, colorBlue } from './Constants';

const HeaderStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: colorAqua,
  },
  text: {
    fontFamily: 'chewy',
    fontSize: 50,
    color: colorBlue,
    paddingLeft: 10,
    paddingRight: 10,
  }
})

export default HeaderStyles;
