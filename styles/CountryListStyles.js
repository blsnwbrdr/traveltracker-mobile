import { StyleSheet } from 'react-native';
import { colorAqua, colorBlue } from './Constants';

const CountryListStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colorBlue,
  },
  scrollContainer: {
    backgroundColor: colorAqua,
  },
  listButton: {
    backgroundColor: colorAqua,
    borderColor: colorBlue,
  },
  listButtonText: {
    color: 'white',
    fontFamily: 'titillium-web',
  },
  footerContainer: {
    paddingTop: 50,
    paddingBottom: 25,
  },
  footerText: {
    color: 'white',
    fontFamily: 'titillium-web',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default CountryListStyles;
