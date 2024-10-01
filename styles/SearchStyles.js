import { StyleSheet } from 'react-native';
import {
  colorPrimary,
  colorTertiary,
  colorDarkGrey,
  fontBody,
} from './Constants';

const SearchStyles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: 3,
    borderColor: colorPrimary,
    marginTop: 10,
    marginBottom: 0,
  },
  header: {
    fontFamily: fontBody,
    color: colorPrimary,
    fontSize: 20,
    textAlign: 'center',
    marginTop: 5,
  },
  input: {
    fontFamily: fontBody,
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
  mapButton: {
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  mapIcon: {
    color: colorTertiary,
    marginRight: 10,
  },
  mapText: {
    fontFamily: fontBody,
    color: colorTertiary,
    fontSize: 18,
  },
  listHeader: {
    fontFamily: fontBody,
    color: colorPrimary,
    fontSize: 20,
    textAlign: 'center',
  },
  list: {
    fontFamily: fontBody,
    color: colorDarkGrey,
    fontSize: 18,
    paddingBottom: 2,
    textAlign: 'center',
  },
});

export default SearchStyles;
