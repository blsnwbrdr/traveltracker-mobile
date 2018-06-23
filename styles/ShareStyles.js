import { StyleSheet } from 'react-native';
import { colorAqua, colorBlue } from './Constants';

const ShareStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colorBlue,
  },
  scrollContainer: {
    backgroundColor: colorAqua,
  }
});

export default ShareStyles;
