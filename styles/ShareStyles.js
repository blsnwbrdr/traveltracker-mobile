import { StyleSheet } from 'react-native';
import { colorPrimary } from './Constants';

const ShareStyles = StyleSheet.create({
  safeViewContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colorPrimary,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default ShareStyles;
