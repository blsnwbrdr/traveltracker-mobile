import { StyleSheet } from 'react-native';
import { colorAqua, colorBlue, colorDarkGrey } from './Constants';

const UsernameAndShareStyles = StyleSheet.create({
  usernameText: {
    fontFamily: 'titillium-web',
    fontSize: 24,
    color: colorBlue,
    textAlign: 'center',
    padding: 20,
  },
  shareButtonContainer: {
    alignItems: 'center',
  },
  shareButton: {
    borderWidth: 1,
    borderColor: colorAqua,
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
    color: colorAqua,
    textAlign: 'center',
  },
  shareIcon: {
    color: colorAqua,
    paddingTop: 5,
    paddingLeft: 10,
  },
  responseText: {
    height: 20,
    fontFamily: 'titillium-web',
    fontSize: 16,
    color: colorDarkGrey,
    textAlign: 'center',
  }
});

export default UsernameAndShareStyles;
