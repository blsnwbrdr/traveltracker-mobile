import { StyleSheet } from 'react-native';
import { colorBlue, colorDarkGrey, colorLightGrey, colorRed } from './Constants';

const UsernameInputStyles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  header: {
    fontFamily: 'titillium-web',
    color: colorLightGrey,
    fontSize: 20,
    textAlign: 'center',
  },
  input: {
    fontFamily: 'titillium-web',
    color: colorBlue,
    padding: 10,
    marginTop: 20,
    marginRight: 50,
    marginBottom: 5,
    marginLeft: 50,
    borderColor: colorLightGrey,
    borderRadius: 3,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
  },
  response: {
    height: 20,
    fontFamily: 'titillium-web',
    fontSize: 14,
    color: colorRed,
    textAlign: 'center',
  }
});

export default UsernameInputStyles;
