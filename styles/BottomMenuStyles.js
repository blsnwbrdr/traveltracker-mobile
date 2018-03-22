import { StyleSheet } from 'react-native';
import { colorAqua, colorBlue } from './Constants';

const BottomMenuStyles = StyleSheet.create({
  bottomMenu: {
    flex: 1,
    flexDirection: 'row',
  },
  bottomMenuButton: {
    flex: 1,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colorAqua,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
  },
  bottomMenuButtonText: {
    color: 'white',
    fontSize: 10,
  }
});

export default BottomMenuStyles;
