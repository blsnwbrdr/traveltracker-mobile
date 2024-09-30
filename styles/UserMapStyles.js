import { StyleSheet } from 'react-native';
import {
  colorPrimary,
  colorTertiary,
  colorDarkGrey,
  fontBody,
} from './Constants';

const UserMapStyles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: 3,
    borderColor: colorPrimary,
    marginTop: 10,
    marginBottom: 0,
  },
  backContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 999,
  },
  backButton: {
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    flexDirection: 'row',
  },
  backIcon: {
    color: colorTertiary,
  },
  header: {
    fontFamily: fontBody,
    color: colorPrimary,
    fontSize: 20,
    textAlign: 'center',
    marginTop: 5,
  },
});

export default UserMapStyles;
