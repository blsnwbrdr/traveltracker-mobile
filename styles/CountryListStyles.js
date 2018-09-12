import { StyleSheet } from 'react-native';
import { colorAqua, colorBlue, colorDarkGrey, colorLightGrey } from './Constants';

const CountryListStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colorBlue,
  },
  scrollContainer: {
    backgroundColor: 'white',
  },
  picker: {
    height: 100,
  },
  pickerItem: {
    height: 100,
    color: colorBlue,
    fontFamily: 'titillium-web',
    fontSize: 20,
  },
  listButton: {
    backgroundColor: 'white',
    borderColor: 'transparent',
    margin: 0,
  },
  listButtonText: {
    color: colorBlue,
    fontFamily: 'titillium-web',
    fontSize: 18,
    paddingRight: 20,
  },
});

export default CountryListStyles;
