import { StyleSheet } from 'react-native';
import { colorAqua, colorBlue } from './Constants';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorAqua,
  },
  headerContainer: {
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor: colorAqua,
  },
  titleText: {
    fontSize: 60,
    color: colorBlue,
    marginBottom: 0,
  },
  countryListContainer: {
    flex: 1,
    backgroundColor: colorAqua,
  },
  scrollContainer: {
    flex: 9,
  },
  listButton: {
    backgroundColor: colorAqua,
    borderColor: colorBlue,
  },
  listButtonText: {
    color: 'white',
  },
  bottomMenu: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colorBlue,
  },
  bottomMenuButton: {
    flex: 1,
    margin: 10,
    // padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colorAqua,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
  },
  bottomMenuButtonText: {
    color: 'white',
  }
});

export default Styles;
