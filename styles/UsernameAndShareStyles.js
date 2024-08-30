import { StyleSheet } from 'react-native';
import {
  colorPrimary,
  colorTertiary,
  colorDarkGrey,
  fontBody,
} from './Constants';

const UsernameAndShareStyles = StyleSheet.create({
  usernameText: {
    fontFamily: fontBody,
    fontSize: 24,
    color: colorPrimary,
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
    color: colorTertiary,
  },
  shareButtonContainer: {
    alignItems: 'center',
  },
  shareButton: {
    borderWidth: 1,
    borderColor: colorTertiary,
    borderRadius: 3,
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    flexDirection: 'row',
  },
  shareText: {
    fontFamily: fontBody,
    fontSize: 16,
    color: colorTertiary,
    textAlign: 'center',
  },
  shareIcon: {
    color: colorTertiary,
    paddingTop: 5,
    paddingLeft: 10,
  },
  responseText: {
    height: 20,
    fontFamily: fontBody,
    fontSize: 16,
    color: colorDarkGrey,
    textAlign: 'center',
  },
});

export default UsernameAndShareStyles;
