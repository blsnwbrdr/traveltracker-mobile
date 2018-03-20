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
    fontFamily: 'chewy',
    fontSize: 60,
    color: colorBlue,
    paddingLeft: 10,
    paddingRight: 10,
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
    fontFamily: 'titillium-web',
  },
  bottomMenu: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colorBlue,
  },
  bottomMenuButton: {
    flex: 1,
    margin: 10,
    marginBottom: 20,
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
