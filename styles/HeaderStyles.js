import { StyleSheet } from 'react-native';
import { colorBlue } from './Constants';

const HeaderStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 0,
    backgroundColor: 'white',
  },
  text: {
    fontFamily: 'chewy',
    fontSize: 50,
    color: colorBlue,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default HeaderStyles;
