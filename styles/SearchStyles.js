import { StyleSheet } from 'react-native';
import { colorBlue, colorDarkGrey } from './Constants';

const SearchStyles = StyleSheet.create({
  container: {
    borderTopWidth: 3,
    borderColor: colorBlue,
    marginTop: 20,
    marginBottom: 50,
  },
  header: {
    fontFamily: 'titillium-web',
    color: colorBlue,
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20,
  },
  input: {
    fontFamily: 'titillium-web',
    fontSize: 20,
    color: colorDarkGrey,
    marginTop: 25,
    marginRight: 50,
    marginBottom: 25,
    marginLeft: 50,
    borderColor: colorDarkGrey,
    borderBottomWidth: 1,
    padding: 5,
  },
  listHeaderContainer: {
    marginTop: 20,
    marginRight: 50,
    marginBottom: 20,
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
    paddingBottom: 5,
    textAlign: 'center',
  }
});

export default SearchStyles;
