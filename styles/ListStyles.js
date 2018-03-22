import { StyleSheet } from 'react-native';
import { colorAqua, colorBlue } from './Constants';

const ListStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listButton: {
    backgroundColor: colorAqua,
    borderColor: colorBlue,
  },
  listButtonText: {
    color: 'white',
    fontFamily: 'titillium-web',
  }
});

export default ListStyles;
