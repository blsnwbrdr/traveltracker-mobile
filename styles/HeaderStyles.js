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
    fontSize: 50,
    color: colorPrimary,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default HeaderStyles;
