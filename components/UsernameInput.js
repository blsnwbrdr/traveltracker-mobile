import React from 'react';
import { View, TextInput, Text } from 'react-native';

// STYLES
import { colorMediumGrey } from './../styles/Constants';
import UsernameInputStyles from './../styles/UsernameInputStyles';

export default UsernameInput = (props) => {
  return (
    <View style={UsernameInputStyles.container}>
      <Text style={UsernameInputStyles.header}>Create a username</Text>
      <Text style={UsernameInputStyles.header}>to share your list</Text>
      <TextInput
        style={UsernameInputStyles.input}
        autoCorrect={false}
        autoCapitalize='none'
        placeholder='Create Username'
        placeholderTextColor={colorMediumGrey}
        clearButtonMode='always'
        maxLength={12}
        returnKeyType='send'
        onChangeText={(usernameInputText) =>
          props.usernameInputChange(usernameInputText)
        }
        onSubmitEditing={() => props.onPressSubmitUsername()}
      />
      <Text style={UsernameInputStyles.response}>{props.usernameResponse}</Text>
    </View>
  );
};
