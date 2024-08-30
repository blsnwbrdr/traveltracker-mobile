import { StyleSheet } from 'react-native';
import { colorPrimary, fontHeader } from './Constants';

const HeaderStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 0,
    backgroundColor: 'white',
  },
  text: {
    fontFamily: fontHeader,
    fontSize: 32,
    letterSpacing: 4,
    color: colorPrimary,
    paddingLeft: 10,
    paddingRight: 10,
  },
  img: {
    height: 45,
    width: 80,
  },
});

export default HeaderStyles;
