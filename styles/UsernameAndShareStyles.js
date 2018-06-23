import { StyleSheet } from 'react-native';
import { colorAqua, colorBlue, colorDarkGrey, colorLightGrey } from './Constants';

const UsernameAndShareStyles = StyleSheet.create({
  usernameText: {
    fontFamily: 'titillium-web',
    fontSize: 20,
    color: colorBlue,
    textAlign: 'center',
    padding: 20,
  },
  shareButtonContainer: {
    alignItems: 'center',
  },
  shareButton: {
    borderWidth: 1,
    borderColor: colorBlue,
    borderRadius: 3,
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    flexDirection: 'row',
  },
  shareText: {
    fontFamily: 'titillium-web',
    fontSize: 16,
    color: colorLightGrey,
    textAlign: 'center',
  },
  shareIcon: {
    color: colorBlue,
    paddingTop: 5,
    paddingLeft: 10,
  },
  responseContainer: {
  },
  responseText: {
    height: 20,
    fontFamily: 'titillium-web',
    fontSize: 14,
    color: colorLightGrey,
    textAlign: 'center',
  }
});

export default UsernameAndShareStyles;
