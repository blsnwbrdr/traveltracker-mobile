import { StyleSheet } from 'react-native';
import { colorAqua, colorBlue } from './Constants';

const MainNavStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colorBlue,
  },
  scrollContainer: {
    backgroundColor: colorAqua,
  },
  bottomContainer: {
    height: 40,
  }
});

export default MainNavStyles;
