import { StyleSheet } from 'react-native';
import { colorBlue, colorDarkGrey } from './Constants';

const SearchStyles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: 3,
    borderColor: colorBlue,
    marginTop: 10,
    marginBottom: 0,
  },
  header: {
    fontFamily: 'titillium-web',
    color: colorBlue,
    fontSize: 20,
    textAlign: 'center',
    marginTop: 5,
  },
  input: {
    fontFamily: 'titillium-web',
    fontSize: 20,
    color: colorDarkGrey,
    marginTop: 5,
    marginRight: 50,
    marginBottom: 5,
    marginLeft: 50,
    borderColor: colorDarkGrey,
    borderBottomWidth: 1,
    padding: 5,
  },
  listHeaderContainer: {
    marginTop: 5,
    marginRight: 50,
    marginBottom: 5,
    marginLeft: 50,
  },
  listHeader: {
    fontFamily: 'titillium-web',
    color: colorBlue,
    fontSize: 20,
    textAlign: 'center',
  },
  list: {
    fontFamily: 'titillium-web',
    color: colorDarkGrey,
    fontSize: 18,
    paddingBottom: 2,
    textAlign: 'center',
  },
});

export default SearchStyles;
