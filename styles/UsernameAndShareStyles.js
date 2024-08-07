import { StyleSheet } from 'react-native';
import { colorAqua, colorBlue, colorDarkGrey } from './Constants';

const UsernameAndShareStyles = StyleSheet.create({
  usernameText: {
    fontFamily: 'titillium-web',
    fontSize: 24,
    color: colorBlue,
    textAlign: 'center',
    padding: 10,
  },
  deleteButtonContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 999,
  },
  deleteButton: {
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    flexDirection: 'row',
  },
  deleteIcon: {
    color: colorAqua,
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
  },
});

export default UsernameAndShareStyles;
