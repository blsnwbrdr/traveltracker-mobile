import { StyleSheet } from 'react-native';
import { colorDarkGrey } from './Constants';

const FooterStyles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 25,
  },
  text: {
    color: colorDarkGrey,
    fontFamily: 'titillium-web',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default FooterStyles;
