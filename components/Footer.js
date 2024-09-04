import React from 'react';
import { View, Text } from 'react-native';

// STYLES
import FooterStyles from './../styles/FooterStyles';

export default Footer = () => {
  return (
    <View style={FooterStyles.container}>
      <Text style={FooterStyles.text}>v3.1.1</Text>
    </View>
  );
};
