import { StyleSheet } from 'react-native';
import {
  colorPrimary,
  colorSecondary,
  colorTertiary,
  colorDarkGrey,
  fontBody,
} from './Constants';

const CountryListStyles = StyleSheet.create({
  safeViewContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colorPrimary,
  },
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: 'white',
  },
  picker: {
    height: 60,
    backgroundColor: 'white',
  },
  pickerItem: {
    height: 60,
    color: colorPrimary,
    fontFamily: fontBody,
    fontSize: 20,
  },
  pickerSubText: {
    color: colorTertiary,
    textAlign: 'center',
    fontFamily: fontBody,
    fontSize: 12,
    marginBottom: 20,
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
  listButtonContainer: {
    marginHorizontal: 20,
    marginVertical: 5,
  },
  listButtonChecked: {
    backgroundColor: colorSecondary,
    borderColor: colorPrimary,
  },
  listButtonUnchecked: {
    backgroundColor: colorPrimary,
    borderColor: colorSecondary,
  },
  listButtonTitleChecked: {
    color: colorPrimary,
    fontFamily: fontBody,
    fontSize: 18,
  },
  listButtonTitleUnchecked: {
    color: 'white',
    fontFamily: fontBody,
    fontSize: 18,
  },
});

export default CountryListStyles;
