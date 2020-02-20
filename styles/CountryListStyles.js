import { StyleSheet } from 'react-native';
import { colorBlue, colorDarkGrey, colorAqua, colorMediumGrey } from './Constants';

const CountryListStyles = StyleSheet.create({
  safeViewContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colorBlue,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  picker: {
    height: 60,
    backgroundColor: 'white',
  },
  pickerItem: {
    height: 60,
    color: colorBlue,
    fontFamily: 'titillium-web',
    fontSize: 20,
  },
  pickerSubText: {
    color: colorAqua,
    textAlign: 'center',
    fontFamily: 'titillium-web',
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
    color: colorAqua,
  },
  listButton: {
    backgroundColor: 'white',
    borderColor: 'transparent',
    margin: 0,
  },
  listButtonText: {
    color: colorDarkGrey,
    fontFamily: 'titillium-web',
    fontSize: 18,
    paddingRight: 20,
  },
});

export default CountryListStyles;
