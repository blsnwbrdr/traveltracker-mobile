import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';

// STYLES
import UsernameInputStyles from './../styles/UsernameInputStyles';

export default class UsernameInput extends Component {

  render() {
    return (
      <View style={UsernameInputStyles.container}>
        <Text style={UsernameInputStyles.header}>Create a username</Text>
        <Text style={UsernameInputStyles.header}>to share your list</Text>
        <TextInput
          style={UsernameInputStyles.input}
          autoCorrect={false}
          autoCapitalize='none'
          placeholder='Create Username'
          clearButtonMode='always'
          maxLength={12}
          returnKeyType='send'
          onChangeText={(usernameInputText) => this.props.usernameInputChange(usernameInputText)}
          onSubmitEditing={() => this.props.onPressSubmitUsername()}
        />
        <Text style={UsernameInputStyles.response}>{this.props.usernameResponse}</Text>
      </View>
    );
  }
}
