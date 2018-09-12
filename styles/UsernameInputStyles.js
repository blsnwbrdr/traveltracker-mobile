import { StyleSheet } from 'react-native';
import { colorBlue, colorDarkGrey, colorRed } from './Constants';

const UsernameInputStyles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  header: {
    fontFamily: 'titillium-web',
    color: colorBlue,
    fontSize: 24,
    textAlign: 'center',
  },
  input: {
    fontFamily: 'titillium-web',
    fontSize: 20,
    color: colorDarkGrey,
    padding: 10,
    marginTop: 20,
    marginRight: 50,
    marginBottom: 5,
    marginLeft: 50,
    borderColor: colorDarkGrey,
    borderRadius: 3,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
  },
  response: {
    height: 20,
    fontFamily: 'titillium-web',
    fontSize: 16,
    color: colorRed,
    textAlign: 'center',
  }
});

export default UsernameInputStyles;
