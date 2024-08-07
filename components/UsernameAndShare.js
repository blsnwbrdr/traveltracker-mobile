import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// STYLES
import UsernameAndShareStyles from './../styles/UsernameAndShareStyles';

export default UsernameAndShare = (props) => {
  return (
    <View>
      <View style={UsernameAndShareStyles.deleteButtonContainer}>
        <TouchableOpacity onPress={() => props.onPressResetUsername()}>
          <View style={UsernameAndShareStyles.deleteButton}>
            <FontAwesome
              name='trash-o'
              size={16}
              style={UsernameAndShareStyles.deleteIcon}
            />
          </View>
        </TouchableOpacity>
      </View>
      <Text style={UsernameAndShareStyles.usernameText}>{props.username}</Text>
      <View style={UsernameAndShareStyles.shareButtonContainer}>
        <TouchableOpacity onPress={() => props.onPressShare()}>
          <View style={UsernameAndShareStyles.shareButton}>
            <Text style={UsernameAndShareStyles.shareText}>Share List</Text>
            <FontAwesome
              name='share-square-o'
              size={16}
              style={UsernameAndShareStyles.shareIcon}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={UsernameAndShareStyles.responseContainer}>
        <Text style={UsernameAndShareStyles.responseText}>
          {props.shareResponse}
        </Text>
      </View>
    </View>
  );
};
